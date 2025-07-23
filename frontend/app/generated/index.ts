import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
};

export type CreateShopInput = {
  address: Scalars['String']['input'];
  email: Scalars['String']['input'];
  is_active: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
};

export type Customer = {
  __typename?: 'Customer';
  companyLocation: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  companyNumber: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CustomerInput = {
  companyLocation: Scalars['String']['input'];
  companyName: Scalars['String']['input'];
  companyNumber: Scalars['String']['input'];
};

export type DeliveryPerson = {
  __typename?: 'DeliveryPerson';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DeliveryPersonInput = {
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCustomer: Response;
  createDeliveryPerson: Response;
  createProduct: Response;
  createProductDelivery: Response;
  createProductReturn: Response;
  createShop: Response;
  deleteDeliveryPerson: Response;
  deleteShop: Scalars['Boolean']['output'];
  updateDeliveryPerson: Response;
  updateShop: Shop;
};


export type MutationCreateCustomerArgs = {
  input: CustomerInput;
};


export type MutationCreateDeliveryPersonArgs = {
  input: DeliveryPersonInput;
};


export type MutationCreateProductArgs = {
  input: ProductInput;
};


export type MutationCreateProductDeliveryArgs = {
  input: ProductDeliveryInput;
};


export type MutationCreateProductReturnArgs = {
  input: ProductReturnInput;
};


export type MutationCreateShopArgs = {
  input: CreateShopInput;
};


export type MutationDeleteDeliveryPersonArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteShopArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateDeliveryPersonArgs = {
  input: UpdateDeliveryPersonInput;
};


export type MutationUpdateShopArgs = {
  data: UpdateShopInput;
  id: Scalars['ID']['input'];
};

export type Product = {
  __typename?: 'Product';
  barcode?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  imageURL?: Maybe<Scalars['String']['output']>;
  ingredient?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  stock: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductDelivery = {
  __typename?: 'ProductDelivery';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deliveryPerson: DeliveryPerson;
  deliveryPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  product: Product;
  productId: Scalars['String']['output'];
  productType?: Maybe<Scalars['String']['output']>;
  quantity: Scalars['Int']['output'];
  shop?: Maybe<Shop>;
  shopId: Scalars['String']['output'];
  signature?: Maybe<Scalars['String']['output']>;
  totalPrice?: Maybe<Scalars['Int']['output']>;
  transactionType: TransactionEnum;
  unitPrice?: Maybe<Scalars['Int']['output']>;
};

export type ProductDeliveryInput = {
  deliveryPersonId: Scalars['String']['input'];
  productId: Scalars['String']['input'];
  productType?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  shopId: Scalars['String']['input'];
  signature?: InputMaybe<Scalars['String']['input']>;
  totalPrice?: InputMaybe<Scalars['Int']['input']>;
  transactionType: TransactionEnum;
  unitPrice?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductInput = {
  barcode: Scalars['String']['input'];
  imageURL: Scalars['String']['input'];
  ingredient?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Int']['input'];
  stock: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type ProductReturn = {
  __typename?: 'ProductReturn';
  created_at: Scalars['DateTime']['output'];
  deliveryPersonId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  pieces: Scalars['Int']['output'];
  productId: Scalars['String']['output'];
  shopId: Scalars['String']['output'];
  signature: Scalars['String']['output'];
  totalPrice: Scalars['Int']['output'];
  unitPrice: Scalars['Int']['output'];
};

export type ProductReturnInput = {
  deliveryPersonId: Scalars['String']['input'];
  pieces: Scalars['Int']['input'];
  productId: Scalars['String']['input'];
  shopId: Scalars['String']['input'];
  signature: Scalars['String']['input'];
  totalPrice: Scalars['Int']['input'];
  unitPrice: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  Return: Array<ProductReturn>;
  customer: Array<Customer>;
  deliveryPerson: Array<DeliveryPerson>;
  product: Array<Product>;
  productDelivery: Array<ProductDelivery>;
  shop: Array<Shop>;
};

export enum Response {
  NotFound = 'NOT_FOUND',
  Success = 'Success'
}

export type Shop = {
  __typename?: 'Shop';
  address: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  is_active: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  phone_number: Scalars['String']['output'];
};

export enum TransactionEnum {
  BankTransfer = 'BANK_TRANSFER',
  Cash = 'CASH',
  Credit = 'CREDIT',
  NotPayment = 'NOT_PAYMENT'
}

export type UpdateDeliveryPersonInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateShopInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCustomerMutationVariables = Exact<{
  input: CustomerInput;
}>;


export type CreateCustomerMutation = { __typename?: 'Mutation', createCustomer: Response };

export type QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryQuery = { __typename?: 'Query', customer: Array<{ __typename?: 'Customer', companyName: string, companyNumber: string, companyLocation: string, id: string, createdAt?: string | null }> };

export type CreateProductDeliveryMutationVariables = Exact<{
  input: ProductDeliveryInput;
}>;


export type CreateProductDeliveryMutation = { __typename?: 'Mutation', createProductDelivery: Response };

export type ProductDeliveryQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductDeliveryQuery = { __typename?: 'Query', productDelivery: Array<{ __typename?: 'ProductDelivery', id: string, productId: string, shopId: string, deliveryPersonId: string, quantity: number, unitPrice?: number | null, totalPrice?: number | null, transactionType: TransactionEnum, createdAt?: string | null, signature?: string | null, product: { __typename?: 'Product', id: string, title: string, description?: string | null, type: string, stock: number, ingredient?: string | null, barcode?: string | null, price?: number | null, imageURL?: string | null, expiredAt?: string | null, createdAt?: string | null, updatedAt?: string | null }, shop?: { __typename?: 'Shop', id: string, name: string, address: string, is_active: boolean, email: string, phone_number: string } | null, deliveryPerson: { __typename?: 'DeliveryPerson', id?: string | null, name?: string | null, phoneNumber?: string | null, image?: string | null, createdAt?: string | null, updatedAt?: string | null } }> };

export type CreateDeliveryPersonMutationVariables = Exact<{
  input: DeliveryPersonInput;
}>;


export type CreateDeliveryPersonMutation = { __typename?: 'Mutation', createDeliveryPerson: Response };

export type DeliveryPersonQueryVariables = Exact<{ [key: string]: never; }>;


export type DeliveryPersonQuery = { __typename?: 'Query', deliveryPerson: Array<{ __typename?: 'DeliveryPerson', id?: string | null, name?: string | null, phoneNumber?: string | null, image?: string | null, createdAt?: string | null, updatedAt?: string | null }> };

export type CreateProductMutationVariables = Exact<{
  input: ProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: Response };

export type ProductQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductQuery = { __typename?: 'Query', product: Array<{ __typename?: 'Product', id: string, title: string, type: string, stock: number, ingredient?: string | null, barcode?: string | null, price?: number | null, imageURL?: string | null }> };

export type CreateProductReturnMutationVariables = Exact<{
  input: ProductReturnInput;
}>;


export type CreateProductReturnMutation = { __typename?: 'Mutation', createProductReturn: Response };

export type ReturnQueryVariables = Exact<{ [key: string]: never; }>;


export type ReturnQuery = { __typename?: 'Query', Return: Array<{ __typename?: 'ProductReturn', id: string, productId: string, deliveryPersonId?: string | null, shopId: string, pieces: number, unitPrice: number, totalPrice: number, signature: string, created_at: string }> };

export type CreateShopMutationVariables = Exact<{
  input: CreateShopInput;
}>;


export type CreateShopMutation = { __typename?: 'Mutation', createShop: Response };

export type ShopQueryVariables = Exact<{ [key: string]: never; }>;


export type ShopQuery = { __typename?: 'Query', shop: Array<{ __typename?: 'Shop', id: string, name: string, address: string, is_active: boolean, email: string, phone_number: string }> };

export type UpdateDeliveryPersonMutationVariables = Exact<{
  input: UpdateDeliveryPersonInput;
}>;


export type UpdateDeliveryPersonMutation = { __typename?: 'Mutation', updateDeliveryPerson: Response };

export type DeleteDeliveryPersonMutationVariables = Exact<{
  deleteDeliveryPersonId: Scalars['ID']['input'];
}>;


export type DeleteDeliveryPersonMutation = { __typename?: 'Mutation', deleteDeliveryPerson: Response };


export const CreateCustomerDocument = gql`
    mutation CreateCustomer($input: CustomerInput!) {
  createCustomer(input: $input)
}
    `;
export type CreateCustomerMutationFn = Apollo.MutationFunction<CreateCustomerMutation, CreateCustomerMutationVariables>;

/**
 * __useCreateCustomerMutation__
 *
 * To run a mutation, you first call `useCreateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerMutation, { data, loading, error }] = useCreateCustomerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCustomerMutation(baseOptions?: Apollo.MutationHookOptions<CreateCustomerMutation, CreateCustomerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCustomerMutation, CreateCustomerMutationVariables>(CreateCustomerDocument, options);
      }
export type CreateCustomerMutationHookResult = ReturnType<typeof useCreateCustomerMutation>;
export type CreateCustomerMutationResult = Apollo.MutationResult<CreateCustomerMutation>;
export type CreateCustomerMutationOptions = Apollo.BaseMutationOptions<CreateCustomerMutation, CreateCustomerMutationVariables>;
export const QueryDocument = gql`
    query Query {
  customer {
    companyName
    companyNumber
    companyLocation
    id
    createdAt
  }
}
    `;

/**
 * __useQueryQuery__
 *
 * To run a query within a React component, call `useQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryQuery(baseOptions?: Apollo.QueryHookOptions<QueryQuery, QueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
      }
export function useQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryQuery, QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
        }
export function useQuerySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<QueryQuery, QueryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
        }
export type QueryQueryHookResult = ReturnType<typeof useQueryQuery>;
export type QueryLazyQueryHookResult = ReturnType<typeof useQueryLazyQuery>;
export type QuerySuspenseQueryHookResult = ReturnType<typeof useQuerySuspenseQuery>;
export type QueryQueryResult = Apollo.QueryResult<QueryQuery, QueryQueryVariables>;
export const CreateProductDeliveryDocument = gql`
    mutation CreateProductDelivery($input: ProductDeliveryInput!) {
  createProductDelivery(input: $input)
}
    `;
export type CreateProductDeliveryMutationFn = Apollo.MutationFunction<CreateProductDeliveryMutation, CreateProductDeliveryMutationVariables>;

/**
 * __useCreateProductDeliveryMutation__
 *
 * To run a mutation, you first call `useCreateProductDeliveryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductDeliveryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductDeliveryMutation, { data, loading, error }] = useCreateProductDeliveryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductDeliveryMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductDeliveryMutation, CreateProductDeliveryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductDeliveryMutation, CreateProductDeliveryMutationVariables>(CreateProductDeliveryDocument, options);
      }
export type CreateProductDeliveryMutationHookResult = ReturnType<typeof useCreateProductDeliveryMutation>;
export type CreateProductDeliveryMutationResult = Apollo.MutationResult<CreateProductDeliveryMutation>;
export type CreateProductDeliveryMutationOptions = Apollo.BaseMutationOptions<CreateProductDeliveryMutation, CreateProductDeliveryMutationVariables>;
export const ProductDeliveryDocument = gql`
    query ProductDelivery {
  productDelivery {
    id
    productId
    product {
      id
      title
      description
      type
      stock
      ingredient
      barcode
      price
      imageURL
      expiredAt
      createdAt
      updatedAt
    }
    shopId
    shop {
      id
      name
      address
      is_active
      email
      phone_number
    }
    deliveryPersonId
    deliveryPerson {
      id
      name
      phoneNumber
      image
      createdAt
      updatedAt
    }
    quantity
    unitPrice
    totalPrice
    transactionType
    createdAt
    signature
  }
}
    `;

/**
 * __useProductDeliveryQuery__
 *
 * To run a query within a React component, call `useProductDeliveryQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductDeliveryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductDeliveryQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductDeliveryQuery(baseOptions?: Apollo.QueryHookOptions<ProductDeliveryQuery, ProductDeliveryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductDeliveryQuery, ProductDeliveryQueryVariables>(ProductDeliveryDocument, options);
      }
export function useProductDeliveryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductDeliveryQuery, ProductDeliveryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductDeliveryQuery, ProductDeliveryQueryVariables>(ProductDeliveryDocument, options);
        }
export function useProductDeliverySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductDeliveryQuery, ProductDeliveryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductDeliveryQuery, ProductDeliveryQueryVariables>(ProductDeliveryDocument, options);
        }
export type ProductDeliveryQueryHookResult = ReturnType<typeof useProductDeliveryQuery>;
export type ProductDeliveryLazyQueryHookResult = ReturnType<typeof useProductDeliveryLazyQuery>;
export type ProductDeliverySuspenseQueryHookResult = ReturnType<typeof useProductDeliverySuspenseQuery>;
export type ProductDeliveryQueryResult = Apollo.QueryResult<ProductDeliveryQuery, ProductDeliveryQueryVariables>;
export const CreateDeliveryPersonDocument = gql`
    mutation CreateDeliveryPerson($input: DeliveryPersonInput!) {
  createDeliveryPerson(input: $input)
}
    `;
export type CreateDeliveryPersonMutationFn = Apollo.MutationFunction<CreateDeliveryPersonMutation, CreateDeliveryPersonMutationVariables>;

/**
 * __useCreateDeliveryPersonMutation__
 *
 * To run a mutation, you first call `useCreateDeliveryPersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDeliveryPersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDeliveryPersonMutation, { data, loading, error }] = useCreateDeliveryPersonMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDeliveryPersonMutation(baseOptions?: Apollo.MutationHookOptions<CreateDeliveryPersonMutation, CreateDeliveryPersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDeliveryPersonMutation, CreateDeliveryPersonMutationVariables>(CreateDeliveryPersonDocument, options);
      }
export type CreateDeliveryPersonMutationHookResult = ReturnType<typeof useCreateDeliveryPersonMutation>;
export type CreateDeliveryPersonMutationResult = Apollo.MutationResult<CreateDeliveryPersonMutation>;
export type CreateDeliveryPersonMutationOptions = Apollo.BaseMutationOptions<CreateDeliveryPersonMutation, CreateDeliveryPersonMutationVariables>;
export const DeliveryPersonDocument = gql`
    query DeliveryPerson {
  deliveryPerson {
    id
    name
    phoneNumber
    image
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useDeliveryPersonQuery__
 *
 * To run a query within a React component, call `useDeliveryPersonQuery` and pass it any options that fit your needs.
 * When your component renders, `useDeliveryPersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeliveryPersonQuery({
 *   variables: {
 *   },
 * });
 */
export function useDeliveryPersonQuery(baseOptions?: Apollo.QueryHookOptions<DeliveryPersonQuery, DeliveryPersonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DeliveryPersonQuery, DeliveryPersonQueryVariables>(DeliveryPersonDocument, options);
      }
export function useDeliveryPersonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DeliveryPersonQuery, DeliveryPersonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DeliveryPersonQuery, DeliveryPersonQueryVariables>(DeliveryPersonDocument, options);
        }
export function useDeliveryPersonSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DeliveryPersonQuery, DeliveryPersonQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<DeliveryPersonQuery, DeliveryPersonQueryVariables>(DeliveryPersonDocument, options);
        }
export type DeliveryPersonQueryHookResult = ReturnType<typeof useDeliveryPersonQuery>;
export type DeliveryPersonLazyQueryHookResult = ReturnType<typeof useDeliveryPersonLazyQuery>;
export type DeliveryPersonSuspenseQueryHookResult = ReturnType<typeof useDeliveryPersonSuspenseQuery>;
export type DeliveryPersonQueryResult = Apollo.QueryResult<DeliveryPersonQuery, DeliveryPersonQueryVariables>;
export const CreateProductDocument = gql`
    mutation CreateProduct($input: ProductInput!) {
  createProduct(input: $input)
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, options);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const ProductDocument = gql`
    query Product {
  product {
    id
    title
    type
    stock
    ingredient
    barcode
    price
    imageURL
  }
}
    `;

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductQuery(baseOptions?: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
      }
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export function useProductSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductQuery, ProductQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
        }
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductSuspenseQueryHookResult = ReturnType<typeof useProductSuspenseQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const CreateProductReturnDocument = gql`
    mutation CreateProductReturn($input: ProductReturnInput!) {
  createProductReturn(input: $input)
}
    `;
export type CreateProductReturnMutationFn = Apollo.MutationFunction<CreateProductReturnMutation, CreateProductReturnMutationVariables>;

/**
 * __useCreateProductReturnMutation__
 *
 * To run a mutation, you first call `useCreateProductReturnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductReturnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductReturnMutation, { data, loading, error }] = useCreateProductReturnMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductReturnMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductReturnMutation, CreateProductReturnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProductReturnMutation, CreateProductReturnMutationVariables>(CreateProductReturnDocument, options);
      }
export type CreateProductReturnMutationHookResult = ReturnType<typeof useCreateProductReturnMutation>;
export type CreateProductReturnMutationResult = Apollo.MutationResult<CreateProductReturnMutation>;
export type CreateProductReturnMutationOptions = Apollo.BaseMutationOptions<CreateProductReturnMutation, CreateProductReturnMutationVariables>;
export const ReturnDocument = gql`
    query Return {
  Return {
    id
    productId
    deliveryPersonId
    shopId
    pieces
    unitPrice
    totalPrice
    signature
    created_at
  }
}
    `;

/**
 * __useReturnQuery__
 *
 * To run a query within a React component, call `useReturnQuery` and pass it any options that fit your needs.
 * When your component renders, `useReturnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReturnQuery({
 *   variables: {
 *   },
 * });
 */
export function useReturnQuery(baseOptions?: Apollo.QueryHookOptions<ReturnQuery, ReturnQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReturnQuery, ReturnQueryVariables>(ReturnDocument, options);
      }
export function useReturnLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReturnQuery, ReturnQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReturnQuery, ReturnQueryVariables>(ReturnDocument, options);
        }
