import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ApiProductService } from 'src/app/core/api/api-product.service';
import { UtilsService } from 'src/app/core/services/utils.service';
import { ElementPaginatorComponent } from 'src/app/shared/components/element-paginator/element-paginator.component';
import { IAssociatedIds } from 'src/app/shared/models/associated-ids.model';
import { IBreadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { IDatabaseTimes } from 'src/app/shared/models/database-times';
import { IHttpResponse } from 'src/app/shared/models/http.model';
import { IPaginationControl } from 'src/app/shared/models/pagination-control.model';
import { IServersResponseData } from 'src/app/shared/models/servers-response-data';
import { IProduct } from 'src/app/shared/models/views.model';

const LIMIT = 50;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  breadcrumb: IBreadcrumb = [{ label: 'Settings', isLink: true, path: '/settings' }];

  @ViewChild(ElementPaginatorComponent) elementPaginator: ElementPaginatorComponent;

  productsColumns: string[] = ['sku', 'name', 'category', 'unit', 'salePrice'];
  productsDataSource = new MatTableDataSource<IProduct>();
  productsCount: number;

  products: IProduct[];

  paginationControl: IPaginationControl;

  databaseCountTimes: IDatabaseTimes;

  databaseTimes: IDatabaseTimes;
  associatedIds: IAssociatedIds;

  constructor(
    private productApi: ApiProductService,
    private route: ActivatedRoute,
    private router: Router,
    public utils: UtilsService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.productApi
      .countProducts()
      .pipe(
        switchMap((res: IHttpResponse) => {
          this.databaseCountTimes = this.utils.setTimes(res);
          this.productsCount = res.mongodbMongoose.res;
          this.initPaginationControl();

          return this.productApi.getProducts(this.paginationControl);
        })
      )
      .subscribe((res: IHttpResponse) => {
        this.setData(res);
      });
  }

  queryProducts(): void {
    this.productApi.getProducts(this.paginationControl).subscribe((res: IHttpResponse) => {
      this.setData(res);
    });
  }

  setData(res: IHttpResponse): void {
    this.databaseTimes = this.utils.setTimes(res);
    this.products = this.getProducts(res);
    this.setDataSource(this.products);
  }

  getProducts(res: IHttpResponse): IProduct[] {
    const productByServer: IServersResponseData = this.utils.splitResponsesByServerId(res);
    return this.utils.appendAssociatedIdsByUniqueCommonData(productByServer, 'sku');
  }

  setDataSource(product: IProduct[]): void {
    this.productsDataSource = new MatTableDataSource(product);
  }

  navigateToEditProduct(product: IProduct): void {
    const params = {
      ...(product.associatedIds.postgresSequelizeId && {
        postgresSequelize: product.associatedIds.postgresSequelizeId,
      }),
    };
    const options = { relativeTo: this.route };
    this.router.navigate(['edit', product._id, params], options);
  }

  resetData(): void {
    this.databaseTimes = this.utils.resetTimes();
    this.products = undefined;
  }

  refreshComponent(): void {
    this.resetPaginationControl();
    this.resetData();
    this.fetchData();
  }

  initPaginationControl(): void {
    this.paginationControl = {
      pagination: true,
      page: 0,
      limit: this.productsCount < LIMIT ? this.productsCount : LIMIT,
    };
  }

  resetPaginationControl(): void {
    this.initPaginationControl();
  }

  onPageChange(paginationControl: IPaginationControl) {
    this.paginationControl = { ...paginationControl };
    this.resetData();
    this.queryProducts();
  }
}
