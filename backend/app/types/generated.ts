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

export type Query = {
  __typename?: 'Query';
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
  CreateShopInput: CreateShopInput;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerInput: CustomerInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DeliveryPerson: ResolverTypeWrapper<DeliveryPerson>;
  DeliveryPersonInput: DeliveryPersonInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Product: ResolverTypeWrapper<Product>;
  ProductDelivery: ResolverTypeWrapper<ProductDelivery>;
  ProductDeliveryInput: ProductDeliveryInput;
  ProductInput: ProductInput;
  Query: ResolverTypeWrapper<{}>;
  Response: Response;
  Shop: ResolverTypeWrapper<Shop>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  TransactionEnum: TransactionEnum;
  UpdateDeliveryPersonInput: UpdateDeliveryPersonInput;
  UpdateShopInput: UpdateShopInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CreateShopInput: CreateShopInput;
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
  Shop: Shop;
  String: Scalars['String']['output'];
  UpdateDeliveryPersonInput: UpdateDeliveryPersonInput;
  UpdateShopInput: UpdateShopInput;
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
  createShop?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationCreateShopArgs, 'input'>>;
  deleteDeliveryPerson?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationDeleteDeliveryPersonArgs, 'id'>>;
  deleteShop?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteShopArgs, 'id'>>;
  updateDeliveryPerson?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationUpdateDeliveryPersonArgs, 'input'>>;
  updateShop?: Resolver<ResolversTypes['Shop'], ParentType, ContextType, RequireFields<MutationUpdateShopArgs, 'data' | 'id'>>;
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
  deliveryPerson?: Resolver<ResolversTypes['DeliveryPerson'], ParentType, ContextType>;
  deliveryPersonId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  shop?: Resolver<Maybe<ResolversTypes['Shop']>, ParentType, ContextType>;
  shopId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  signature?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  totalPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  transactionType?: Resolver<ResolversTypes['TransactionEnum'], ParentType, ContextType>;
  unitPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  customer?: Resolver<Array<ResolversTypes['Customer']>, ParentType, ContextType>;
  deliveryPerson?: Resolver<Array<ResolversTypes['DeliveryPerson']>, ParentType, ContextType>;
  product?: Resolver<Array<ResolversTypes['Product']>, ParentType, ContextType>;
  productDelivery?: Resolver<Array<ResolversTypes['ProductDelivery']>, ParentType, ContextType>;
  shop?: Resolver<Array<ResolversTypes['Shop']>, ParentType, ContextType>;
};

export type ShopResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Shop'] = ResolversParentTypes['Shop']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone_number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Customer?: CustomerResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeliveryPerson?: DeliveryPersonResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductDelivery?: ProductDeliveryResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Shop?: ShopResolvers<ContextType>;
};

