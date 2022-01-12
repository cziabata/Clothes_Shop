import {gql} from "@apollo/client";

export const AllData = gql`
query{
  category{products{name, id, brand, prices{amount, currency}, gallery, category, attributes{name, type, items{value, displayValue, id}}, description}}
}
`
export const GetCategories = gql`
query{
  categories{name}
}
`