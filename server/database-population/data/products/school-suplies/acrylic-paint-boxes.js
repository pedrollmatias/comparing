'use strict';

const acrylicPaintBoxes = [
  {
    name: 'Caixa Tinta Acrílico/Marca A/P',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D78436B',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca A/M',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D78436C',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca A/G',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D78436D',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca B/P',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D78436E',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca B/M',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D78436F',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca B/G',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D784370',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca C/P',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D784371',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca C/M',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D784372',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca C/G',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D784373',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca D/P',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D784374',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca D/M',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D784375',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca D/G',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D784376',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca E/P',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D784377',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca E/M',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D784378',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca E/G',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D784379',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca F/P',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D78437A',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca F/M',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D78437B',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca F/G',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D78437C',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca G/P',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D78437D',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca G/M',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D78437E',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca G/G',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D78437F',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca H/P',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D784380',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca H/M',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D784381',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca H/G',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D784382',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca I/P',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D784383',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca I/M',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D784384',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca I/G',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D784385',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca J/P',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D784386',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca J/M',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D784387',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
  {
    name: 'Caixa Tinta Acrílico/Marca J/G',
    aceitaCor: false,
    costPrice: 3,
    salePrice: 5.7,
    currentAmount: 1000000,
    minAmount: 0,
    maxAmount: null,
    sku: '1778D784388',
    categoryPathRef: 'Materiais Escolares > Caixas Tinta Acril.',
    unitNameRef: 'Unidade',
  },
];

module.exports = acrylicPaintBoxes;