export function useReturnSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ReturnQuery, ReturnQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ReturnQuery, ReturnQueryVariables>(ReturnDocument, options);
        }
export type ReturnQueryHookResult = ReturnType<typeof useReturnQuery>;
export type ReturnLazyQueryHookResult = ReturnType<typeof useReturnLazyQuery>;
export type ReturnSuspenseQueryHookResult = ReturnType<typeof useReturnSuspenseQuery>;
export type ReturnQueryResult = Apollo.QueryResult<ReturnQuery, ReturnQueryVariables>;
export const CreateShopDocument = gql`
    mutation CreateShop($input: CreateShopInput!) {
  createShop(input: $input)
}
    `;
export type CreateShopMutationFn = Apollo.MutationFunction<CreateShopMutation, CreateShopMutationVariables>;

/**
 * __useCreateShopMutation__
 *
 * To run a mutation, you first call `useCreateShopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShopMutation, { data, loading, error }] = useCreateShopMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateShopMutation(baseOptions?: Apollo.MutationHookOptions<CreateShopMutation, CreateShopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateShopMutation, CreateShopMutationVariables>(CreateShopDocument, options);
      }
export type CreateShopMutationHookResult = ReturnType<typeof useCreateShopMutation>;
export type CreateShopMutationResult = Apollo.MutationResult<CreateShopMutation>;
export type CreateShopMutationOptions = Apollo.BaseMutationOptions<CreateShopMutation, CreateShopMutationVariables>;
export const ShopDocument = gql`
    query Shop {
  shop {
    id
    name
    address
    is_active
    email
    phone_number
  }
}
    `;

/**
 * __useShopQuery__
 *
 * To run a query within a React component, call `useShopQuery` and pass it any options that fit your needs.
 * When your component renders, `useShopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShopQuery({
 *   variables: {
 *   },
 * });
 */
