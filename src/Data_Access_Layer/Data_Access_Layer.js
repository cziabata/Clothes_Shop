import {gql} from "@apollo/client";

export const Data = gql`
query{
  categories{name, products{description, brand, inStock, gallery ,category,prices{currency, amount}, attributes{items{displayValue}}}}
}
`
export const AllData = gql`
query{
  category{products{name, brand, prices{amount, currency}, gallery, category, attributes{name, type, items{value, displayValue, id}}, description}}
}
`
export const GetCategories = gql`
query{
  categories{name}
}
`
export const Data2 = gql`
query{
    category{products {name}}
  }
`