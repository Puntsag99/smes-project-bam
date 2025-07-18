import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerInput: CustomerInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DeliveryPerson: ResolverTypeWrapper<DeliveryPerson>;
  DeliveryPersonInput: DeliveryPersonInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  OrderStatus: OrderStatus;
  Product: ResolverTypeWrapper<Product>;
  ProductDelivery: ResolverTypeWrapper<ProductDelivery>;
  ProductDeliveryInput: ProductDeliveryInput;
  ProductInput: ProductInput;
  Query: ResolverTypeWrapper<{}>;
  Response: Response;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateDeliveryPersonInput: UpdateDeliveryPersonInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Customer: Customer;
  CustomerInput: CustomerInput;
  DateTime: Scalars['DateTime']['output'];
  DeliveryPerson: DeliveryPerson;
  DeliveryPersonInput: DeliveryPersonInput;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Product: Product;
  ProductDelivery: ProductDelivery;
  ProductDeliveryInput: ProductDeliveryInput;
  ProductInput: ProductInput;
  Query: {};
  String: Scalars['String']['output'];
  UpdateDeliveryPersonInput: UpdateDeliveryPersonInput;
};

export type CustomerResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  companyLocation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  companyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  companyNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeliveryPersonResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DeliveryPerson'] = ResolversParentTypes['DeliveryPerson']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCustomer?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationCreateCustomerArgs, 'input'>>;
  createDeliveryPerson?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationCreateDeliveryPersonArgs, 'input'>>;
  createProduct?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'input'>>;
  createProductDelivery?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationCreateProductDeliveryArgs, 'input'>>;
  deleteDeliveryPerson?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationDeleteDeliveryPersonArgs, 'id'>>;
  updateDeliveryPerson?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationUpdateDeliveryPersonArgs, 'input'>>;
};

export type ProductResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  barcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expiredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ingredient?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductDeliveryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ProductDelivery'] = ResolversParentTypes['ProductDelivery']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deliveryDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deliveryPerson?: Resolver<ResolversTypes['DeliveryPerson'], ParentType, ContextType>;
  deliveryPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pieces?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  unitPrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  customer?: Resolver<Array<ResolversTypes['Customer']>, ParentType, ContextType>;
  deliveryPerson?: Resolver<Array<ResolversTypes['DeliveryPerson']>, ParentType, ContextType>;
  product?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  productDelivery?: Resolver<Array<ResolversTypes['ProductDelivery']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Customer?: CustomerResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeliveryPerson?: DeliveryPersonResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductDelivery?: ProductDeliveryResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

