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
  DateTime: { input: any; output: any; }
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
  deleteDeliveryPerson: Response;
  updateDeliveryPerson: Response;
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


export type MutationDeleteDeliveryPersonArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateDeliveryPersonArgs = {
  input: UpdateDeliveryPersonInput;
};

export enum OrderStatus {
  Approved = 'APPROVED',
  Cancelled = 'CANCELLED',
  Delivered = 'DELIVERED',
  Pending = 'PENDING',
  Returned = 'RETURNED'
}

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
  deliveryDate?: Maybe<Scalars['String']['output']>;
  deliveryPerson: DeliveryPerson;
  deliveryPersonId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  pieces: Scalars['Int']['output'];
  product: Product;
  productId: Scalars['String']['output'];
  productType?: Maybe<Scalars['String']['output']>;
  status: OrderStatus;
  unitPrice: Scalars['Int']['output'];
};

export type ProductDeliveryInput = {
  deliveryDate?: InputMaybe<Scalars['String']['input']>;
  deliveryPersonId: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  pieces: Scalars['Int']['input'];
  productId: Scalars['String']['input'];
  productType: Scalars['String']['input'];
  unitPrice: Scalars['Int']['input'];
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

export type Query = {
  __typename?: 'Query';
  customer: Array<Customer>;
  deliveryPerson: Array<DeliveryPerson>;
  product: Array<Product>;
  productDelivery: Array<ProductDelivery>;
};

export enum Response {
  NotFound = 'NOT_FOUND',
  Success = 'Success'
}

export type UpdateDeliveryPersonInput = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCustomerMutationVariables = Exact<{
  input: CustomerInput;
}>;


export type CreateCustomerMutation = { __typename?: 'Mutation', createCustomer: Response };

export type QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryQuery = { __typename?: 'Query', customer: Array<{ __typename?: 'Customer', companyName: string, companyNumber: string, companyLocation: string, id: string, createdAt?: any | null }> };

export type CreateProductDeliveryMutationVariables = Exact<{
  input: ProductDeliveryInput;
}>;


export type CreateProductDeliveryMutation = { __typename?: 'Mutation', createProductDelivery: Response };

export type ProductDeliveryQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductDeliveryQuery = { __typename?: 'Query', productDelivery: Array<{ __typename?: 'ProductDelivery', id: string, productId: string, productType?: string | null, deliveryPersonId: string, pieces: number, unitPrice: number, status: OrderStatus, deliveryDate?: string | null, note?: string | null, createdAt?: any | null, deliveryPerson: { __typename?: 'DeliveryPerson', id?: string | null, name?: string | null, phoneNumber?: string | null, image?: string | null, createdAt?: any | null, updatedAt?: any | null }, product: { __typename?: 'Product', id: string, title: string, description?: string | null, type: string, stock: number, ingredient?: string | null, barcode?: string | null, price?: number | null, imageURL?: string | null, expiredAt?: any | null, createdAt?: any | null, updatedAt?: any | null } }> };

export type CreateDeliveryPersonMutationVariables = Exact<{
  input: DeliveryPersonInput;
}>;


export type CreateDeliveryPersonMutation = { __typename?: 'Mutation', createDeliveryPerson: Response };

export type DeliveryPersonQueryVariables = Exact<{ [key: string]: never; }>;


export type DeliveryPersonQuery = { __typename?: 'Query', deliveryPerson: Array<{ __typename?: 'DeliveryPerson', id?: string | null, name?: string | null, phoneNumber?: string | null, image?: string | null, createdAt?: any | null, updatedAt?: any | null }> };

export type CreateProductMutationVariables = Exact<{
  input: ProductInput;
}>;


export type CreateProductMutation = { __typename?: 'Mutation', createProduct: Response };

export type ProductQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductQuery = { __typename?: 'Query', product: Array<{ __typename?: 'Product', id: string, title: string, type: string, stock: number, ingredient?: string | null, barcode?: string | null, price?: number | null, imageURL?: string | null }> };

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
    productType
    deliveryPersonId
    pieces
    unitPrice
    status
    deliveryDate
    note
    createdAt
    deliveryPerson {
      id
      name
      phoneNumber
      image
      createdAt
      updatedAt
    }
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