export function useShopQuery(baseOptions?: Apollo.QueryHookOptions<ShopQuery, ShopQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShopQuery, ShopQueryVariables>(ShopDocument, options);
      }
export function useShopLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShopQuery, ShopQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShopQuery, ShopQueryVariables>(ShopDocument, options);
        }
export function useShopSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ShopQuery, ShopQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ShopQuery, ShopQueryVariables>(ShopDocument, options);
        }
export type ShopQueryHookResult = ReturnType<typeof useShopQuery>;
export type ShopLazyQueryHookResult = ReturnType<typeof useShopLazyQuery>;
export type ShopSuspenseQueryHookResult = ReturnType<typeof useShopSuspenseQuery>;
export type ShopQueryResult = Apollo.QueryResult<ShopQuery, ShopQueryVariables>;
export const UpdateDeliveryPersonDocument = gql`
    mutation UpdateDeliveryPerson($input: UpdateDeliveryPersonInput!) {
  updateDeliveryPerson(input: $input)
}
    `;
export type UpdateDeliveryPersonMutationFn = Apollo.MutationFunction<UpdateDeliveryPersonMutation, UpdateDeliveryPersonMutationVariables>;

/**
 * __useUpdateDeliveryPersonMutation__
 *
 * To run a mutation, you first call `useUpdateDeliveryPersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDeliveryPersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDeliveryPersonMutation, { data, loading, error }] = useUpdateDeliveryPersonMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDeliveryPersonMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDeliveryPersonMutation, UpdateDeliveryPersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDeliveryPersonMutation, UpdateDeliveryPersonMutationVariables>(UpdateDeliveryPersonDocument, options);
      }
export type UpdateDeliveryPersonMutationHookResult = ReturnType<typeof useUpdateDeliveryPersonMutation>;
export type UpdateDeliveryPersonMutationResult = Apollo.MutationResult<UpdateDeliveryPersonMutation>;
export type UpdateDeliveryPersonMutationOptions = Apollo.BaseMutationOptions<UpdateDeliveryPersonMutation, UpdateDeliveryPersonMutationVariables>;
export const DeleteDeliveryPersonDocument = gql`
    mutation DeleteDeliveryPerson($deleteDeliveryPersonId: ID!) {
  deleteDeliveryPerson(id: $deleteDeliveryPersonId)
}
    `;
export type DeleteDeliveryPersonMutationFn = Apollo.MutationFunction<DeleteDeliveryPersonMutation, DeleteDeliveryPersonMutationVariables>;

/**
 * __useDeleteDeliveryPersonMutation__
 *
 * To run a mutation, you first call `useDeleteDeliveryPersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDeliveryPersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDeliveryPersonMutation, { data, loading, error }] = useDeleteDeliveryPersonMutation({
 *   variables: {
 *      deleteDeliveryPersonId: // value for 'deleteDeliveryPersonId'
 *   },
 * });
 */
export function useDeleteDeliveryPersonMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDeliveryPersonMutation, DeleteDeliveryPersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDeliveryPersonMutation, DeleteDeliveryPersonMutationVariables>(DeleteDeliveryPersonDocument, options);
      }
export type DeleteDeliveryPersonMutationHookResult = ReturnType<typeof useDeleteDeliveryPersonMutation>;
export type DeleteDeliveryPersonMutationResult = Apollo.MutationResult<DeleteDeliveryPersonMutation>;
export type DeleteDeliveryPersonMutationOptions = Apollo.BaseMutationOptions<DeleteDeliveryPersonMutation, DeleteDeliveryPersonMutationVariables>;