import {gql} from "@apollo/client";

const CATEGORY_DATA = gql`
fragment categoryData on Category {
  name, products{name, id, brand, prices{amount, currency}, description, gallery, category, inStock, attributes{name, id, type, items{displayValue, id, value}}}
}
`

export const AllData = gql`
${CATEGORY_DATA}
query{
  category{...categoryData}
}
`
export const GetTech = gql`
${CATEGORY_DATA}
query{
  category(input: {title: "tech"}){...categoryData}
}
`
export const GetClothes = gql`
${CATEGORY_DATA}
query{
  category(input: {title: "clothes"}){...categoryData}
}
`
export const GetCategories = gql`
query{
  categories{name}
}
`
