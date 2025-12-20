export default {
  importOrder: ["^[@]", "^[#]", "^[.]"],
  importOrderCaseInsensitive: true,
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  plugins: ["prettier-plugin-css-order", "@trivago/prettier-plugin-sort-imports"],
  printWidth: 120,
  semi: false,
  singleAttributePerLine: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
}
