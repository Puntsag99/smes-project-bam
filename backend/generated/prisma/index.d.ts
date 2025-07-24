
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductDelivery
 * 
 */
export type ProductDelivery = $Result.DefaultSelection<Prisma.$ProductDeliveryPayload>
/**
 * Model DeliveryPerson
 * 
 */
export type DeliveryPerson = $Result.DefaultSelection<Prisma.$DeliveryPersonPayload>
/**
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>
/**
 * Model ProductRemaining
 * 
 */
export type ProductRemaining = $Result.DefaultSelection<Prisma.$ProductRemainingPayload>
/**
 * Model ProductReturnHistory
 * 
 */
export type ProductReturnHistory = $Result.DefaultSelection<Prisma.$ProductReturnHistoryPayload>
/**
 * Model ProductStock
 * 
 */
export type ProductStock = $Result.DefaultSelection<Prisma.$ProductStockPayload>
/**
 * Model ShopOrder
 * 
 */
export type ShopOrder = $Result.DefaultSelection<Prisma.$ShopOrderPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TransactionEnum: {
  CASH: 'CASH',
  BANK_TRANSFER: 'BANK_TRANSFER',
  CREDIT: 'CREDIT',
  NOT_PAYMENT: 'NOT_PAYMENT'
};

export type TransactionEnum = (typeof TransactionEnum)[keyof typeof TransactionEnum]


export const OrderStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  DELIVERED: 'DELIVERED',
  RETURNED: 'RETURNED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const Role: {
  SUPERADMIN: 'SUPERADMIN',
  ADMIN: 'ADMIN',
  VENDOR: 'VENDOR',
  SHOP: 'SHOP'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type TransactionEnum = $Enums.TransactionEnum

export const TransactionEnum: typeof $Enums.TransactionEnum

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productDelivery`: Exposes CRUD operations for the **ProductDelivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductDeliveries
    * const productDeliveries = await prisma.productDelivery.findMany()
    * ```
    */
  get productDelivery(): Prisma.ProductDeliveryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deliveryPerson`: Exposes CRUD operations for the **DeliveryPerson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeliveryPeople
    * const deliveryPeople = await prisma.deliveryPerson.findMany()
    * ```
    */
  get deliveryPerson(): Prisma.DeliveryPersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productRemaining`: Exposes CRUD operations for the **ProductRemaining** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductRemainings
    * const productRemainings = await prisma.productRemaining.findMany()
    * ```
    */
  get productRemaining(): Prisma.ProductRemainingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productReturnHistory`: Exposes CRUD operations for the **ProductReturnHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductReturnHistories
    * const productReturnHistories = await prisma.productReturnHistory.findMany()
    * ```
    */
  get productReturnHistory(): Prisma.ProductReturnHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productStock`: Exposes CRUD operations for the **ProductStock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductStocks
    * const productStocks = await prisma.productStock.findMany()
    * ```
    */
  get productStock(): Prisma.ProductStockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shopOrder`: Exposes CRUD operations for the **ShopOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopOrders
    * const shopOrders = await prisma.shopOrder.findMany()
    * ```
    */
  get shopOrder(): Prisma.ShopOrderDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Customer: 'Customer',
    Product: 'Product',
    ProductDelivery: 'ProductDelivery',
    DeliveryPerson: 'DeliveryPerson',
    Shop: 'Shop',
    ProductRemaining: 'ProductRemaining',
    ProductReturnHistory: 'ProductReturnHistory',
    ProductStock: 'ProductStock',
    ShopOrder: 'ShopOrder'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "customer" | "product" | "productDelivery" | "deliveryPerson" | "shop" | "productRemaining" | "productReturnHistory" | "productStock" | "shopOrder"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductDelivery: {
        payload: Prisma.$ProductDeliveryPayload<ExtArgs>
        fields: Prisma.ProductDeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductDeliveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductDeliveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDeliveryPayload>
          }
          findFirst: {
            args: Prisma.ProductDeliveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductDeliveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDeliveryPayload>
          }
          findMany: {
            args: Prisma.ProductDeliveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDeliveryPayload>[]
          }
          create: {
            args: Prisma.ProductDeliveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDeliveryPayload>
          }
          createMany: {
            args: Prisma.ProductDeliveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductDeliveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDeliveryPayload>[]
          }
          delete: {
            args: Prisma.ProductDeliveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDeliveryPayload>
          }
          update: {
            args: Prisma.ProductDeliveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDeliveryPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeliveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductDeliveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductDeliveryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDeliveryPayload>[]
          }
          upsert: {
            args: Prisma.ProductDeliveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductDeliveryPayload>
          }
          aggregate: {
            args: Prisma.ProductDeliveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductDelivery>
          }
          groupBy: {
            args: Prisma.ProductDeliveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductDeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductDeliveryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductDeliveryCountAggregateOutputType> | number
          }
        }
      }
      DeliveryPerson: {
        payload: Prisma.$DeliveryPersonPayload<ExtArgs>
        fields: Prisma.DeliveryPersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryPersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryPersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPersonPayload>
          }
          findFirst: {
            args: Prisma.DeliveryPersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryPersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPersonPayload>
          }
          findMany: {
            args: Prisma.DeliveryPersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPersonPayload>[]
          }
          create: {
            args: Prisma.DeliveryPersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPersonPayload>
          }
          createMany: {
            args: Prisma.DeliveryPersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryPersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPersonPayload>[]
          }
          delete: {
            args: Prisma.DeliveryPersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPersonPayload>
          }
          update: {
            args: Prisma.DeliveryPersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPersonPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryPersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryPersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveryPersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPersonPayload>[]
          }
          upsert: {
            args: Prisma.DeliveryPersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPersonPayload>
          }
          aggregate: {
            args: Prisma.DeliveryPersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveryPerson>
          }
          groupBy: {
            args: Prisma.DeliveryPersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryPersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryPersonCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryPersonCountAggregateOutputType> | number
          }
        }
      }
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          createMany: {
            args: Prisma.ShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
      ProductRemaining: {
        payload: Prisma.$ProductRemainingPayload<ExtArgs>
        fields: Prisma.ProductRemainingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductRemainingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRemainingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductRemainingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRemainingPayload>
          }
          findFirst: {
            args: Prisma.ProductRemainingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRemainingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductRemainingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRemainingPayload>
          }
          findMany: {
            args: Prisma.ProductRemainingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRemainingPayload>[]
          }
          create: {
            args: Prisma.ProductRemainingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRemainingPayload>
          }
          createMany: {
            args: Prisma.ProductRemainingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductRemainingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRemainingPayload>[]
          }
          delete: {
            args: Prisma.ProductRemainingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRemainingPayload>
          }
          update: {
            args: Prisma.ProductRemainingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRemainingPayload>
          }
          deleteMany: {
            args: Prisma.ProductRemainingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductRemainingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductRemainingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRemainingPayload>[]
          }
          upsert: {
            args: Prisma.ProductRemainingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductRemainingPayload>
          }
          aggregate: {
            args: Prisma.ProductRemainingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductRemaining>
          }
          groupBy: {
            args: Prisma.ProductRemainingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductRemainingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductRemainingCountArgs<ExtArgs>
            result: $Utils.Optional<ProductRemainingCountAggregateOutputType> | number
          }
        }
      }
      ProductReturnHistory: {
        payload: Prisma.$ProductReturnHistoryPayload<ExtArgs>
        fields: Prisma.ProductReturnHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductReturnHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReturnHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductReturnHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReturnHistoryPayload>
          }
          findFirst: {
            args: Prisma.ProductReturnHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReturnHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductReturnHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReturnHistoryPayload>
          }
          findMany: {
            args: Prisma.ProductReturnHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReturnHistoryPayload>[]
          }
          create: {
            args: Prisma.ProductReturnHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReturnHistoryPayload>
          }
          createMany: {
            args: Prisma.ProductReturnHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductReturnHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReturnHistoryPayload>[]
          }
          delete: {
            args: Prisma.ProductReturnHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReturnHistoryPayload>
          }
          update: {
            args: Prisma.ProductReturnHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReturnHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ProductReturnHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductReturnHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductReturnHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReturnHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ProductReturnHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReturnHistoryPayload>
          }
          aggregate: {
            args: Prisma.ProductReturnHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductReturnHistory>
          }
          groupBy: {
            args: Prisma.ProductReturnHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductReturnHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductReturnHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProductReturnHistoryCountAggregateOutputType> | number
          }
        }
      }
      ProductStock: {
        payload: Prisma.$ProductStockPayload<ExtArgs>
        fields: Prisma.ProductStockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductStockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductStockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          findFirst: {
            args: Prisma.ProductStockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductStockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          findMany: {
            args: Prisma.ProductStockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>[]
          }
          create: {
            args: Prisma.ProductStockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          createMany: {
            args: Prisma.ProductStockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductStockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>[]
          }
          delete: {
            args: Prisma.ProductStockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          update: {
            args: Prisma.ProductStockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          deleteMany: {
            args: Prisma.ProductStockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductStockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductStockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>[]
          }
          upsert: {
            args: Prisma.ProductStockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductStockPayload>
          }
          aggregate: {
            args: Prisma.ProductStockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductStock>
          }
          groupBy: {
            args: Prisma.ProductStockGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductStockGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductStockCountArgs<ExtArgs>
            result: $Utils.Optional<ProductStockCountAggregateOutputType> | number
          }
        }
      }
      ShopOrder: {
        payload: Prisma.$ShopOrderPayload<ExtArgs>
        fields: Prisma.ShopOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOrderPayload>
          }
          findFirst: {
            args: Prisma.ShopOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOrderPayload>
          }
          findMany: {
            args: Prisma.ShopOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOrderPayload>[]
          }
          create: {
            args: Prisma.ShopOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOrderPayload>
          }
          createMany: {
            args: Prisma.ShopOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOrderPayload>[]
          }
          delete: {
            args: Prisma.ShopOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOrderPayload>
          }
          update: {
            args: Prisma.ShopOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOrderPayload>
          }
          deleteMany: {
            args: Prisma.ShopOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOrderPayload>[]
          }
          upsert: {
            args: Prisma.ShopOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOrderPayload>
          }
          aggregate: {
            args: Prisma.ShopOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopOrder>
          }
          groupBy: {
            args: Prisma.ShopOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopOrderCountArgs<ExtArgs>
            result: $Utils.Optional<ShopOrderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    customer?: CustomerOmit
    product?: ProductOmit
    productDelivery?: ProductDeliveryOmit
    deliveryPerson?: DeliveryPersonOmit
    shop?: ShopOmit
    productRemaining?: ProductRemainingOmit
    productReturnHistory?: ProductReturnHistoryOmit
    productStock?: ProductStockOmit
    shopOrder?: ShopOrderOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    productDeliveries: number
    remainingProducts: number
    stockRecords: number
    returnHistories: number
    shopOrders: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productDeliveries?: boolean | ProductCountOutputTypeCountProductDeliveriesArgs
    remainingProducts?: boolean | ProductCountOutputTypeCountRemainingProductsArgs
    stockRecords?: boolean | ProductCountOutputTypeCountStockRecordsArgs
    returnHistories?: boolean | ProductCountOutputTypeCountReturnHistoriesArgs
    shopOrders?: boolean | ProductCountOutputTypeCountShopOrdersArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountProductDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductDeliveryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountRemainingProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductRemainingWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountStockRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductStockWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountReturnHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductReturnHistoryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountShopOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopOrderWhereInput
  }


  /**
   * Count Type DeliveryPersonCountOutputType
   */

  export type DeliveryPersonCountOutputType = {
    productDeliveries: number
    returnHistories: number
    shopOrders: number
  }

  export type DeliveryPersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productDeliveries?: boolean | DeliveryPersonCountOutputTypeCountProductDeliveriesArgs
    returnHistories?: boolean | DeliveryPersonCountOutputTypeCountReturnHistoriesArgs
    shopOrders?: boolean | DeliveryPersonCountOutputTypeCountShopOrdersArgs
  }

  // Custom InputTypes
  /**
   * DeliveryPersonCountOutputType without action
   */
  export type DeliveryPersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPersonCountOutputType
     */
    select?: DeliveryPersonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeliveryPersonCountOutputType without action
   */
  export type DeliveryPersonCountOutputTypeCountProductDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductDeliveryWhereInput
  }

  /**
   * DeliveryPersonCountOutputType without action
   */
  export type DeliveryPersonCountOutputTypeCountReturnHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductReturnHistoryWhereInput
  }

  /**
   * DeliveryPersonCountOutputType without action
   */
  export type DeliveryPersonCountOutputTypeCountShopOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopOrderWhereInput
  }


  /**
   * Count Type ShopCountOutputType
   */

  export type ShopCountOutputType = {
    returnHistories: number
    shopOrders: number
    productDelivery: number
  }

  export type ShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    returnHistories?: boolean | ShopCountOutputTypeCountReturnHistoriesArgs
    shopOrders?: boolean | ShopCountOutputTypeCountShopOrdersArgs
    productDelivery?: boolean | ShopCountOutputTypeCountProductDeliveryArgs
  }

  // Custom InputTypes
  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCountOutputType
     */
    select?: ShopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountReturnHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductReturnHistoryWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountShopOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopOrderWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountProductDeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductDeliveryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    email: string
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "email" | "role", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      email: string
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    companyName: string | null
    companyLocation: string | null
    companyNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    companyName: string | null
    companyLocation: string | null
    companyNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    companyName: number
    companyLocation: number
    companyNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    companyName?: true
    companyLocation?: true
    companyNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    companyName?: true
    companyLocation?: true
    companyNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    companyName?: true
    companyLocation?: true
    companyNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    companyName: string
    companyLocation: string
    companyNumber: string
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyLocation?: boolean
    companyNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyLocation?: boolean
    companyNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyLocation?: boolean
    companyNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    companyName?: boolean
    companyLocation?: boolean
    companyNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyName" | "companyLocation" | "companyNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyName: string
      companyLocation: string
      companyNumber: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly companyName: FieldRef<"Customer", 'String'>
    readonly companyLocation: FieldRef<"Customer", 'String'>
    readonly companyNumber: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    stock: number | null
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    stock: number | null
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: string | null
    stock: number | null
    ingredient: string | null
    barcode: string | null
    price: number | null
    expiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    imageURL: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: string | null
    stock: number | null
    ingredient: string | null
    barcode: string | null
    price: number | null
    expiredAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    imageURL: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    stock: number
    ingredient: number
    barcode: number
    price: number
    expiredAt: number
    createdAt: number
    updatedAt: number
    imageURL: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    stock?: true
    price?: true
  }

  export type ProductSumAggregateInputType = {
    stock?: true
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    stock?: true
    ingredient?: true
    barcode?: true
    price?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
    imageURL?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    stock?: true
    ingredient?: true
    barcode?: true
    price?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
    imageURL?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    stock?: true
    ingredient?: true
    barcode?: true
    price?: true
    expiredAt?: true
    createdAt?: true
    updatedAt?: true
    imageURL?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    title: string
    description: string | null
    type: string
    stock: number
    ingredient: string | null
    barcode: string
    price: number
    expiredAt: Date | null
    createdAt: Date
    updatedAt: Date
    imageURL: string | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    stock?: boolean
    ingredient?: boolean
    barcode?: boolean
    price?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageURL?: boolean
    productDeliveries?: boolean | Product$productDeliveriesArgs<ExtArgs>
    remainingProducts?: boolean | Product$remainingProductsArgs<ExtArgs>
    stockRecords?: boolean | Product$stockRecordsArgs<ExtArgs>
    returnHistories?: boolean | Product$returnHistoriesArgs<ExtArgs>
    shopOrders?: boolean | Product$shopOrdersArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    stock?: boolean
    ingredient?: boolean
    barcode?: boolean
    price?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageURL?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    stock?: boolean
    ingredient?: boolean
    barcode?: boolean
    price?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageURL?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    stock?: boolean
    ingredient?: boolean
    barcode?: boolean
    price?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageURL?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "stock" | "ingredient" | "barcode" | "price" | "expiredAt" | "createdAt" | "updatedAt" | "imageURL", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productDeliveries?: boolean | Product$productDeliveriesArgs<ExtArgs>
    remainingProducts?: boolean | Product$remainingProductsArgs<ExtArgs>
    stockRecords?: boolean | Product$stockRecordsArgs<ExtArgs>
    returnHistories?: boolean | Product$returnHistoriesArgs<ExtArgs>
    shopOrders?: boolean | Product$shopOrdersArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      productDeliveries: Prisma.$ProductDeliveryPayload<ExtArgs>[]
      remainingProducts: Prisma.$ProductRemainingPayload<ExtArgs>[]
      stockRecords: Prisma.$ProductStockPayload<ExtArgs>[]
      returnHistories: Prisma.$ProductReturnHistoryPayload<ExtArgs>[]
      shopOrders: Prisma.$ShopOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      type: string
      stock: number
      ingredient: string | null
      barcode: string
      price: number
      expiredAt: Date | null
      createdAt: Date
      updatedAt: Date
      imageURL: string | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productDeliveries<T extends Product$productDeliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Product$productDeliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    remainingProducts<T extends Product$remainingProductsArgs<ExtArgs> = {}>(args?: Subset<T, Product$remainingProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRemainingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stockRecords<T extends Product$stockRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Product$stockRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    returnHistories<T extends Product$returnHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, Product$returnHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductReturnHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shopOrders<T extends Product$shopOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Product$shopOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly title: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly type: FieldRef<"Product", 'String'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly ingredient: FieldRef<"Product", 'String'>
    readonly barcode: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Int'>
    readonly expiredAt: FieldRef<"Product", 'DateTime'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly imageURL: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.productDeliveries
   */
  export type Product$productDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDelivery
     */
    select?: ProductDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDelivery
     */
    omit?: ProductDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDeliveryInclude<ExtArgs> | null
    where?: ProductDeliveryWhereInput
    orderBy?: ProductDeliveryOrderByWithRelationInput | ProductDeliveryOrderByWithRelationInput[]
    cursor?: ProductDeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductDeliveryScalarFieldEnum | ProductDeliveryScalarFieldEnum[]
  }

  /**
   * Product.remainingProducts
   */
  export type Product$remainingProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRemaining
     */
    select?: ProductRemainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRemaining
     */
    omit?: ProductRemainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRemainingInclude<ExtArgs> | null
    where?: ProductRemainingWhereInput
    orderBy?: ProductRemainingOrderByWithRelationInput | ProductRemainingOrderByWithRelationInput[]
    cursor?: ProductRemainingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductRemainingScalarFieldEnum | ProductRemainingScalarFieldEnum[]
  }

  /**
   * Product.stockRecords
   */
  export type Product$stockRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    where?: ProductStockWhereInput
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    cursor?: ProductStockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductStockScalarFieldEnum | ProductStockScalarFieldEnum[]
  }

  /**
   * Product.returnHistories
   */
  export type Product$returnHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReturnHistory
     */
    select?: ProductReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReturnHistory
     */
    omit?: ProductReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReturnHistoryInclude<ExtArgs> | null
    where?: ProductReturnHistoryWhereInput
    orderBy?: ProductReturnHistoryOrderByWithRelationInput | ProductReturnHistoryOrderByWithRelationInput[]
    cursor?: ProductReturnHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductReturnHistoryScalarFieldEnum | ProductReturnHistoryScalarFieldEnum[]
  }

  /**
   * Product.shopOrders
   */
  export type Product$shopOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrder
     */
    select?: ShopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopOrder
     */
    omit?: ShopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOrderInclude<ExtArgs> | null
    where?: ShopOrderWhereInput
    orderBy?: ShopOrderOrderByWithRelationInput | ShopOrderOrderByWithRelationInput[]
    cursor?: ShopOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopOrderScalarFieldEnum | ShopOrderScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductDelivery
   */

  export type AggregateProductDelivery = {
    _count: ProductDeliveryCountAggregateOutputType | null
    _avg: ProductDeliveryAvgAggregateOutputType | null
    _sum: ProductDeliverySumAggregateOutputType | null
    _min: ProductDeliveryMinAggregateOutputType | null
    _max: ProductDeliveryMaxAggregateOutputType | null
  }

  export type ProductDeliveryAvgAggregateOutputType = {
    total_price: number | null
    quantity: number | null
    unit_price: number | null
  }

  export type ProductDeliverySumAggregateOutputType = {
    total_price: number | null
    quantity: number | null
    unit_price: number | null
  }

  export type ProductDeliveryMinAggregateOutputType = {
    id: string | null
    productId: string | null
    shopId: string | null
    deliveryPersonId: string | null
    total_price: number | null
    quantity: number | null
    unit_price: number | null
    productType: string | null
    transaction_type: $Enums.TransactionEnum | null
    created_at: Date | null
    signature: string | null
  }

  export type ProductDeliveryMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    shopId: string | null
    deliveryPersonId: string | null
    total_price: number | null
    quantity: number | null
    unit_price: number | null
    productType: string | null
    transaction_type: $Enums.TransactionEnum | null
    created_at: Date | null
    signature: string | null
  }

  export type ProductDeliveryCountAggregateOutputType = {
    id: number
    productId: number
    shopId: number
    deliveryPersonId: number
    total_price: number
    quantity: number
    unit_price: number
    productType: number
    transaction_type: number
    created_at: number
    signature: number
    _all: number
  }


  export type ProductDeliveryAvgAggregateInputType = {
    total_price?: true
    quantity?: true
    unit_price?: true
  }

  export type ProductDeliverySumAggregateInputType = {
    total_price?: true
    quantity?: true
    unit_price?: true
  }

  export type ProductDeliveryMinAggregateInputType = {
    id?: true
    productId?: true
    shopId?: true
    deliveryPersonId?: true
    total_price?: true
    quantity?: true
    unit_price?: true
    productType?: true
    transaction_type?: true
    created_at?: true
    signature?: true
  }

  export type ProductDeliveryMaxAggregateInputType = {
    id?: true
    productId?: true
    shopId?: true
    deliveryPersonId?: true
    total_price?: true
    quantity?: true
    unit_price?: true
    productType?: true
    transaction_type?: true
    created_at?: true
    signature?: true
  }

  export type ProductDeliveryCountAggregateInputType = {
    id?: true
    productId?: true
    shopId?: true
    deliveryPersonId?: true
    total_price?: true
    quantity?: true
    unit_price?: true
    productType?: true
    transaction_type?: true
    created_at?: true
    signature?: true
    _all?: true
  }

  export type ProductDeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductDelivery to aggregate.
     */
    where?: ProductDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDeliveries to fetch.
     */
    orderBy?: ProductDeliveryOrderByWithRelationInput | ProductDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductDeliveries
    **/
    _count?: true | ProductDeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductDeliveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductDeliverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductDeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductDeliveryMaxAggregateInputType
  }

  export type GetProductDeliveryAggregateType<T extends ProductDeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductDelivery[P]>
      : GetScalarType<T[P], AggregateProductDelivery[P]>
  }




  export type ProductDeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductDeliveryWhereInput
    orderBy?: ProductDeliveryOrderByWithAggregationInput | ProductDeliveryOrderByWithAggregationInput[]
    by: ProductDeliveryScalarFieldEnum[] | ProductDeliveryScalarFieldEnum
    having?: ProductDeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductDeliveryCountAggregateInputType | true
    _avg?: ProductDeliveryAvgAggregateInputType
    _sum?: ProductDeliverySumAggregateInputType
    _min?: ProductDeliveryMinAggregateInputType
    _max?: ProductDeliveryMaxAggregateInputType
  }

  export type ProductDeliveryGroupByOutputType = {
    id: string
    productId: string
    shopId: string
    deliveryPersonId: string
    total_price: number
    quantity: number
    unit_price: number
    productType: string
    transaction_type: $Enums.TransactionEnum
    created_at: Date
    signature: string | null
    _count: ProductDeliveryCountAggregateOutputType | null
    _avg: ProductDeliveryAvgAggregateOutputType | null
    _sum: ProductDeliverySumAggregateOutputType | null
    _min: ProductDeliveryMinAggregateOutputType | null
    _max: ProductDeliveryMaxAggregateOutputType | null
  }

  type GetProductDeliveryGroupByPayload<T extends ProductDeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductDeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductDeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductDeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductDeliveryGroupByOutputType[P]>
        }
      >
    >


  export type ProductDeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    shopId?: boolean
    deliveryPersonId?: boolean
    total_price?: boolean
    quantity?: boolean
    unit_price?: boolean
    productType?: boolean
    transaction_type?: boolean
    created_at?: boolean
    signature?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    deliveryPerson?: boolean | DeliveryPersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productDelivery"]>

  export type ProductDeliverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    shopId?: boolean
    deliveryPersonId?: boolean
    total_price?: boolean
    quantity?: boolean
    unit_price?: boolean
    productType?: boolean
    transaction_type?: boolean
    created_at?: boolean
    signature?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    deliveryPerson?: boolean | DeliveryPersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productDelivery"]>

  export type ProductDeliverySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    shopId?: boolean
    deliveryPersonId?: boolean
    total_price?: boolean
    quantity?: boolean
    unit_price?: boolean
    productType?: boolean
    transaction_type?: boolean
    created_at?: boolean
    signature?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    deliveryPerson?: boolean | DeliveryPersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productDelivery"]>

  export type ProductDeliverySelectScalar = {
    id?: boolean
    productId?: boolean
    shopId?: boolean
    deliveryPersonId?: boolean
    total_price?: boolean
    quantity?: boolean
    unit_price?: boolean
    productType?: boolean
    transaction_type?: boolean
    created_at?: boolean
    signature?: boolean
  }

  export type ProductDeliveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "shopId" | "deliveryPersonId" | "total_price" | "quantity" | "unit_price" | "productType" | "transaction_type" | "created_at" | "signature", ExtArgs["result"]["productDelivery"]>
  export type ProductDeliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    deliveryPerson?: boolean | DeliveryPersonDefaultArgs<ExtArgs>
  }
  export type ProductDeliveryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    deliveryPerson?: boolean | DeliveryPersonDefaultArgs<ExtArgs>
  }
  export type ProductDeliveryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    deliveryPerson?: boolean | DeliveryPersonDefaultArgs<ExtArgs>
  }

  export type $ProductDeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductDelivery"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      shop: Prisma.$ShopPayload<ExtArgs>
      deliveryPerson: Prisma.$DeliveryPersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      shopId: string
      deliveryPersonId: string
      total_price: number
      quantity: number
      unit_price: number
      productType: string
      transaction_type: $Enums.TransactionEnum
      created_at: Date
      signature: string | null
    }, ExtArgs["result"]["productDelivery"]>
    composites: {}
  }

  type ProductDeliveryGetPayload<S extends boolean | null | undefined | ProductDeliveryDefaultArgs> = $Result.GetResult<Prisma.$ProductDeliveryPayload, S>

  type ProductDeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductDeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductDeliveryCountAggregateInputType | true
    }

  export interface ProductDeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductDelivery'], meta: { name: 'ProductDelivery' } }
    /**
     * Find zero or one ProductDelivery that matches the filter.
     * @param {ProductDeliveryFindUniqueArgs} args - Arguments to find a ProductDelivery
     * @example
     * // Get one ProductDelivery
     * const productDelivery = await prisma.productDelivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductDeliveryFindUniqueArgs>(args: SelectSubset<T, ProductDeliveryFindUniqueArgs<ExtArgs>>): Prisma__ProductDeliveryClient<$Result.GetResult<Prisma.$ProductDeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductDelivery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductDeliveryFindUniqueOrThrowArgs} args - Arguments to find a ProductDelivery
     * @example
     * // Get one ProductDelivery
     * const productDelivery = await prisma.productDelivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductDeliveryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductDeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductDeliveryClient<$Result.GetResult<Prisma.$ProductDeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductDelivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDeliveryFindFirstArgs} args - Arguments to find a ProductDelivery
     * @example
     * // Get one ProductDelivery
     * const productDelivery = await prisma.productDelivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductDeliveryFindFirstArgs>(args?: SelectSubset<T, ProductDeliveryFindFirstArgs<ExtArgs>>): Prisma__ProductDeliveryClient<$Result.GetResult<Prisma.$ProductDeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductDelivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDeliveryFindFirstOrThrowArgs} args - Arguments to find a ProductDelivery
     * @example
     * // Get one ProductDelivery
     * const productDelivery = await prisma.productDelivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductDeliveryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductDeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductDeliveryClient<$Result.GetResult<Prisma.$ProductDeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductDeliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDeliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductDeliveries
     * const productDeliveries = await prisma.productDelivery.findMany()
     * 
     * // Get first 10 ProductDeliveries
     * const productDeliveries = await prisma.productDelivery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productDeliveryWithIdOnly = await prisma.productDelivery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductDeliveryFindManyArgs>(args?: SelectSubset<T, ProductDeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductDelivery.
     * @param {ProductDeliveryCreateArgs} args - Arguments to create a ProductDelivery.
     * @example
     * // Create one ProductDelivery
     * const ProductDelivery = await prisma.productDelivery.create({
     *   data: {
     *     // ... data to create a ProductDelivery
     *   }
     * })
     * 
     */
    create<T extends ProductDeliveryCreateArgs>(args: SelectSubset<T, ProductDeliveryCreateArgs<ExtArgs>>): Prisma__ProductDeliveryClient<$Result.GetResult<Prisma.$ProductDeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductDeliveries.
     * @param {ProductDeliveryCreateManyArgs} args - Arguments to create many ProductDeliveries.
     * @example
     * // Create many ProductDeliveries
     * const productDelivery = await prisma.productDelivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductDeliveryCreateManyArgs>(args?: SelectSubset<T, ProductDeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductDeliveries and returns the data saved in the database.
     * @param {ProductDeliveryCreateManyAndReturnArgs} args - Arguments to create many ProductDeliveries.
     * @example
     * // Create many ProductDeliveries
     * const productDelivery = await prisma.productDelivery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductDeliveries and only return the `id`
     * const productDeliveryWithIdOnly = await prisma.productDelivery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductDeliveryCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductDeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDeliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductDelivery.
     * @param {ProductDeliveryDeleteArgs} args - Arguments to delete one ProductDelivery.
     * @example
     * // Delete one ProductDelivery
     * const ProductDelivery = await prisma.productDelivery.delete({
     *   where: {
     *     // ... filter to delete one ProductDelivery
     *   }
     * })
     * 
     */
    delete<T extends ProductDeliveryDeleteArgs>(args: SelectSubset<T, ProductDeliveryDeleteArgs<ExtArgs>>): Prisma__ProductDeliveryClient<$Result.GetResult<Prisma.$ProductDeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductDelivery.
     * @param {ProductDeliveryUpdateArgs} args - Arguments to update one ProductDelivery.
     * @example
     * // Update one ProductDelivery
     * const productDelivery = await prisma.productDelivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductDeliveryUpdateArgs>(args: SelectSubset<T, ProductDeliveryUpdateArgs<ExtArgs>>): Prisma__ProductDeliveryClient<$Result.GetResult<Prisma.$ProductDeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductDeliveries.
     * @param {ProductDeliveryDeleteManyArgs} args - Arguments to filter ProductDeliveries to delete.
     * @example
     * // Delete a few ProductDeliveries
     * const { count } = await prisma.productDelivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeliveryDeleteManyArgs>(args?: SelectSubset<T, ProductDeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductDeliveries
     * const productDelivery = await prisma.productDelivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductDeliveryUpdateManyArgs>(args: SelectSubset<T, ProductDeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductDeliveries and returns the data updated in the database.
     * @param {ProductDeliveryUpdateManyAndReturnArgs} args - Arguments to update many ProductDeliveries.
     * @example
     * // Update many ProductDeliveries
     * const productDelivery = await prisma.productDelivery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductDeliveries and only return the `id`
     * const productDeliveryWithIdOnly = await prisma.productDelivery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductDeliveryUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductDeliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDeliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductDelivery.
     * @param {ProductDeliveryUpsertArgs} args - Arguments to update or create a ProductDelivery.
     * @example
     * // Update or create a ProductDelivery
     * const productDelivery = await prisma.productDelivery.upsert({
     *   create: {
     *     // ... data to create a ProductDelivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductDelivery we want to update
     *   }
     * })
     */
    upsert<T extends ProductDeliveryUpsertArgs>(args: SelectSubset<T, ProductDeliveryUpsertArgs<ExtArgs>>): Prisma__ProductDeliveryClient<$Result.GetResult<Prisma.$ProductDeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductDeliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDeliveryCountArgs} args - Arguments to filter ProductDeliveries to count.
     * @example
     * // Count the number of ProductDeliveries
     * const count = await prisma.productDelivery.count({
     *   where: {
     *     // ... the filter for the ProductDeliveries we want to count
     *   }
     * })
    **/
    count<T extends ProductDeliveryCountArgs>(
      args?: Subset<T, ProductDeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductDeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductDeliveryAggregateArgs>(args: Subset<T, ProductDeliveryAggregateArgs>): Prisma.PrismaPromise<GetProductDeliveryAggregateType<T>>

    /**
     * Group by ProductDelivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductDeliveryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductDeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductDeliveryGroupByArgs['orderBy'] }
        : { orderBy?: ProductDeliveryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductDeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductDelivery model
   */
  readonly fields: ProductDeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductDelivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductDeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deliveryPerson<T extends DeliveryPersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryPersonDefaultArgs<ExtArgs>>): Prisma__DeliveryPersonClient<$Result.GetResult<Prisma.$DeliveryPersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductDelivery model
   */
  interface ProductDeliveryFieldRefs {
    readonly id: FieldRef<"ProductDelivery", 'String'>
    readonly productId: FieldRef<"ProductDelivery", 'String'>
    readonly shopId: FieldRef<"ProductDelivery", 'String'>
    readonly deliveryPersonId: FieldRef<"ProductDelivery", 'String'>
    readonly total_price: FieldRef<"ProductDelivery", 'Int'>
    readonly quantity: FieldRef<"ProductDelivery", 'Int'>
    readonly unit_price: FieldRef<"ProductDelivery", 'Int'>
    readonly productType: FieldRef<"ProductDelivery", 'String'>
    readonly transaction_type: FieldRef<"ProductDelivery", 'TransactionEnum'>
    readonly created_at: FieldRef<"ProductDelivery", 'DateTime'>
    readonly signature: FieldRef<"ProductDelivery", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductDelivery findUnique
   */
  export type ProductDeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDelivery
     */
    select?: ProductDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDelivery
     */
    omit?: ProductDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which ProductDelivery to fetch.
     */
    where: ProductDeliveryWhereUniqueInput
  }

  /**
   * ProductDelivery findUniqueOrThrow
   */
  export type ProductDeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDelivery
     */
    select?: ProductDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDelivery
     */
    omit?: ProductDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which ProductDelivery to fetch.
     */
    where: ProductDeliveryWhereUniqueInput
  }

  /**
   * ProductDelivery findFirst
   */
  export type ProductDeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDelivery
     */
    select?: ProductDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDelivery
     */
    omit?: ProductDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which ProductDelivery to fetch.
     */
    where?: ProductDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDeliveries to fetch.
     */
    orderBy?: ProductDeliveryOrderByWithRelationInput | ProductDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductDeliveries.
     */
    cursor?: ProductDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductDeliveries.
     */
    distinct?: ProductDeliveryScalarFieldEnum | ProductDeliveryScalarFieldEnum[]
  }

  /**
   * ProductDelivery findFirstOrThrow
   */
  export type ProductDeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDelivery
     */
    select?: ProductDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDelivery
     */
    omit?: ProductDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which ProductDelivery to fetch.
     */
    where?: ProductDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDeliveries to fetch.
     */
    orderBy?: ProductDeliveryOrderByWithRelationInput | ProductDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductDeliveries.
     */
    cursor?: ProductDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDeliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductDeliveries.
     */
    distinct?: ProductDeliveryScalarFieldEnum | ProductDeliveryScalarFieldEnum[]
  }

  /**
   * ProductDelivery findMany
   */
  export type ProductDeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDelivery
     */
    select?: ProductDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDelivery
     */
    omit?: ProductDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDeliveryInclude<ExtArgs> | null
    /**
     * Filter, which ProductDeliveries to fetch.
     */
    where?: ProductDeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductDeliveries to fetch.
     */
    orderBy?: ProductDeliveryOrderByWithRelationInput | ProductDeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductDeliveries.
     */
    cursor?: ProductDeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductDeliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductDeliveries.
     */
    skip?: number
    distinct?: ProductDeliveryScalarFieldEnum | ProductDeliveryScalarFieldEnum[]
  }

  /**
   * ProductDelivery create
   */
  export type ProductDeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDelivery
     */
    select?: ProductDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDelivery
     */
    omit?: ProductDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDeliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductDelivery.
     */
    data: XOR<ProductDeliveryCreateInput, ProductDeliveryUncheckedCreateInput>
  }

  /**
   * ProductDelivery createMany
   */
  export type ProductDeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductDeliveries.
     */
    data: ProductDeliveryCreateManyInput | ProductDeliveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductDelivery createManyAndReturn
   */
  export type ProductDeliveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDelivery
     */
    select?: ProductDeliverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDelivery
     */
    omit?: ProductDeliveryOmit<ExtArgs> | null
    /**
     * The data used to create many ProductDeliveries.
     */
    data: ProductDeliveryCreateManyInput | ProductDeliveryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDeliveryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductDelivery update
   */
  export type ProductDeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDelivery
     */
    select?: ProductDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDelivery
     */
    omit?: ProductDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDeliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductDelivery.
     */
    data: XOR<ProductDeliveryUpdateInput, ProductDeliveryUncheckedUpdateInput>
    /**
     * Choose, which ProductDelivery to update.
     */
    where: ProductDeliveryWhereUniqueInput
  }

  /**
   * ProductDelivery updateMany
   */
  export type ProductDeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductDeliveries.
     */
    data: XOR<ProductDeliveryUpdateManyMutationInput, ProductDeliveryUncheckedUpdateManyInput>
    /**
     * Filter which ProductDeliveries to update
     */
    where?: ProductDeliveryWhereInput
    /**
     * Limit how many ProductDeliveries to update.
     */
    limit?: number
  }

  /**
   * ProductDelivery updateManyAndReturn
   */
  export type ProductDeliveryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDelivery
     */
    select?: ProductDeliverySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDelivery
     */
    omit?: ProductDeliveryOmit<ExtArgs> | null
    /**
     * The data used to update ProductDeliveries.
     */
    data: XOR<ProductDeliveryUpdateManyMutationInput, ProductDeliveryUncheckedUpdateManyInput>
    /**
     * Filter which ProductDeliveries to update
     */
    where?: ProductDeliveryWhereInput
    /**
     * Limit how many ProductDeliveries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDeliveryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductDelivery upsert
   */
  export type ProductDeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDelivery
     */
    select?: ProductDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDelivery
     */
    omit?: ProductDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDeliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductDelivery to update in case it exists.
     */
    where: ProductDeliveryWhereUniqueInput
    /**
     * In case the ProductDelivery found by the `where` argument doesn't exist, create a new ProductDelivery with this data.
     */
    create: XOR<ProductDeliveryCreateInput, ProductDeliveryUncheckedCreateInput>
    /**
     * In case the ProductDelivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductDeliveryUpdateInput, ProductDeliveryUncheckedUpdateInput>
  }

  /**
   * ProductDelivery delete
   */
  export type ProductDeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDelivery
     */
    select?: ProductDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDelivery
     */
    omit?: ProductDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDeliveryInclude<ExtArgs> | null
    /**
     * Filter which ProductDelivery to delete.
     */
    where: ProductDeliveryWhereUniqueInput
  }

  /**
   * ProductDelivery deleteMany
   */
  export type ProductDeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductDeliveries to delete
     */
    where?: ProductDeliveryWhereInput
    /**
     * Limit how many ProductDeliveries to delete.
     */
    limit?: number
  }

  /**
   * ProductDelivery without action
   */
  export type ProductDeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDelivery
     */
    select?: ProductDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDelivery
     */
    omit?: ProductDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDeliveryInclude<ExtArgs> | null
  }


  /**
   * Model DeliveryPerson
   */

  export type AggregateDeliveryPerson = {
    _count: DeliveryPersonCountAggregateOutputType | null
    _min: DeliveryPersonMinAggregateOutputType | null
    _max: DeliveryPersonMaxAggregateOutputType | null
  }

  export type DeliveryPersonMinAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    phoneNumber: string | null
    region: string | null
    createdAt: Date | null
    updatedAt: Date | null
    vehicle: string | null
  }

  export type DeliveryPersonMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
    phoneNumber: string | null
    region: string | null
    createdAt: Date | null
    updatedAt: Date | null
    vehicle: string | null
  }

  export type DeliveryPersonCountAggregateOutputType = {
    id: number
    name: number
    image: number
    phoneNumber: number
    region: number
    createdAt: number
    updatedAt: number
    vehicle: number
    _all: number
  }


  export type DeliveryPersonMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    phoneNumber?: true
    region?: true
    createdAt?: true
    updatedAt?: true
    vehicle?: true
  }

  export type DeliveryPersonMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    phoneNumber?: true
    region?: true
    createdAt?: true
    updatedAt?: true
    vehicle?: true
  }

  export type DeliveryPersonCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    phoneNumber?: true
    region?: true
    createdAt?: true
    updatedAt?: true
    vehicle?: true
    _all?: true
  }

  export type DeliveryPersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryPerson to aggregate.
     */
    where?: DeliveryPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryPeople to fetch.
     */
    orderBy?: DeliveryPersonOrderByWithRelationInput | DeliveryPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeliveryPeople
    **/
    _count?: true | DeliveryPersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryPersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryPersonMaxAggregateInputType
  }

  export type GetDeliveryPersonAggregateType<T extends DeliveryPersonAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryPerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryPerson[P]>
      : GetScalarType<T[P], AggregateDeliveryPerson[P]>
  }




  export type DeliveryPersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryPersonWhereInput
    orderBy?: DeliveryPersonOrderByWithAggregationInput | DeliveryPersonOrderByWithAggregationInput[]
    by: DeliveryPersonScalarFieldEnum[] | DeliveryPersonScalarFieldEnum
    having?: DeliveryPersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryPersonCountAggregateInputType | true
    _min?: DeliveryPersonMinAggregateInputType
    _max?: DeliveryPersonMaxAggregateInputType
  }

  export type DeliveryPersonGroupByOutputType = {
    id: string
    name: string
    image: string | null
    phoneNumber: string
    region: string | null
    createdAt: Date
    updatedAt: Date
    vehicle: string | null
    _count: DeliveryPersonCountAggregateOutputType | null
    _min: DeliveryPersonMinAggregateOutputType | null
    _max: DeliveryPersonMaxAggregateOutputType | null
  }

  type GetDeliveryPersonGroupByPayload<T extends DeliveryPersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryPersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryPersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryPersonGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryPersonGroupByOutputType[P]>
        }
      >
    >


  export type DeliveryPersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    phoneNumber?: boolean
    region?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean
    productDeliveries?: boolean | DeliveryPerson$productDeliveriesArgs<ExtArgs>
    returnHistories?: boolean | DeliveryPerson$returnHistoriesArgs<ExtArgs>
    shopOrders?: boolean | DeliveryPerson$shopOrdersArgs<ExtArgs>
    _count?: boolean | DeliveryPersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryPerson"]>

  export type DeliveryPersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    phoneNumber?: boolean
    region?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean
  }, ExtArgs["result"]["deliveryPerson"]>

  export type DeliveryPersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    phoneNumber?: boolean
    region?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean
  }, ExtArgs["result"]["deliveryPerson"]>

  export type DeliveryPersonSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    phoneNumber?: boolean
    region?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean
  }

  export type DeliveryPersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "phoneNumber" | "region" | "createdAt" | "updatedAt" | "vehicle", ExtArgs["result"]["deliveryPerson"]>
  export type DeliveryPersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productDeliveries?: boolean | DeliveryPerson$productDeliveriesArgs<ExtArgs>
    returnHistories?: boolean | DeliveryPerson$returnHistoriesArgs<ExtArgs>
    shopOrders?: boolean | DeliveryPerson$shopOrdersArgs<ExtArgs>
    _count?: boolean | DeliveryPersonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeliveryPersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DeliveryPersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DeliveryPersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeliveryPerson"
    objects: {
      productDeliveries: Prisma.$ProductDeliveryPayload<ExtArgs>[]
      returnHistories: Prisma.$ProductReturnHistoryPayload<ExtArgs>[]
      shopOrders: Prisma.$ShopOrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      image: string | null
      phoneNumber: string
      region: string | null
      createdAt: Date
      updatedAt: Date
      vehicle: string | null
    }, ExtArgs["result"]["deliveryPerson"]>
    composites: {}
  }

  type DeliveryPersonGetPayload<S extends boolean | null | undefined | DeliveryPersonDefaultArgs> = $Result.GetResult<Prisma.$DeliveryPersonPayload, S>

  type DeliveryPersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveryPersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryPersonCountAggregateInputType | true
    }

  export interface DeliveryPersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeliveryPerson'], meta: { name: 'DeliveryPerson' } }
    /**
     * Find zero or one DeliveryPerson that matches the filter.
     * @param {DeliveryPersonFindUniqueArgs} args - Arguments to find a DeliveryPerson
     * @example
     * // Get one DeliveryPerson
     * const deliveryPerson = await prisma.deliveryPerson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryPersonFindUniqueArgs>(args: SelectSubset<T, DeliveryPersonFindUniqueArgs<ExtArgs>>): Prisma__DeliveryPersonClient<$Result.GetResult<Prisma.$DeliveryPersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeliveryPerson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryPersonFindUniqueOrThrowArgs} args - Arguments to find a DeliveryPerson
     * @example
     * // Get one DeliveryPerson
     * const deliveryPerson = await prisma.deliveryPerson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryPersonFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryPersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryPersonClient<$Result.GetResult<Prisma.$DeliveryPersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryPerson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPersonFindFirstArgs} args - Arguments to find a DeliveryPerson
     * @example
     * // Get one DeliveryPerson
     * const deliveryPerson = await prisma.deliveryPerson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryPersonFindFirstArgs>(args?: SelectSubset<T, DeliveryPersonFindFirstArgs<ExtArgs>>): Prisma__DeliveryPersonClient<$Result.GetResult<Prisma.$DeliveryPersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryPerson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPersonFindFirstOrThrowArgs} args - Arguments to find a DeliveryPerson
     * @example
     * // Get one DeliveryPerson
     * const deliveryPerson = await prisma.deliveryPerson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryPersonFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryPersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryPersonClient<$Result.GetResult<Prisma.$DeliveryPersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeliveryPeople that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeliveryPeople
     * const deliveryPeople = await prisma.deliveryPerson.findMany()
     * 
     * // Get first 10 DeliveryPeople
     * const deliveryPeople = await prisma.deliveryPerson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryPersonWithIdOnly = await prisma.deliveryPerson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryPersonFindManyArgs>(args?: SelectSubset<T, DeliveryPersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeliveryPerson.
     * @param {DeliveryPersonCreateArgs} args - Arguments to create a DeliveryPerson.
     * @example
     * // Create one DeliveryPerson
     * const DeliveryPerson = await prisma.deliveryPerson.create({
     *   data: {
     *     // ... data to create a DeliveryPerson
     *   }
     * })
     * 
     */
    create<T extends DeliveryPersonCreateArgs>(args: SelectSubset<T, DeliveryPersonCreateArgs<ExtArgs>>): Prisma__DeliveryPersonClient<$Result.GetResult<Prisma.$DeliveryPersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeliveryPeople.
     * @param {DeliveryPersonCreateManyArgs} args - Arguments to create many DeliveryPeople.
     * @example
     * // Create many DeliveryPeople
     * const deliveryPerson = await prisma.deliveryPerson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryPersonCreateManyArgs>(args?: SelectSubset<T, DeliveryPersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeliveryPeople and returns the data saved in the database.
     * @param {DeliveryPersonCreateManyAndReturnArgs} args - Arguments to create many DeliveryPeople.
     * @example
     * // Create many DeliveryPeople
     * const deliveryPerson = await prisma.deliveryPerson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeliveryPeople and only return the `id`
     * const deliveryPersonWithIdOnly = await prisma.deliveryPerson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryPersonCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryPersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeliveryPerson.
     * @param {DeliveryPersonDeleteArgs} args - Arguments to delete one DeliveryPerson.
     * @example
     * // Delete one DeliveryPerson
     * const DeliveryPerson = await prisma.deliveryPerson.delete({
     *   where: {
     *     // ... filter to delete one DeliveryPerson
     *   }
     * })
     * 
     */
    delete<T extends DeliveryPersonDeleteArgs>(args: SelectSubset<T, DeliveryPersonDeleteArgs<ExtArgs>>): Prisma__DeliveryPersonClient<$Result.GetResult<Prisma.$DeliveryPersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeliveryPerson.
     * @param {DeliveryPersonUpdateArgs} args - Arguments to update one DeliveryPerson.
     * @example
     * // Update one DeliveryPerson
     * const deliveryPerson = await prisma.deliveryPerson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryPersonUpdateArgs>(args: SelectSubset<T, DeliveryPersonUpdateArgs<ExtArgs>>): Prisma__DeliveryPersonClient<$Result.GetResult<Prisma.$DeliveryPersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeliveryPeople.
     * @param {DeliveryPersonDeleteManyArgs} args - Arguments to filter DeliveryPeople to delete.
     * @example
     * // Delete a few DeliveryPeople
     * const { count } = await prisma.deliveryPerson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryPersonDeleteManyArgs>(args?: SelectSubset<T, DeliveryPersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeliveryPeople
     * const deliveryPerson = await prisma.deliveryPerson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryPersonUpdateManyArgs>(args: SelectSubset<T, DeliveryPersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryPeople and returns the data updated in the database.
     * @param {DeliveryPersonUpdateManyAndReturnArgs} args - Arguments to update many DeliveryPeople.
     * @example
     * // Update many DeliveryPeople
     * const deliveryPerson = await prisma.deliveryPerson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeliveryPeople and only return the `id`
     * const deliveryPersonWithIdOnly = await prisma.deliveryPerson.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliveryPersonUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveryPersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeliveryPerson.
     * @param {DeliveryPersonUpsertArgs} args - Arguments to update or create a DeliveryPerson.
     * @example
     * // Update or create a DeliveryPerson
     * const deliveryPerson = await prisma.deliveryPerson.upsert({
     *   create: {
     *     // ... data to create a DeliveryPerson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeliveryPerson we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryPersonUpsertArgs>(args: SelectSubset<T, DeliveryPersonUpsertArgs<ExtArgs>>): Prisma__DeliveryPersonClient<$Result.GetResult<Prisma.$DeliveryPersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeliveryPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPersonCountArgs} args - Arguments to filter DeliveryPeople to count.
     * @example
     * // Count the number of DeliveryPeople
     * const count = await prisma.deliveryPerson.count({
     *   where: {
     *     // ... the filter for the DeliveryPeople we want to count
     *   }
     * })
    **/
    count<T extends DeliveryPersonCountArgs>(
      args?: Subset<T, DeliveryPersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryPersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeliveryPerson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryPersonAggregateArgs>(args: Subset<T, DeliveryPersonAggregateArgs>): Prisma.PrismaPromise<GetDeliveryPersonAggregateType<T>>

    /**
     * Group by DeliveryPerson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryPersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveryPersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryPersonGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryPersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryPersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeliveryPerson model
   */
  readonly fields: DeliveryPersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeliveryPerson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryPersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productDeliveries<T extends DeliveryPerson$productDeliveriesArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryPerson$productDeliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    returnHistories<T extends DeliveryPerson$returnHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryPerson$returnHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductReturnHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shopOrders<T extends DeliveryPerson$shopOrdersArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryPerson$shopOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeliveryPerson model
   */
  interface DeliveryPersonFieldRefs {
    readonly id: FieldRef<"DeliveryPerson", 'String'>
    readonly name: FieldRef<"DeliveryPerson", 'String'>
    readonly image: FieldRef<"DeliveryPerson", 'String'>
    readonly phoneNumber: FieldRef<"DeliveryPerson", 'String'>
    readonly region: FieldRef<"DeliveryPerson", 'String'>
    readonly createdAt: FieldRef<"DeliveryPerson", 'DateTime'>
    readonly updatedAt: FieldRef<"DeliveryPerson", 'DateTime'>
    readonly vehicle: FieldRef<"DeliveryPerson", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DeliveryPerson findUnique
   */
  export type DeliveryPersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPerson
     */
    select?: DeliveryPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPerson
     */
    omit?: DeliveryPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPersonInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryPerson to fetch.
     */
    where: DeliveryPersonWhereUniqueInput
  }

  /**
   * DeliveryPerson findUniqueOrThrow
   */
  export type DeliveryPersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPerson
     */
    select?: DeliveryPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPerson
     */
    omit?: DeliveryPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPersonInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryPerson to fetch.
     */
    where: DeliveryPersonWhereUniqueInput
  }

  /**
   * DeliveryPerson findFirst
   */
  export type DeliveryPersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPerson
     */
    select?: DeliveryPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPerson
     */
    omit?: DeliveryPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPersonInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryPerson to fetch.
     */
    where?: DeliveryPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryPeople to fetch.
     */
    orderBy?: DeliveryPersonOrderByWithRelationInput | DeliveryPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryPeople.
     */
    cursor?: DeliveryPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryPeople.
     */
    distinct?: DeliveryPersonScalarFieldEnum | DeliveryPersonScalarFieldEnum[]
  }

  /**
   * DeliveryPerson findFirstOrThrow
   */
  export type DeliveryPersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPerson
     */
    select?: DeliveryPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPerson
     */
    omit?: DeliveryPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPersonInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryPerson to fetch.
     */
    where?: DeliveryPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryPeople to fetch.
     */
    orderBy?: DeliveryPersonOrderByWithRelationInput | DeliveryPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryPeople.
     */
    cursor?: DeliveryPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryPeople.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryPeople.
     */
    distinct?: DeliveryPersonScalarFieldEnum | DeliveryPersonScalarFieldEnum[]
  }

  /**
   * DeliveryPerson findMany
   */
  export type DeliveryPersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPerson
     */
    select?: DeliveryPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPerson
     */
    omit?: DeliveryPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPersonInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryPeople to fetch.
     */
    where?: DeliveryPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryPeople to fetch.
     */
    orderBy?: DeliveryPersonOrderByWithRelationInput | DeliveryPersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeliveryPeople.
     */
    cursor?: DeliveryPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryPeople from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryPeople.
     */
    skip?: number
    distinct?: DeliveryPersonScalarFieldEnum | DeliveryPersonScalarFieldEnum[]
  }

  /**
   * DeliveryPerson create
   */
  export type DeliveryPersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPerson
     */
    select?: DeliveryPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPerson
     */
    omit?: DeliveryPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPersonInclude<ExtArgs> | null
    /**
     * The data needed to create a DeliveryPerson.
     */
    data: XOR<DeliveryPersonCreateInput, DeliveryPersonUncheckedCreateInput>
  }

  /**
   * DeliveryPerson createMany
   */
  export type DeliveryPersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeliveryPeople.
     */
    data: DeliveryPersonCreateManyInput | DeliveryPersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryPerson createManyAndReturn
   */
  export type DeliveryPersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPerson
     */
    select?: DeliveryPersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPerson
     */
    omit?: DeliveryPersonOmit<ExtArgs> | null
    /**
     * The data used to create many DeliveryPeople.
     */
    data: DeliveryPersonCreateManyInput | DeliveryPersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryPerson update
   */
  export type DeliveryPersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPerson
     */
    select?: DeliveryPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPerson
     */
    omit?: DeliveryPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPersonInclude<ExtArgs> | null
    /**
     * The data needed to update a DeliveryPerson.
     */
    data: XOR<DeliveryPersonUpdateInput, DeliveryPersonUncheckedUpdateInput>
    /**
     * Choose, which DeliveryPerson to update.
     */
    where: DeliveryPersonWhereUniqueInput
  }

  /**
   * DeliveryPerson updateMany
   */
  export type DeliveryPersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeliveryPeople.
     */
    data: XOR<DeliveryPersonUpdateManyMutationInput, DeliveryPersonUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryPeople to update
     */
    where?: DeliveryPersonWhereInput
    /**
     * Limit how many DeliveryPeople to update.
     */
    limit?: number
  }

  /**
   * DeliveryPerson updateManyAndReturn
   */
  export type DeliveryPersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPerson
     */
    select?: DeliveryPersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPerson
     */
    omit?: DeliveryPersonOmit<ExtArgs> | null
    /**
     * The data used to update DeliveryPeople.
     */
    data: XOR<DeliveryPersonUpdateManyMutationInput, DeliveryPersonUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryPeople to update
     */
    where?: DeliveryPersonWhereInput
    /**
     * Limit how many DeliveryPeople to update.
     */
    limit?: number
  }

  /**
   * DeliveryPerson upsert
   */
  export type DeliveryPersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPerson
     */
    select?: DeliveryPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPerson
     */
    omit?: DeliveryPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPersonInclude<ExtArgs> | null
    /**
     * The filter to search for the DeliveryPerson to update in case it exists.
     */
    where: DeliveryPersonWhereUniqueInput
    /**
     * In case the DeliveryPerson found by the `where` argument doesn't exist, create a new DeliveryPerson with this data.
     */
    create: XOR<DeliveryPersonCreateInput, DeliveryPersonUncheckedCreateInput>
    /**
     * In case the DeliveryPerson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryPersonUpdateInput, DeliveryPersonUncheckedUpdateInput>
  }

  /**
   * DeliveryPerson delete
   */
  export type DeliveryPersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPerson
     */
    select?: DeliveryPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPerson
     */
    omit?: DeliveryPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPersonInclude<ExtArgs> | null
    /**
     * Filter which DeliveryPerson to delete.
     */
    where: DeliveryPersonWhereUniqueInput
  }

  /**
   * DeliveryPerson deleteMany
   */
  export type DeliveryPersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryPeople to delete
     */
    where?: DeliveryPersonWhereInput
    /**
     * Limit how many DeliveryPeople to delete.
     */
    limit?: number
  }

  /**
   * DeliveryPerson.productDeliveries
   */
  export type DeliveryPerson$productDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDelivery
     */
    select?: ProductDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDelivery
     */
    omit?: ProductDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDeliveryInclude<ExtArgs> | null
    where?: ProductDeliveryWhereInput
    orderBy?: ProductDeliveryOrderByWithRelationInput | ProductDeliveryOrderByWithRelationInput[]
    cursor?: ProductDeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductDeliveryScalarFieldEnum | ProductDeliveryScalarFieldEnum[]
  }

  /**
   * DeliveryPerson.returnHistories
   */
  export type DeliveryPerson$returnHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReturnHistory
     */
    select?: ProductReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReturnHistory
     */
    omit?: ProductReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReturnHistoryInclude<ExtArgs> | null
    where?: ProductReturnHistoryWhereInput
    orderBy?: ProductReturnHistoryOrderByWithRelationInput | ProductReturnHistoryOrderByWithRelationInput[]
    cursor?: ProductReturnHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductReturnHistoryScalarFieldEnum | ProductReturnHistoryScalarFieldEnum[]
  }

  /**
   * DeliveryPerson.shopOrders
   */
  export type DeliveryPerson$shopOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrder
     */
    select?: ShopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopOrder
     */
    omit?: ShopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOrderInclude<ExtArgs> | null
    where?: ShopOrderWhereInput
    orderBy?: ShopOrderOrderByWithRelationInput | ShopOrderOrderByWithRelationInput[]
    cursor?: ShopOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopOrderScalarFieldEnum | ShopOrderScalarFieldEnum[]
  }

  /**
   * DeliveryPerson without action
   */
  export type DeliveryPersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPerson
     */
    select?: DeliveryPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPerson
     */
    omit?: DeliveryPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPersonInclude<ExtArgs> | null
  }


  /**
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    is_active: boolean | null
    email: string | null
    phone_number: string | null
  }

  export type ShopMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    is_active: boolean | null
    email: string | null
    phone_number: string | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    name: number
    address: number
    is_active: number
    email: number
    phone_number: number
    _all: number
  }


  export type ShopMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    is_active?: true
    email?: true
    phone_number?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    is_active?: true
    email?: true
    phone_number?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    is_active?: true
    email?: true
    phone_number?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: string
    name: string
    address: string
    is_active: boolean
    email: string
    phone_number: string
    _count: ShopCountAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    is_active?: boolean
    email?: boolean
    phone_number?: boolean
    returnHistories?: boolean | Shop$returnHistoriesArgs<ExtArgs>
    shopOrders?: boolean | Shop$shopOrdersArgs<ExtArgs>
    productDelivery?: boolean | Shop$productDeliveryArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    is_active?: boolean
    email?: boolean
    phone_number?: boolean
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    is_active?: boolean
    email?: boolean
    phone_number?: boolean
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    is_active?: boolean
    email?: boolean
    phone_number?: boolean
  }

  export type ShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "is_active" | "email" | "phone_number", ExtArgs["result"]["shop"]>
  export type ShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    returnHistories?: boolean | Shop$returnHistoriesArgs<ExtArgs>
    shopOrders?: boolean | Shop$shopOrdersArgs<ExtArgs>
    productDelivery?: boolean | Shop$productDeliveryArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {
      returnHistories: Prisma.$ProductReturnHistoryPayload<ExtArgs>[]
      shopOrders: Prisma.$ShopOrderPayload<ExtArgs>[]
      productDelivery: Prisma.$ProductDeliveryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      is_active: boolean
      email: string
      phone_number: string
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }

  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopFindUniqueArgs>(args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopFindFirstArgs>(args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopFindManyArgs>(args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
     */
    create<T extends ShopCreateArgs>(args: SelectSubset<T, ShopCreateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shops.
     * @param {ShopCreateManyArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopCreateManyArgs>(args?: SelectSubset<T, ShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shops and returns the data saved in the database.
     * @param {ShopCreateManyAndReturnArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
     */
    delete<T extends ShopDeleteArgs>(args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopUpdateArgs>(args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopDeleteManyArgs>(args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopUpdateManyArgs>(args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops and returns the data updated in the database.
     * @param {ShopUpdateManyAndReturnArgs} args - Arguments to update many Shops.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShopUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
     */
    upsert<T extends ShopUpsertArgs>(args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    returnHistories<T extends Shop$returnHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, Shop$returnHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductReturnHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shopOrders<T extends Shop$shopOrdersArgs<ExtArgs> = {}>(args?: Subset<T, Shop$shopOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    productDelivery<T extends Shop$productDeliveryArgs<ExtArgs> = {}>(args?: Subset<T, Shop$productDeliveryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductDeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shop model
   */
  interface ShopFieldRefs {
    readonly id: FieldRef<"Shop", 'String'>
    readonly name: FieldRef<"Shop", 'String'>
    readonly address: FieldRef<"Shop", 'String'>
    readonly is_active: FieldRef<"Shop", 'Boolean'>
    readonly email: FieldRef<"Shop", 'String'>
    readonly phone_number: FieldRef<"Shop", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }

  /**
   * Shop createMany
   */
  export type ShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop createManyAndReturn
   */
  export type ShopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop updateManyAndReturn
   */
  export type ShopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }

  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to delete.
     */
    limit?: number
  }

  /**
   * Shop.returnHistories
   */
  export type Shop$returnHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReturnHistory
     */
    select?: ProductReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReturnHistory
     */
    omit?: ProductReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReturnHistoryInclude<ExtArgs> | null
    where?: ProductReturnHistoryWhereInput
    orderBy?: ProductReturnHistoryOrderByWithRelationInput | ProductReturnHistoryOrderByWithRelationInput[]
    cursor?: ProductReturnHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductReturnHistoryScalarFieldEnum | ProductReturnHistoryScalarFieldEnum[]
  }

  /**
   * Shop.shopOrders
   */
  export type Shop$shopOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrder
     */
    select?: ShopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopOrder
     */
    omit?: ShopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOrderInclude<ExtArgs> | null
    where?: ShopOrderWhereInput
    orderBy?: ShopOrderOrderByWithRelationInput | ShopOrderOrderByWithRelationInput[]
    cursor?: ShopOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShopOrderScalarFieldEnum | ShopOrderScalarFieldEnum[]
  }

  /**
   * Shop.productDelivery
   */
  export type Shop$productDeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductDelivery
     */
    select?: ProductDeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductDelivery
     */
    omit?: ProductDeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductDeliveryInclude<ExtArgs> | null
    where?: ProductDeliveryWhereInput
    orderBy?: ProductDeliveryOrderByWithRelationInput | ProductDeliveryOrderByWithRelationInput[]
    cursor?: ProductDeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductDeliveryScalarFieldEnum | ProductDeliveryScalarFieldEnum[]
  }

  /**
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
  }


  /**
   * Model ProductRemaining
   */

  export type AggregateProductRemaining = {
    _count: ProductRemainingCountAggregateOutputType | null
    _avg: ProductRemainingAvgAggregateOutputType | null
    _sum: ProductRemainingSumAggregateOutputType | null
    _min: ProductRemainingMinAggregateOutputType | null
    _max: ProductRemainingMaxAggregateOutputType | null
  }

  export type ProductRemainingAvgAggregateOutputType = {
    pieces: number | null
  }

  export type ProductRemainingSumAggregateOutputType = {
    pieces: number | null
  }

  export type ProductRemainingMinAggregateOutputType = {
    id: string | null
    productId: string | null
    pieces: number | null
    is_delivered: boolean | null
    created_at: Date | null
  }

  export type ProductRemainingMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    pieces: number | null
    is_delivered: boolean | null
    created_at: Date | null
  }

  export type ProductRemainingCountAggregateOutputType = {
    id: number
    productId: number
    pieces: number
    is_delivered: number
    created_at: number
    _all: number
  }


  export type ProductRemainingAvgAggregateInputType = {
    pieces?: true
  }

  export type ProductRemainingSumAggregateInputType = {
    pieces?: true
  }

  export type ProductRemainingMinAggregateInputType = {
    id?: true
    productId?: true
    pieces?: true
    is_delivered?: true
    created_at?: true
  }

  export type ProductRemainingMaxAggregateInputType = {
    id?: true
    productId?: true
    pieces?: true
    is_delivered?: true
    created_at?: true
  }

  export type ProductRemainingCountAggregateInputType = {
    id?: true
    productId?: true
    pieces?: true
    is_delivered?: true
    created_at?: true
    _all?: true
  }

  export type ProductRemainingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductRemaining to aggregate.
     */
    where?: ProductRemainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRemainings to fetch.
     */
    orderBy?: ProductRemainingOrderByWithRelationInput | ProductRemainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductRemainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRemainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRemainings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductRemainings
    **/
    _count?: true | ProductRemainingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductRemainingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductRemainingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductRemainingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductRemainingMaxAggregateInputType
  }

  export type GetProductRemainingAggregateType<T extends ProductRemainingAggregateArgs> = {
        [P in keyof T & keyof AggregateProductRemaining]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductRemaining[P]>
      : GetScalarType<T[P], AggregateProductRemaining[P]>
  }




  export type ProductRemainingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductRemainingWhereInput
    orderBy?: ProductRemainingOrderByWithAggregationInput | ProductRemainingOrderByWithAggregationInput[]
    by: ProductRemainingScalarFieldEnum[] | ProductRemainingScalarFieldEnum
    having?: ProductRemainingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductRemainingCountAggregateInputType | true
    _avg?: ProductRemainingAvgAggregateInputType
    _sum?: ProductRemainingSumAggregateInputType
    _min?: ProductRemainingMinAggregateInputType
    _max?: ProductRemainingMaxAggregateInputType
  }

  export type ProductRemainingGroupByOutputType = {
    id: string
    productId: string
    pieces: number
    is_delivered: boolean
    created_at: Date
    _count: ProductRemainingCountAggregateOutputType | null
    _avg: ProductRemainingAvgAggregateOutputType | null
    _sum: ProductRemainingSumAggregateOutputType | null
    _min: ProductRemainingMinAggregateOutputType | null
    _max: ProductRemainingMaxAggregateOutputType | null
  }

  type GetProductRemainingGroupByPayload<T extends ProductRemainingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductRemainingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductRemainingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductRemainingGroupByOutputType[P]>
            : GetScalarType<T[P], ProductRemainingGroupByOutputType[P]>
        }
      >
    >


  export type ProductRemainingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    pieces?: boolean
    is_delivered?: boolean
    created_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productRemaining"]>

  export type ProductRemainingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    pieces?: boolean
    is_delivered?: boolean
    created_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productRemaining"]>

  export type ProductRemainingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    pieces?: boolean
    is_delivered?: boolean
    created_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productRemaining"]>

  export type ProductRemainingSelectScalar = {
    id?: boolean
    productId?: boolean
    pieces?: boolean
    is_delivered?: boolean
    created_at?: boolean
  }

  export type ProductRemainingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "pieces" | "is_delivered" | "created_at", ExtArgs["result"]["productRemaining"]>
  export type ProductRemainingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductRemainingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductRemainingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductRemainingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductRemaining"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      pieces: number
      is_delivered: boolean
      created_at: Date
    }, ExtArgs["result"]["productRemaining"]>
    composites: {}
  }

  type ProductRemainingGetPayload<S extends boolean | null | undefined | ProductRemainingDefaultArgs> = $Result.GetResult<Prisma.$ProductRemainingPayload, S>

  type ProductRemainingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductRemainingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductRemainingCountAggregateInputType | true
    }

  export interface ProductRemainingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductRemaining'], meta: { name: 'ProductRemaining' } }
    /**
     * Find zero or one ProductRemaining that matches the filter.
     * @param {ProductRemainingFindUniqueArgs} args - Arguments to find a ProductRemaining
     * @example
     * // Get one ProductRemaining
     * const productRemaining = await prisma.productRemaining.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductRemainingFindUniqueArgs>(args: SelectSubset<T, ProductRemainingFindUniqueArgs<ExtArgs>>): Prisma__ProductRemainingClient<$Result.GetResult<Prisma.$ProductRemainingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductRemaining that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductRemainingFindUniqueOrThrowArgs} args - Arguments to find a ProductRemaining
     * @example
     * // Get one ProductRemaining
     * const productRemaining = await prisma.productRemaining.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductRemainingFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductRemainingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductRemainingClient<$Result.GetResult<Prisma.$ProductRemainingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductRemaining that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRemainingFindFirstArgs} args - Arguments to find a ProductRemaining
     * @example
     * // Get one ProductRemaining
     * const productRemaining = await prisma.productRemaining.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductRemainingFindFirstArgs>(args?: SelectSubset<T, ProductRemainingFindFirstArgs<ExtArgs>>): Prisma__ProductRemainingClient<$Result.GetResult<Prisma.$ProductRemainingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductRemaining that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRemainingFindFirstOrThrowArgs} args - Arguments to find a ProductRemaining
     * @example
     * // Get one ProductRemaining
     * const productRemaining = await prisma.productRemaining.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductRemainingFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductRemainingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductRemainingClient<$Result.GetResult<Prisma.$ProductRemainingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductRemainings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRemainingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductRemainings
     * const productRemainings = await prisma.productRemaining.findMany()
     * 
     * // Get first 10 ProductRemainings
     * const productRemainings = await prisma.productRemaining.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productRemainingWithIdOnly = await prisma.productRemaining.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductRemainingFindManyArgs>(args?: SelectSubset<T, ProductRemainingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRemainingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductRemaining.
     * @param {ProductRemainingCreateArgs} args - Arguments to create a ProductRemaining.
     * @example
     * // Create one ProductRemaining
     * const ProductRemaining = await prisma.productRemaining.create({
     *   data: {
     *     // ... data to create a ProductRemaining
     *   }
     * })
     * 
     */
    create<T extends ProductRemainingCreateArgs>(args: SelectSubset<T, ProductRemainingCreateArgs<ExtArgs>>): Prisma__ProductRemainingClient<$Result.GetResult<Prisma.$ProductRemainingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductRemainings.
     * @param {ProductRemainingCreateManyArgs} args - Arguments to create many ProductRemainings.
     * @example
     * // Create many ProductRemainings
     * const productRemaining = await prisma.productRemaining.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductRemainingCreateManyArgs>(args?: SelectSubset<T, ProductRemainingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductRemainings and returns the data saved in the database.
     * @param {ProductRemainingCreateManyAndReturnArgs} args - Arguments to create many ProductRemainings.
     * @example
     * // Create many ProductRemainings
     * const productRemaining = await prisma.productRemaining.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductRemainings and only return the `id`
     * const productRemainingWithIdOnly = await prisma.productRemaining.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductRemainingCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductRemainingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRemainingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductRemaining.
     * @param {ProductRemainingDeleteArgs} args - Arguments to delete one ProductRemaining.
     * @example
     * // Delete one ProductRemaining
     * const ProductRemaining = await prisma.productRemaining.delete({
     *   where: {
     *     // ... filter to delete one ProductRemaining
     *   }
     * })
     * 
     */
    delete<T extends ProductRemainingDeleteArgs>(args: SelectSubset<T, ProductRemainingDeleteArgs<ExtArgs>>): Prisma__ProductRemainingClient<$Result.GetResult<Prisma.$ProductRemainingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductRemaining.
     * @param {ProductRemainingUpdateArgs} args - Arguments to update one ProductRemaining.
     * @example
     * // Update one ProductRemaining
     * const productRemaining = await prisma.productRemaining.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductRemainingUpdateArgs>(args: SelectSubset<T, ProductRemainingUpdateArgs<ExtArgs>>): Prisma__ProductRemainingClient<$Result.GetResult<Prisma.$ProductRemainingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductRemainings.
     * @param {ProductRemainingDeleteManyArgs} args - Arguments to filter ProductRemainings to delete.
     * @example
     * // Delete a few ProductRemainings
     * const { count } = await prisma.productRemaining.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductRemainingDeleteManyArgs>(args?: SelectSubset<T, ProductRemainingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductRemainings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRemainingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductRemainings
     * const productRemaining = await prisma.productRemaining.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductRemainingUpdateManyArgs>(args: SelectSubset<T, ProductRemainingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductRemainings and returns the data updated in the database.
     * @param {ProductRemainingUpdateManyAndReturnArgs} args - Arguments to update many ProductRemainings.
     * @example
     * // Update many ProductRemainings
     * const productRemaining = await prisma.productRemaining.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductRemainings and only return the `id`
     * const productRemainingWithIdOnly = await prisma.productRemaining.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductRemainingUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductRemainingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductRemainingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductRemaining.
     * @param {ProductRemainingUpsertArgs} args - Arguments to update or create a ProductRemaining.
     * @example
     * // Update or create a ProductRemaining
     * const productRemaining = await prisma.productRemaining.upsert({
     *   create: {
     *     // ... data to create a ProductRemaining
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductRemaining we want to update
     *   }
     * })
     */
    upsert<T extends ProductRemainingUpsertArgs>(args: SelectSubset<T, ProductRemainingUpsertArgs<ExtArgs>>): Prisma__ProductRemainingClient<$Result.GetResult<Prisma.$ProductRemainingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductRemainings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRemainingCountArgs} args - Arguments to filter ProductRemainings to count.
     * @example
     * // Count the number of ProductRemainings
     * const count = await prisma.productRemaining.count({
     *   where: {
     *     // ... the filter for the ProductRemainings we want to count
     *   }
     * })
    **/
    count<T extends ProductRemainingCountArgs>(
      args?: Subset<T, ProductRemainingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductRemainingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductRemaining.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRemainingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductRemainingAggregateArgs>(args: Subset<T, ProductRemainingAggregateArgs>): Prisma.PrismaPromise<GetProductRemainingAggregateType<T>>

    /**
     * Group by ProductRemaining.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductRemainingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductRemainingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductRemainingGroupByArgs['orderBy'] }
        : { orderBy?: ProductRemainingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductRemainingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductRemainingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductRemaining model
   */
  readonly fields: ProductRemainingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductRemaining.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductRemainingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductRemaining model
   */
  interface ProductRemainingFieldRefs {
    readonly id: FieldRef<"ProductRemaining", 'String'>
    readonly productId: FieldRef<"ProductRemaining", 'String'>
    readonly pieces: FieldRef<"ProductRemaining", 'Int'>
    readonly is_delivered: FieldRef<"ProductRemaining", 'Boolean'>
    readonly created_at: FieldRef<"ProductRemaining", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductRemaining findUnique
   */
  export type ProductRemainingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRemaining
     */
    select?: ProductRemainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRemaining
     */
    omit?: ProductRemainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRemainingInclude<ExtArgs> | null
    /**
     * Filter, which ProductRemaining to fetch.
     */
    where: ProductRemainingWhereUniqueInput
  }

  /**
   * ProductRemaining findUniqueOrThrow
   */
  export type ProductRemainingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRemaining
     */
    select?: ProductRemainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRemaining
     */
    omit?: ProductRemainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRemainingInclude<ExtArgs> | null
    /**
     * Filter, which ProductRemaining to fetch.
     */
    where: ProductRemainingWhereUniqueInput
  }

  /**
   * ProductRemaining findFirst
   */
  export type ProductRemainingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRemaining
     */
    select?: ProductRemainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRemaining
     */
    omit?: ProductRemainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRemainingInclude<ExtArgs> | null
    /**
     * Filter, which ProductRemaining to fetch.
     */
    where?: ProductRemainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRemainings to fetch.
     */
    orderBy?: ProductRemainingOrderByWithRelationInput | ProductRemainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductRemainings.
     */
    cursor?: ProductRemainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRemainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRemainings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductRemainings.
     */
    distinct?: ProductRemainingScalarFieldEnum | ProductRemainingScalarFieldEnum[]
  }

  /**
   * ProductRemaining findFirstOrThrow
   */
  export type ProductRemainingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRemaining
     */
    select?: ProductRemainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRemaining
     */
    omit?: ProductRemainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRemainingInclude<ExtArgs> | null
    /**
     * Filter, which ProductRemaining to fetch.
     */
    where?: ProductRemainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRemainings to fetch.
     */
    orderBy?: ProductRemainingOrderByWithRelationInput | ProductRemainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductRemainings.
     */
    cursor?: ProductRemainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRemainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRemainings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductRemainings.
     */
    distinct?: ProductRemainingScalarFieldEnum | ProductRemainingScalarFieldEnum[]
  }

  /**
   * ProductRemaining findMany
   */
  export type ProductRemainingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRemaining
     */
    select?: ProductRemainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRemaining
     */
    omit?: ProductRemainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRemainingInclude<ExtArgs> | null
    /**
     * Filter, which ProductRemainings to fetch.
     */
    where?: ProductRemainingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductRemainings to fetch.
     */
    orderBy?: ProductRemainingOrderByWithRelationInput | ProductRemainingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductRemainings.
     */
    cursor?: ProductRemainingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductRemainings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductRemainings.
     */
    skip?: number
    distinct?: ProductRemainingScalarFieldEnum | ProductRemainingScalarFieldEnum[]
  }

  /**
   * ProductRemaining create
   */
  export type ProductRemainingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRemaining
     */
    select?: ProductRemainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRemaining
     */
    omit?: ProductRemainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRemainingInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductRemaining.
     */
    data: XOR<ProductRemainingCreateInput, ProductRemainingUncheckedCreateInput>
  }

  /**
   * ProductRemaining createMany
   */
  export type ProductRemainingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductRemainings.
     */
    data: ProductRemainingCreateManyInput | ProductRemainingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductRemaining createManyAndReturn
   */
  export type ProductRemainingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRemaining
     */
    select?: ProductRemainingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRemaining
     */
    omit?: ProductRemainingOmit<ExtArgs> | null
    /**
     * The data used to create many ProductRemainings.
     */
    data: ProductRemainingCreateManyInput | ProductRemainingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRemainingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductRemaining update
   */
  export type ProductRemainingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRemaining
     */
    select?: ProductRemainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRemaining
     */
    omit?: ProductRemainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRemainingInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductRemaining.
     */
    data: XOR<ProductRemainingUpdateInput, ProductRemainingUncheckedUpdateInput>
    /**
     * Choose, which ProductRemaining to update.
     */
    where: ProductRemainingWhereUniqueInput
  }

  /**
   * ProductRemaining updateMany
   */
  export type ProductRemainingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductRemainings.
     */
    data: XOR<ProductRemainingUpdateManyMutationInput, ProductRemainingUncheckedUpdateManyInput>
    /**
     * Filter which ProductRemainings to update
     */
    where?: ProductRemainingWhereInput
    /**
     * Limit how many ProductRemainings to update.
     */
    limit?: number
  }

  /**
   * ProductRemaining updateManyAndReturn
   */
  export type ProductRemainingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRemaining
     */
    select?: ProductRemainingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRemaining
     */
    omit?: ProductRemainingOmit<ExtArgs> | null
    /**
     * The data used to update ProductRemainings.
     */
    data: XOR<ProductRemainingUpdateManyMutationInput, ProductRemainingUncheckedUpdateManyInput>
    /**
     * Filter which ProductRemainings to update
     */
    where?: ProductRemainingWhereInput
    /**
     * Limit how many ProductRemainings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRemainingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductRemaining upsert
   */
  export type ProductRemainingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRemaining
     */
    select?: ProductRemainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRemaining
     */
    omit?: ProductRemainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRemainingInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductRemaining to update in case it exists.
     */
    where: ProductRemainingWhereUniqueInput
    /**
     * In case the ProductRemaining found by the `where` argument doesn't exist, create a new ProductRemaining with this data.
     */
    create: XOR<ProductRemainingCreateInput, ProductRemainingUncheckedCreateInput>
    /**
     * In case the ProductRemaining was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductRemainingUpdateInput, ProductRemainingUncheckedUpdateInput>
  }

  /**
   * ProductRemaining delete
   */
  export type ProductRemainingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRemaining
     */
    select?: ProductRemainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRemaining
     */
    omit?: ProductRemainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRemainingInclude<ExtArgs> | null
    /**
     * Filter which ProductRemaining to delete.
     */
    where: ProductRemainingWhereUniqueInput
  }

  /**
   * ProductRemaining deleteMany
   */
  export type ProductRemainingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductRemainings to delete
     */
    where?: ProductRemainingWhereInput
    /**
     * Limit how many ProductRemainings to delete.
     */
    limit?: number
  }

  /**
   * ProductRemaining without action
   */
  export type ProductRemainingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductRemaining
     */
    select?: ProductRemainingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductRemaining
     */
    omit?: ProductRemainingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductRemainingInclude<ExtArgs> | null
  }


  /**
   * Model ProductReturnHistory
   */

  export type AggregateProductReturnHistory = {
    _count: ProductReturnHistoryCountAggregateOutputType | null
    _avg: ProductReturnHistoryAvgAggregateOutputType | null
    _sum: ProductReturnHistorySumAggregateOutputType | null
    _min: ProductReturnHistoryMinAggregateOutputType | null
    _max: ProductReturnHistoryMaxAggregateOutputType | null
  }

  export type ProductReturnHistoryAvgAggregateOutputType = {
    pieces: number | null
    unitPrice: number | null
    totalPrice: number | null
  }

  export type ProductReturnHistorySumAggregateOutputType = {
    pieces: number | null
    unitPrice: number | null
    totalPrice: number | null
  }

  export type ProductReturnHistoryMinAggregateOutputType = {
    id: string | null
    productId: string | null
    pieces: number | null
    unitPrice: number | null
    totalPrice: number | null
    shopId: string | null
    created_at: Date | null
    deliveryPersonId: string | null
    signature: string | null
  }

  export type ProductReturnHistoryMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    pieces: number | null
    unitPrice: number | null
    totalPrice: number | null
    shopId: string | null
    created_at: Date | null
    deliveryPersonId: string | null
    signature: string | null
  }

  export type ProductReturnHistoryCountAggregateOutputType = {
    id: number
    productId: number
    pieces: number
    unitPrice: number
    totalPrice: number
    shopId: number
    created_at: number
    deliveryPersonId: number
    signature: number
    _all: number
  }


  export type ProductReturnHistoryAvgAggregateInputType = {
    pieces?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type ProductReturnHistorySumAggregateInputType = {
    pieces?: true
    unitPrice?: true
    totalPrice?: true
  }

  export type ProductReturnHistoryMinAggregateInputType = {
    id?: true
    productId?: true
    pieces?: true
    unitPrice?: true
    totalPrice?: true
    shopId?: true
    created_at?: true
    deliveryPersonId?: true
    signature?: true
  }

  export type ProductReturnHistoryMaxAggregateInputType = {
    id?: true
    productId?: true
    pieces?: true
    unitPrice?: true
    totalPrice?: true
    shopId?: true
    created_at?: true
    deliveryPersonId?: true
    signature?: true
  }

  export type ProductReturnHistoryCountAggregateInputType = {
    id?: true
    productId?: true
    pieces?: true
    unitPrice?: true
    totalPrice?: true
    shopId?: true
    created_at?: true
    deliveryPersonId?: true
    signature?: true
    _all?: true
  }

  export type ProductReturnHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductReturnHistory to aggregate.
     */
    where?: ProductReturnHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReturnHistories to fetch.
     */
    orderBy?: ProductReturnHistoryOrderByWithRelationInput | ProductReturnHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductReturnHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReturnHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReturnHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductReturnHistories
    **/
    _count?: true | ProductReturnHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductReturnHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductReturnHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductReturnHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductReturnHistoryMaxAggregateInputType
  }

  export type GetProductReturnHistoryAggregateType<T extends ProductReturnHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProductReturnHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductReturnHistory[P]>
      : GetScalarType<T[P], AggregateProductReturnHistory[P]>
  }




  export type ProductReturnHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductReturnHistoryWhereInput
    orderBy?: ProductReturnHistoryOrderByWithAggregationInput | ProductReturnHistoryOrderByWithAggregationInput[]
    by: ProductReturnHistoryScalarFieldEnum[] | ProductReturnHistoryScalarFieldEnum
    having?: ProductReturnHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductReturnHistoryCountAggregateInputType | true
    _avg?: ProductReturnHistoryAvgAggregateInputType
    _sum?: ProductReturnHistorySumAggregateInputType
    _min?: ProductReturnHistoryMinAggregateInputType
    _max?: ProductReturnHistoryMaxAggregateInputType
  }

  export type ProductReturnHistoryGroupByOutputType = {
    id: string
    productId: string
    pieces: number
    unitPrice: number | null
    totalPrice: number | null
    shopId: string
    created_at: Date
    deliveryPersonId: string
    signature: string
    _count: ProductReturnHistoryCountAggregateOutputType | null
    _avg: ProductReturnHistoryAvgAggregateOutputType | null
    _sum: ProductReturnHistorySumAggregateOutputType | null
    _min: ProductReturnHistoryMinAggregateOutputType | null
    _max: ProductReturnHistoryMaxAggregateOutputType | null
  }

  type GetProductReturnHistoryGroupByPayload<T extends ProductReturnHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductReturnHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductReturnHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductReturnHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProductReturnHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ProductReturnHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    pieces?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    shopId?: boolean
    created_at?: boolean
    deliveryPersonId?: boolean
    signature?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    deliveryPerson?: boolean | DeliveryPersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productReturnHistory"]>

  export type ProductReturnHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    pieces?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    shopId?: boolean
    created_at?: boolean
    deliveryPersonId?: boolean
    signature?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    deliveryPerson?: boolean | DeliveryPersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productReturnHistory"]>

  export type ProductReturnHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    pieces?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    shopId?: boolean
    created_at?: boolean
    deliveryPersonId?: boolean
    signature?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    deliveryPerson?: boolean | DeliveryPersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productReturnHistory"]>

  export type ProductReturnHistorySelectScalar = {
    id?: boolean
    productId?: boolean
    pieces?: boolean
    unitPrice?: boolean
    totalPrice?: boolean
    shopId?: boolean
    created_at?: boolean
    deliveryPersonId?: boolean
    signature?: boolean
  }

  export type ProductReturnHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "pieces" | "unitPrice" | "totalPrice" | "shopId" | "created_at" | "deliveryPersonId" | "signature", ExtArgs["result"]["productReturnHistory"]>
  export type ProductReturnHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    deliveryPerson?: boolean | DeliveryPersonDefaultArgs<ExtArgs>
  }
  export type ProductReturnHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    deliveryPerson?: boolean | DeliveryPersonDefaultArgs<ExtArgs>
  }
  export type ProductReturnHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    deliveryPerson?: boolean | DeliveryPersonDefaultArgs<ExtArgs>
  }

  export type $ProductReturnHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductReturnHistory"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      shop: Prisma.$ShopPayload<ExtArgs>
      deliveryPerson: Prisma.$DeliveryPersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      pieces: number
      unitPrice: number | null
      totalPrice: number | null
      shopId: string
      created_at: Date
      deliveryPersonId: string
      signature: string
    }, ExtArgs["result"]["productReturnHistory"]>
    composites: {}
  }

  type ProductReturnHistoryGetPayload<S extends boolean | null | undefined | ProductReturnHistoryDefaultArgs> = $Result.GetResult<Prisma.$ProductReturnHistoryPayload, S>

  type ProductReturnHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductReturnHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductReturnHistoryCountAggregateInputType | true
    }

  export interface ProductReturnHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductReturnHistory'], meta: { name: 'ProductReturnHistory' } }
    /**
     * Find zero or one ProductReturnHistory that matches the filter.
     * @param {ProductReturnHistoryFindUniqueArgs} args - Arguments to find a ProductReturnHistory
     * @example
     * // Get one ProductReturnHistory
     * const productReturnHistory = await prisma.productReturnHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductReturnHistoryFindUniqueArgs>(args: SelectSubset<T, ProductReturnHistoryFindUniqueArgs<ExtArgs>>): Prisma__ProductReturnHistoryClient<$Result.GetResult<Prisma.$ProductReturnHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductReturnHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductReturnHistoryFindUniqueOrThrowArgs} args - Arguments to find a ProductReturnHistory
     * @example
     * // Get one ProductReturnHistory
     * const productReturnHistory = await prisma.productReturnHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductReturnHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductReturnHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductReturnHistoryClient<$Result.GetResult<Prisma.$ProductReturnHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductReturnHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReturnHistoryFindFirstArgs} args - Arguments to find a ProductReturnHistory
     * @example
     * // Get one ProductReturnHistory
     * const productReturnHistory = await prisma.productReturnHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductReturnHistoryFindFirstArgs>(args?: SelectSubset<T, ProductReturnHistoryFindFirstArgs<ExtArgs>>): Prisma__ProductReturnHistoryClient<$Result.GetResult<Prisma.$ProductReturnHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductReturnHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReturnHistoryFindFirstOrThrowArgs} args - Arguments to find a ProductReturnHistory
     * @example
     * // Get one ProductReturnHistory
     * const productReturnHistory = await prisma.productReturnHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductReturnHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductReturnHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductReturnHistoryClient<$Result.GetResult<Prisma.$ProductReturnHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductReturnHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReturnHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductReturnHistories
     * const productReturnHistories = await prisma.productReturnHistory.findMany()
     * 
     * // Get first 10 ProductReturnHistories
     * const productReturnHistories = await prisma.productReturnHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productReturnHistoryWithIdOnly = await prisma.productReturnHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductReturnHistoryFindManyArgs>(args?: SelectSubset<T, ProductReturnHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductReturnHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductReturnHistory.
     * @param {ProductReturnHistoryCreateArgs} args - Arguments to create a ProductReturnHistory.
     * @example
     * // Create one ProductReturnHistory
     * const ProductReturnHistory = await prisma.productReturnHistory.create({
     *   data: {
     *     // ... data to create a ProductReturnHistory
     *   }
     * })
     * 
     */
    create<T extends ProductReturnHistoryCreateArgs>(args: SelectSubset<T, ProductReturnHistoryCreateArgs<ExtArgs>>): Prisma__ProductReturnHistoryClient<$Result.GetResult<Prisma.$ProductReturnHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductReturnHistories.
     * @param {ProductReturnHistoryCreateManyArgs} args - Arguments to create many ProductReturnHistories.
     * @example
     * // Create many ProductReturnHistories
     * const productReturnHistory = await prisma.productReturnHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductReturnHistoryCreateManyArgs>(args?: SelectSubset<T, ProductReturnHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductReturnHistories and returns the data saved in the database.
     * @param {ProductReturnHistoryCreateManyAndReturnArgs} args - Arguments to create many ProductReturnHistories.
     * @example
     * // Create many ProductReturnHistories
     * const productReturnHistory = await prisma.productReturnHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductReturnHistories and only return the `id`
     * const productReturnHistoryWithIdOnly = await prisma.productReturnHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductReturnHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductReturnHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductReturnHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductReturnHistory.
     * @param {ProductReturnHistoryDeleteArgs} args - Arguments to delete one ProductReturnHistory.
     * @example
     * // Delete one ProductReturnHistory
     * const ProductReturnHistory = await prisma.productReturnHistory.delete({
     *   where: {
     *     // ... filter to delete one ProductReturnHistory
     *   }
     * })
     * 
     */
    delete<T extends ProductReturnHistoryDeleteArgs>(args: SelectSubset<T, ProductReturnHistoryDeleteArgs<ExtArgs>>): Prisma__ProductReturnHistoryClient<$Result.GetResult<Prisma.$ProductReturnHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductReturnHistory.
     * @param {ProductReturnHistoryUpdateArgs} args - Arguments to update one ProductReturnHistory.
     * @example
     * // Update one ProductReturnHistory
     * const productReturnHistory = await prisma.productReturnHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductReturnHistoryUpdateArgs>(args: SelectSubset<T, ProductReturnHistoryUpdateArgs<ExtArgs>>): Prisma__ProductReturnHistoryClient<$Result.GetResult<Prisma.$ProductReturnHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductReturnHistories.
     * @param {ProductReturnHistoryDeleteManyArgs} args - Arguments to filter ProductReturnHistories to delete.
     * @example
     * // Delete a few ProductReturnHistories
     * const { count } = await prisma.productReturnHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductReturnHistoryDeleteManyArgs>(args?: SelectSubset<T, ProductReturnHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductReturnHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReturnHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductReturnHistories
     * const productReturnHistory = await prisma.productReturnHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductReturnHistoryUpdateManyArgs>(args: SelectSubset<T, ProductReturnHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductReturnHistories and returns the data updated in the database.
     * @param {ProductReturnHistoryUpdateManyAndReturnArgs} args - Arguments to update many ProductReturnHistories.
     * @example
     * // Update many ProductReturnHistories
     * const productReturnHistory = await prisma.productReturnHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductReturnHistories and only return the `id`
     * const productReturnHistoryWithIdOnly = await prisma.productReturnHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductReturnHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductReturnHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductReturnHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductReturnHistory.
     * @param {ProductReturnHistoryUpsertArgs} args - Arguments to update or create a ProductReturnHistory.
     * @example
     * // Update or create a ProductReturnHistory
     * const productReturnHistory = await prisma.productReturnHistory.upsert({
     *   create: {
     *     // ... data to create a ProductReturnHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductReturnHistory we want to update
     *   }
     * })
     */
    upsert<T extends ProductReturnHistoryUpsertArgs>(args: SelectSubset<T, ProductReturnHistoryUpsertArgs<ExtArgs>>): Prisma__ProductReturnHistoryClient<$Result.GetResult<Prisma.$ProductReturnHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductReturnHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReturnHistoryCountArgs} args - Arguments to filter ProductReturnHistories to count.
     * @example
     * // Count the number of ProductReturnHistories
     * const count = await prisma.productReturnHistory.count({
     *   where: {
     *     // ... the filter for the ProductReturnHistories we want to count
     *   }
     * })
    **/
    count<T extends ProductReturnHistoryCountArgs>(
      args?: Subset<T, ProductReturnHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductReturnHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductReturnHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReturnHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductReturnHistoryAggregateArgs>(args: Subset<T, ProductReturnHistoryAggregateArgs>): Prisma.PrismaPromise<GetProductReturnHistoryAggregateType<T>>

    /**
     * Group by ProductReturnHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReturnHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductReturnHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductReturnHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ProductReturnHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductReturnHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductReturnHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductReturnHistory model
   */
  readonly fields: ProductReturnHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductReturnHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductReturnHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deliveryPerson<T extends DeliveryPersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryPersonDefaultArgs<ExtArgs>>): Prisma__DeliveryPersonClient<$Result.GetResult<Prisma.$DeliveryPersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductReturnHistory model
   */
  interface ProductReturnHistoryFieldRefs {
    readonly id: FieldRef<"ProductReturnHistory", 'String'>
    readonly productId: FieldRef<"ProductReturnHistory", 'String'>
    readonly pieces: FieldRef<"ProductReturnHistory", 'Int'>
    readonly unitPrice: FieldRef<"ProductReturnHistory", 'Int'>
    readonly totalPrice: FieldRef<"ProductReturnHistory", 'Int'>
    readonly shopId: FieldRef<"ProductReturnHistory", 'String'>
    readonly created_at: FieldRef<"ProductReturnHistory", 'DateTime'>
    readonly deliveryPersonId: FieldRef<"ProductReturnHistory", 'String'>
    readonly signature: FieldRef<"ProductReturnHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProductReturnHistory findUnique
   */
  export type ProductReturnHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReturnHistory
     */
    select?: ProductReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReturnHistory
     */
    omit?: ProductReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReturnHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductReturnHistory to fetch.
     */
    where: ProductReturnHistoryWhereUniqueInput
  }

  /**
   * ProductReturnHistory findUniqueOrThrow
   */
  export type ProductReturnHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReturnHistory
     */
    select?: ProductReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReturnHistory
     */
    omit?: ProductReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReturnHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductReturnHistory to fetch.
     */
    where: ProductReturnHistoryWhereUniqueInput
  }

  /**
   * ProductReturnHistory findFirst
   */
  export type ProductReturnHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReturnHistory
     */
    select?: ProductReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReturnHistory
     */
    omit?: ProductReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReturnHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductReturnHistory to fetch.
     */
    where?: ProductReturnHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReturnHistories to fetch.
     */
    orderBy?: ProductReturnHistoryOrderByWithRelationInput | ProductReturnHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductReturnHistories.
     */
    cursor?: ProductReturnHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReturnHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReturnHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductReturnHistories.
     */
    distinct?: ProductReturnHistoryScalarFieldEnum | ProductReturnHistoryScalarFieldEnum[]
  }

  /**
   * ProductReturnHistory findFirstOrThrow
   */
  export type ProductReturnHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReturnHistory
     */
    select?: ProductReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReturnHistory
     */
    omit?: ProductReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReturnHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductReturnHistory to fetch.
     */
    where?: ProductReturnHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReturnHistories to fetch.
     */
    orderBy?: ProductReturnHistoryOrderByWithRelationInput | ProductReturnHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductReturnHistories.
     */
    cursor?: ProductReturnHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReturnHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReturnHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductReturnHistories.
     */
    distinct?: ProductReturnHistoryScalarFieldEnum | ProductReturnHistoryScalarFieldEnum[]
  }

  /**
   * ProductReturnHistory findMany
   */
  export type ProductReturnHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReturnHistory
     */
    select?: ProductReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReturnHistory
     */
    omit?: ProductReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReturnHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProductReturnHistories to fetch.
     */
    where?: ProductReturnHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReturnHistories to fetch.
     */
    orderBy?: ProductReturnHistoryOrderByWithRelationInput | ProductReturnHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductReturnHistories.
     */
    cursor?: ProductReturnHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReturnHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReturnHistories.
     */
    skip?: number
    distinct?: ProductReturnHistoryScalarFieldEnum | ProductReturnHistoryScalarFieldEnum[]
  }

  /**
   * ProductReturnHistory create
   */
  export type ProductReturnHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReturnHistory
     */
    select?: ProductReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReturnHistory
     */
    omit?: ProductReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReturnHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductReturnHistory.
     */
    data: XOR<ProductReturnHistoryCreateInput, ProductReturnHistoryUncheckedCreateInput>
  }

  /**
   * ProductReturnHistory createMany
   */
  export type ProductReturnHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductReturnHistories.
     */
    data: ProductReturnHistoryCreateManyInput | ProductReturnHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductReturnHistory createManyAndReturn
   */
  export type ProductReturnHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReturnHistory
     */
    select?: ProductReturnHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReturnHistory
     */
    omit?: ProductReturnHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ProductReturnHistories.
     */
    data: ProductReturnHistoryCreateManyInput | ProductReturnHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReturnHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductReturnHistory update
   */
  export type ProductReturnHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReturnHistory
     */
    select?: ProductReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReturnHistory
     */
    omit?: ProductReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReturnHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductReturnHistory.
     */
    data: XOR<ProductReturnHistoryUpdateInput, ProductReturnHistoryUncheckedUpdateInput>
    /**
     * Choose, which ProductReturnHistory to update.
     */
    where: ProductReturnHistoryWhereUniqueInput
  }

  /**
   * ProductReturnHistory updateMany
   */
  export type ProductReturnHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductReturnHistories.
     */
    data: XOR<ProductReturnHistoryUpdateManyMutationInput, ProductReturnHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductReturnHistories to update
     */
    where?: ProductReturnHistoryWhereInput
    /**
     * Limit how many ProductReturnHistories to update.
     */
    limit?: number
  }

  /**
   * ProductReturnHistory updateManyAndReturn
   */
  export type ProductReturnHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReturnHistory
     */
    select?: ProductReturnHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReturnHistory
     */
    omit?: ProductReturnHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ProductReturnHistories.
     */
    data: XOR<ProductReturnHistoryUpdateManyMutationInput, ProductReturnHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ProductReturnHistories to update
     */
    where?: ProductReturnHistoryWhereInput
    /**
     * Limit how many ProductReturnHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReturnHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductReturnHistory upsert
   */
  export type ProductReturnHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReturnHistory
     */
    select?: ProductReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReturnHistory
     */
    omit?: ProductReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReturnHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductReturnHistory to update in case it exists.
     */
    where: ProductReturnHistoryWhereUniqueInput
    /**
     * In case the ProductReturnHistory found by the `where` argument doesn't exist, create a new ProductReturnHistory with this data.
     */
    create: XOR<ProductReturnHistoryCreateInput, ProductReturnHistoryUncheckedCreateInput>
    /**
     * In case the ProductReturnHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductReturnHistoryUpdateInput, ProductReturnHistoryUncheckedUpdateInput>
  }

  /**
   * ProductReturnHistory delete
   */
  export type ProductReturnHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReturnHistory
     */
    select?: ProductReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReturnHistory
     */
    omit?: ProductReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReturnHistoryInclude<ExtArgs> | null
    /**
     * Filter which ProductReturnHistory to delete.
     */
    where: ProductReturnHistoryWhereUniqueInput
  }

  /**
   * ProductReturnHistory deleteMany
   */
  export type ProductReturnHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductReturnHistories to delete
     */
    where?: ProductReturnHistoryWhereInput
    /**
     * Limit how many ProductReturnHistories to delete.
     */
    limit?: number
  }

  /**
   * ProductReturnHistory without action
   */
  export type ProductReturnHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReturnHistory
     */
    select?: ProductReturnHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReturnHistory
     */
    omit?: ProductReturnHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReturnHistoryInclude<ExtArgs> | null
  }


  /**
   * Model ProductStock
   */

  export type AggregateProductStock = {
    _count: ProductStockCountAggregateOutputType | null
    _avg: ProductStockAvgAggregateOutputType | null
    _sum: ProductStockSumAggregateOutputType | null
    _min: ProductStockMinAggregateOutputType | null
    _max: ProductStockMaxAggregateOutputType | null
  }

  export type ProductStockAvgAggregateOutputType = {
    pieces: number | null
  }

  export type ProductStockSumAggregateOutputType = {
    pieces: number | null
  }

  export type ProductStockMinAggregateOutputType = {
    id: string | null
    productId: string | null
    pieces: number | null
    is_delivered: boolean | null
    created_at: Date | null
  }

  export type ProductStockMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    pieces: number | null
    is_delivered: boolean | null
    created_at: Date | null
  }

  export type ProductStockCountAggregateOutputType = {
    id: number
    productId: number
    pieces: number
    is_delivered: number
    created_at: number
    _all: number
  }


  export type ProductStockAvgAggregateInputType = {
    pieces?: true
  }

  export type ProductStockSumAggregateInputType = {
    pieces?: true
  }

  export type ProductStockMinAggregateInputType = {
    id?: true
    productId?: true
    pieces?: true
    is_delivered?: true
    created_at?: true
  }

  export type ProductStockMaxAggregateInputType = {
    id?: true
    productId?: true
    pieces?: true
    is_delivered?: true
    created_at?: true
  }

  export type ProductStockCountAggregateInputType = {
    id?: true
    productId?: true
    pieces?: true
    is_delivered?: true
    created_at?: true
    _all?: true
  }

  export type ProductStockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductStock to aggregate.
     */
    where?: ProductStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductStocks to fetch.
     */
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductStocks
    **/
    _count?: true | ProductStockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductStockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductStockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductStockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductStockMaxAggregateInputType
  }

  export type GetProductStockAggregateType<T extends ProductStockAggregateArgs> = {
        [P in keyof T & keyof AggregateProductStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductStock[P]>
      : GetScalarType<T[P], AggregateProductStock[P]>
  }




  export type ProductStockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductStockWhereInput
    orderBy?: ProductStockOrderByWithAggregationInput | ProductStockOrderByWithAggregationInput[]
    by: ProductStockScalarFieldEnum[] | ProductStockScalarFieldEnum
    having?: ProductStockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductStockCountAggregateInputType | true
    _avg?: ProductStockAvgAggregateInputType
    _sum?: ProductStockSumAggregateInputType
    _min?: ProductStockMinAggregateInputType
    _max?: ProductStockMaxAggregateInputType
  }

  export type ProductStockGroupByOutputType = {
    id: string
    productId: string
    pieces: number
    is_delivered: boolean
    created_at: Date
    _count: ProductStockCountAggregateOutputType | null
    _avg: ProductStockAvgAggregateOutputType | null
    _sum: ProductStockSumAggregateOutputType | null
    _min: ProductStockMinAggregateOutputType | null
    _max: ProductStockMaxAggregateOutputType | null
  }

  type GetProductStockGroupByPayload<T extends ProductStockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductStockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductStockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductStockGroupByOutputType[P]>
            : GetScalarType<T[P], ProductStockGroupByOutputType[P]>
        }
      >
    >


  export type ProductStockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    pieces?: boolean
    is_delivered?: boolean
    created_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productStock"]>

  export type ProductStockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    pieces?: boolean
    is_delivered?: boolean
    created_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productStock"]>

  export type ProductStockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    pieces?: boolean
    is_delivered?: boolean
    created_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productStock"]>

  export type ProductStockSelectScalar = {
    id?: boolean
    productId?: boolean
    pieces?: boolean
    is_delivered?: boolean
    created_at?: boolean
  }

  export type ProductStockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "pieces" | "is_delivered" | "created_at", ExtArgs["result"]["productStock"]>
  export type ProductStockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductStockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductStockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductStockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductStock"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      pieces: number
      is_delivered: boolean
      created_at: Date
    }, ExtArgs["result"]["productStock"]>
    composites: {}
  }

  type ProductStockGetPayload<S extends boolean | null | undefined | ProductStockDefaultArgs> = $Result.GetResult<Prisma.$ProductStockPayload, S>

  type ProductStockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductStockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductStockCountAggregateInputType | true
    }

  export interface ProductStockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductStock'], meta: { name: 'ProductStock' } }
    /**
     * Find zero or one ProductStock that matches the filter.
     * @param {ProductStockFindUniqueArgs} args - Arguments to find a ProductStock
     * @example
     * // Get one ProductStock
     * const productStock = await prisma.productStock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductStockFindUniqueArgs>(args: SelectSubset<T, ProductStockFindUniqueArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductStock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductStockFindUniqueOrThrowArgs} args - Arguments to find a ProductStock
     * @example
     * // Get one ProductStock
     * const productStock = await prisma.productStock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductStockFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductStockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductStock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockFindFirstArgs} args - Arguments to find a ProductStock
     * @example
     * // Get one ProductStock
     * const productStock = await prisma.productStock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductStockFindFirstArgs>(args?: SelectSubset<T, ProductStockFindFirstArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductStock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockFindFirstOrThrowArgs} args - Arguments to find a ProductStock
     * @example
     * // Get one ProductStock
     * const productStock = await prisma.productStock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductStockFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductStockFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductStocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductStocks
     * const productStocks = await prisma.productStock.findMany()
     * 
     * // Get first 10 ProductStocks
     * const productStocks = await prisma.productStock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productStockWithIdOnly = await prisma.productStock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductStockFindManyArgs>(args?: SelectSubset<T, ProductStockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductStock.
     * @param {ProductStockCreateArgs} args - Arguments to create a ProductStock.
     * @example
     * // Create one ProductStock
     * const ProductStock = await prisma.productStock.create({
     *   data: {
     *     // ... data to create a ProductStock
     *   }
     * })
     * 
     */
    create<T extends ProductStockCreateArgs>(args: SelectSubset<T, ProductStockCreateArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductStocks.
     * @param {ProductStockCreateManyArgs} args - Arguments to create many ProductStocks.
     * @example
     * // Create many ProductStocks
     * const productStock = await prisma.productStock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductStockCreateManyArgs>(args?: SelectSubset<T, ProductStockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductStocks and returns the data saved in the database.
     * @param {ProductStockCreateManyAndReturnArgs} args - Arguments to create many ProductStocks.
     * @example
     * // Create many ProductStocks
     * const productStock = await prisma.productStock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductStocks and only return the `id`
     * const productStockWithIdOnly = await prisma.productStock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductStockCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductStockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductStock.
     * @param {ProductStockDeleteArgs} args - Arguments to delete one ProductStock.
     * @example
     * // Delete one ProductStock
     * const ProductStock = await prisma.productStock.delete({
     *   where: {
     *     // ... filter to delete one ProductStock
     *   }
     * })
     * 
     */
    delete<T extends ProductStockDeleteArgs>(args: SelectSubset<T, ProductStockDeleteArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductStock.
     * @param {ProductStockUpdateArgs} args - Arguments to update one ProductStock.
     * @example
     * // Update one ProductStock
     * const productStock = await prisma.productStock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductStockUpdateArgs>(args: SelectSubset<T, ProductStockUpdateArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductStocks.
     * @param {ProductStockDeleteManyArgs} args - Arguments to filter ProductStocks to delete.
     * @example
     * // Delete a few ProductStocks
     * const { count } = await prisma.productStock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductStockDeleteManyArgs>(args?: SelectSubset<T, ProductStockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductStocks
     * const productStock = await prisma.productStock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductStockUpdateManyArgs>(args: SelectSubset<T, ProductStockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductStocks and returns the data updated in the database.
     * @param {ProductStockUpdateManyAndReturnArgs} args - Arguments to update many ProductStocks.
     * @example
     * // Update many ProductStocks
     * const productStock = await prisma.productStock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductStocks and only return the `id`
     * const productStockWithIdOnly = await prisma.productStock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductStockUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductStockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductStock.
     * @param {ProductStockUpsertArgs} args - Arguments to update or create a ProductStock.
     * @example
     * // Update or create a ProductStock
     * const productStock = await prisma.productStock.upsert({
     *   create: {
     *     // ... data to create a ProductStock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductStock we want to update
     *   }
     * })
     */
    upsert<T extends ProductStockUpsertArgs>(args: SelectSubset<T, ProductStockUpsertArgs<ExtArgs>>): Prisma__ProductStockClient<$Result.GetResult<Prisma.$ProductStockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductStocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockCountArgs} args - Arguments to filter ProductStocks to count.
     * @example
     * // Count the number of ProductStocks
     * const count = await prisma.productStock.count({
     *   where: {
     *     // ... the filter for the ProductStocks we want to count
     *   }
     * })
    **/
    count<T extends ProductStockCountArgs>(
      args?: Subset<T, ProductStockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductStockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductStockAggregateArgs>(args: Subset<T, ProductStockAggregateArgs>): Prisma.PrismaPromise<GetProductStockAggregateType<T>>

    /**
     * Group by ProductStock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductStockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductStockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductStockGroupByArgs['orderBy'] }
        : { orderBy?: ProductStockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductStockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductStock model
   */
  readonly fields: ProductStockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductStock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductStockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductStock model
   */
  interface ProductStockFieldRefs {
    readonly id: FieldRef<"ProductStock", 'String'>
    readonly productId: FieldRef<"ProductStock", 'String'>
    readonly pieces: FieldRef<"ProductStock", 'Int'>
    readonly is_delivered: FieldRef<"ProductStock", 'Boolean'>
    readonly created_at: FieldRef<"ProductStock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductStock findUnique
   */
  export type ProductStockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStock to fetch.
     */
    where: ProductStockWhereUniqueInput
  }

  /**
   * ProductStock findUniqueOrThrow
   */
  export type ProductStockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStock to fetch.
     */
    where: ProductStockWhereUniqueInput
  }

  /**
   * ProductStock findFirst
   */
  export type ProductStockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStock to fetch.
     */
    where?: ProductStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductStocks to fetch.
     */
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductStocks.
     */
    cursor?: ProductStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductStocks.
     */
    distinct?: ProductStockScalarFieldEnum | ProductStockScalarFieldEnum[]
  }

  /**
   * ProductStock findFirstOrThrow
   */
  export type ProductStockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStock to fetch.
     */
    where?: ProductStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductStocks to fetch.
     */
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductStocks.
     */
    cursor?: ProductStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductStocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductStocks.
     */
    distinct?: ProductStockScalarFieldEnum | ProductStockScalarFieldEnum[]
  }

  /**
   * ProductStock findMany
   */
  export type ProductStockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter, which ProductStocks to fetch.
     */
    where?: ProductStockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductStocks to fetch.
     */
    orderBy?: ProductStockOrderByWithRelationInput | ProductStockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductStocks.
     */
    cursor?: ProductStockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductStocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductStocks.
     */
    skip?: number
    distinct?: ProductStockScalarFieldEnum | ProductStockScalarFieldEnum[]
  }

  /**
   * ProductStock create
   */
  export type ProductStockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductStock.
     */
    data: XOR<ProductStockCreateInput, ProductStockUncheckedCreateInput>
  }

  /**
   * ProductStock createMany
   */
  export type ProductStockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductStocks.
     */
    data: ProductStockCreateManyInput | ProductStockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductStock createManyAndReturn
   */
  export type ProductStockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * The data used to create many ProductStocks.
     */
    data: ProductStockCreateManyInput | ProductStockCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductStock update
   */
  export type ProductStockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductStock.
     */
    data: XOR<ProductStockUpdateInput, ProductStockUncheckedUpdateInput>
    /**
     * Choose, which ProductStock to update.
     */
    where: ProductStockWhereUniqueInput
  }

  /**
   * ProductStock updateMany
   */
  export type ProductStockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductStocks.
     */
    data: XOR<ProductStockUpdateManyMutationInput, ProductStockUncheckedUpdateManyInput>
    /**
     * Filter which ProductStocks to update
     */
    where?: ProductStockWhereInput
    /**
     * Limit how many ProductStocks to update.
     */
    limit?: number
  }

  /**
   * ProductStock updateManyAndReturn
   */
  export type ProductStockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * The data used to update ProductStocks.
     */
    data: XOR<ProductStockUpdateManyMutationInput, ProductStockUncheckedUpdateManyInput>
    /**
     * Filter which ProductStocks to update
     */
    where?: ProductStockWhereInput
    /**
     * Limit how many ProductStocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductStock upsert
   */
  export type ProductStockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductStock to update in case it exists.
     */
    where: ProductStockWhereUniqueInput
    /**
     * In case the ProductStock found by the `where` argument doesn't exist, create a new ProductStock with this data.
     */
    create: XOR<ProductStockCreateInput, ProductStockUncheckedCreateInput>
    /**
     * In case the ProductStock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductStockUpdateInput, ProductStockUncheckedUpdateInput>
  }

  /**
   * ProductStock delete
   */
  export type ProductStockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
    /**
     * Filter which ProductStock to delete.
     */
    where: ProductStockWhereUniqueInput
  }

  /**
   * ProductStock deleteMany
   */
  export type ProductStockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductStocks to delete
     */
    where?: ProductStockWhereInput
    /**
     * Limit how many ProductStocks to delete.
     */
    limit?: number
  }

  /**
   * ProductStock without action
   */
  export type ProductStockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStock
     */
    select?: ProductStockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductStock
     */
    omit?: ProductStockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductStockInclude<ExtArgs> | null
  }


  /**
   * Model ShopOrder
   */

  export type AggregateShopOrder = {
    _count: ShopOrderCountAggregateOutputType | null
    _avg: ShopOrderAvgAggregateOutputType | null
    _sum: ShopOrderSumAggregateOutputType | null
    _min: ShopOrderMinAggregateOutputType | null
    _max: ShopOrderMaxAggregateOutputType | null
  }

  export type ShopOrderAvgAggregateOutputType = {
    pieces: number | null
  }

  export type ShopOrderSumAggregateOutputType = {
    pieces: number | null
  }

  export type ShopOrderMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    productId: string | null
    pieces: number | null
    deliveredPersonId: string | null
    created_at: Date | null
    status: $Enums.OrderStatus | null
  }

  export type ShopOrderMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    productId: string | null
    pieces: number | null
    deliveredPersonId: string | null
    created_at: Date | null
    status: $Enums.OrderStatus | null
  }

  export type ShopOrderCountAggregateOutputType = {
    id: number
    shopId: number
    productId: number
    pieces: number
    deliveredPersonId: number
    created_at: number
    status: number
    _all: number
  }


  export type ShopOrderAvgAggregateInputType = {
    pieces?: true
  }

  export type ShopOrderSumAggregateInputType = {
    pieces?: true
  }

  export type ShopOrderMinAggregateInputType = {
    id?: true
    shopId?: true
    productId?: true
    pieces?: true
    deliveredPersonId?: true
    created_at?: true
    status?: true
  }

  export type ShopOrderMaxAggregateInputType = {
    id?: true
    shopId?: true
    productId?: true
    pieces?: true
    deliveredPersonId?: true
    created_at?: true
    status?: true
  }

  export type ShopOrderCountAggregateInputType = {
    id?: true
    shopId?: true
    productId?: true
    pieces?: true
    deliveredPersonId?: true
    created_at?: true
    status?: true
    _all?: true
  }

  export type ShopOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopOrder to aggregate.
     */
    where?: ShopOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopOrders to fetch.
     */
    orderBy?: ShopOrderOrderByWithRelationInput | ShopOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopOrders
    **/
    _count?: true | ShopOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopOrderMaxAggregateInputType
  }

  export type GetShopOrderAggregateType<T extends ShopOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateShopOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopOrder[P]>
      : GetScalarType<T[P], AggregateShopOrder[P]>
  }




  export type ShopOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopOrderWhereInput
    orderBy?: ShopOrderOrderByWithAggregationInput | ShopOrderOrderByWithAggregationInput[]
    by: ShopOrderScalarFieldEnum[] | ShopOrderScalarFieldEnum
    having?: ShopOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopOrderCountAggregateInputType | true
    _avg?: ShopOrderAvgAggregateInputType
    _sum?: ShopOrderSumAggregateInputType
    _min?: ShopOrderMinAggregateInputType
    _max?: ShopOrderMaxAggregateInputType
  }

  export type ShopOrderGroupByOutputType = {
    id: string
    shopId: string
    productId: string
    pieces: number
    deliveredPersonId: string | null
    created_at: Date
    status: $Enums.OrderStatus
    _count: ShopOrderCountAggregateOutputType | null
    _avg: ShopOrderAvgAggregateOutputType | null
    _sum: ShopOrderSumAggregateOutputType | null
    _min: ShopOrderMinAggregateOutputType | null
    _max: ShopOrderMaxAggregateOutputType | null
  }

  type GetShopOrderGroupByPayload<T extends ShopOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopOrderGroupByOutputType[P]>
            : GetScalarType<T[P], ShopOrderGroupByOutputType[P]>
        }
      >
    >


  export type ShopOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    productId?: boolean
    pieces?: boolean
    deliveredPersonId?: boolean
    created_at?: boolean
    status?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    deliveryPerson?: boolean | ShopOrder$deliveryPersonArgs<ExtArgs>
  }, ExtArgs["result"]["shopOrder"]>

  export type ShopOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    productId?: boolean
    pieces?: boolean
    deliveredPersonId?: boolean
    created_at?: boolean
    status?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    deliveryPerson?: boolean | ShopOrder$deliveryPersonArgs<ExtArgs>
  }, ExtArgs["result"]["shopOrder"]>

  export type ShopOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    productId?: boolean
    pieces?: boolean
    deliveredPersonId?: boolean
    created_at?: boolean
    status?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    deliveryPerson?: boolean | ShopOrder$deliveryPersonArgs<ExtArgs>
  }, ExtArgs["result"]["shopOrder"]>

  export type ShopOrderSelectScalar = {
    id?: boolean
    shopId?: boolean
    productId?: boolean
    pieces?: boolean
    deliveredPersonId?: boolean
    created_at?: boolean
    status?: boolean
  }

  export type ShopOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "productId" | "pieces" | "deliveredPersonId" | "created_at" | "status", ExtArgs["result"]["shopOrder"]>
  export type ShopOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    deliveryPerson?: boolean | ShopOrder$deliveryPersonArgs<ExtArgs>
  }
  export type ShopOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    deliveryPerson?: boolean | ShopOrder$deliveryPersonArgs<ExtArgs>
  }
  export type ShopOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    deliveryPerson?: boolean | ShopOrder$deliveryPersonArgs<ExtArgs>
  }

  export type $ShopOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopOrder"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      deliveryPerson: Prisma.$DeliveryPersonPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      productId: string
      pieces: number
      deliveredPersonId: string | null
      created_at: Date
      status: $Enums.OrderStatus
    }, ExtArgs["result"]["shopOrder"]>
    composites: {}
  }

  type ShopOrderGetPayload<S extends boolean | null | undefined | ShopOrderDefaultArgs> = $Result.GetResult<Prisma.$ShopOrderPayload, S>

  type ShopOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopOrderCountAggregateInputType | true
    }

  export interface ShopOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopOrder'], meta: { name: 'ShopOrder' } }
    /**
     * Find zero or one ShopOrder that matches the filter.
     * @param {ShopOrderFindUniqueArgs} args - Arguments to find a ShopOrder
     * @example
     * // Get one ShopOrder
     * const shopOrder = await prisma.shopOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopOrderFindUniqueArgs>(args: SelectSubset<T, ShopOrderFindUniqueArgs<ExtArgs>>): Prisma__ShopOrderClient<$Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShopOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopOrderFindUniqueOrThrowArgs} args - Arguments to find a ShopOrder
     * @example
     * // Get one ShopOrder
     * const shopOrder = await prisma.shopOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopOrderClient<$Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderFindFirstArgs} args - Arguments to find a ShopOrder
     * @example
     * // Get one ShopOrder
     * const shopOrder = await prisma.shopOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopOrderFindFirstArgs>(args?: SelectSubset<T, ShopOrderFindFirstArgs<ExtArgs>>): Prisma__ShopOrderClient<$Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShopOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderFindFirstOrThrowArgs} args - Arguments to find a ShopOrder
     * @example
     * // Get one ShopOrder
     * const shopOrder = await prisma.shopOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopOrderClient<$Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShopOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopOrders
     * const shopOrders = await prisma.shopOrder.findMany()
     * 
     * // Get first 10 ShopOrders
     * const shopOrders = await prisma.shopOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopOrderWithIdOnly = await prisma.shopOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopOrderFindManyArgs>(args?: SelectSubset<T, ShopOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShopOrder.
     * @param {ShopOrderCreateArgs} args - Arguments to create a ShopOrder.
     * @example
     * // Create one ShopOrder
     * const ShopOrder = await prisma.shopOrder.create({
     *   data: {
     *     // ... data to create a ShopOrder
     *   }
     * })
     * 
     */
    create<T extends ShopOrderCreateArgs>(args: SelectSubset<T, ShopOrderCreateArgs<ExtArgs>>): Prisma__ShopOrderClient<$Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShopOrders.
     * @param {ShopOrderCreateManyArgs} args - Arguments to create many ShopOrders.
     * @example
     * // Create many ShopOrders
     * const shopOrder = await prisma.shopOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopOrderCreateManyArgs>(args?: SelectSubset<T, ShopOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShopOrders and returns the data saved in the database.
     * @param {ShopOrderCreateManyAndReturnArgs} args - Arguments to create many ShopOrders.
     * @example
     * // Create many ShopOrders
     * const shopOrder = await prisma.shopOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShopOrders and only return the `id`
     * const shopOrderWithIdOnly = await prisma.shopOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShopOrder.
     * @param {ShopOrderDeleteArgs} args - Arguments to delete one ShopOrder.
     * @example
     * // Delete one ShopOrder
     * const ShopOrder = await prisma.shopOrder.delete({
     *   where: {
     *     // ... filter to delete one ShopOrder
     *   }
     * })
     * 
     */
    delete<T extends ShopOrderDeleteArgs>(args: SelectSubset<T, ShopOrderDeleteArgs<ExtArgs>>): Prisma__ShopOrderClient<$Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShopOrder.
     * @param {ShopOrderUpdateArgs} args - Arguments to update one ShopOrder.
     * @example
     * // Update one ShopOrder
     * const shopOrder = await prisma.shopOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopOrderUpdateArgs>(args: SelectSubset<T, ShopOrderUpdateArgs<ExtArgs>>): Prisma__ShopOrderClient<$Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShopOrders.
     * @param {ShopOrderDeleteManyArgs} args - Arguments to filter ShopOrders to delete.
     * @example
     * // Delete a few ShopOrders
     * const { count } = await prisma.shopOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopOrderDeleteManyArgs>(args?: SelectSubset<T, ShopOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopOrders
     * const shopOrder = await prisma.shopOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopOrderUpdateManyArgs>(args: SelectSubset<T, ShopOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopOrders and returns the data updated in the database.
     * @param {ShopOrderUpdateManyAndReturnArgs} args - Arguments to update many ShopOrders.
     * @example
     * // Update many ShopOrders
     * const shopOrder = await prisma.shopOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShopOrders and only return the `id`
     * const shopOrderWithIdOnly = await prisma.shopOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShopOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShopOrder.
     * @param {ShopOrderUpsertArgs} args - Arguments to update or create a ShopOrder.
     * @example
     * // Update or create a ShopOrder
     * const shopOrder = await prisma.shopOrder.upsert({
     *   create: {
     *     // ... data to create a ShopOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopOrder we want to update
     *   }
     * })
     */
    upsert<T extends ShopOrderUpsertArgs>(args: SelectSubset<T, ShopOrderUpsertArgs<ExtArgs>>): Prisma__ShopOrderClient<$Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShopOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderCountArgs} args - Arguments to filter ShopOrders to count.
     * @example
     * // Count the number of ShopOrders
     * const count = await prisma.shopOrder.count({
     *   where: {
     *     // ... the filter for the ShopOrders we want to count
     *   }
     * })
    **/
    count<T extends ShopOrderCountArgs>(
      args?: Subset<T, ShopOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopOrderAggregateArgs>(args: Subset<T, ShopOrderAggregateArgs>): Prisma.PrismaPromise<GetShopOrderAggregateType<T>>

    /**
     * Group by ShopOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopOrderGroupByArgs['orderBy'] }
        : { orderBy?: ShopOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopOrder model
   */
  readonly fields: ShopOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deliveryPerson<T extends ShopOrder$deliveryPersonArgs<ExtArgs> = {}>(args?: Subset<T, ShopOrder$deliveryPersonArgs<ExtArgs>>): Prisma__DeliveryPersonClient<$Result.GetResult<Prisma.$DeliveryPersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShopOrder model
   */
  interface ShopOrderFieldRefs {
    readonly id: FieldRef<"ShopOrder", 'String'>
    readonly shopId: FieldRef<"ShopOrder", 'String'>
    readonly productId: FieldRef<"ShopOrder", 'String'>
    readonly pieces: FieldRef<"ShopOrder", 'Int'>
    readonly deliveredPersonId: FieldRef<"ShopOrder", 'String'>
    readonly created_at: FieldRef<"ShopOrder", 'DateTime'>
    readonly status: FieldRef<"ShopOrder", 'OrderStatus'>
  }
    

  // Custom InputTypes
  /**
   * ShopOrder findUnique
   */
  export type ShopOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrder
     */
    select?: ShopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopOrder
     */
    omit?: ShopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOrderInclude<ExtArgs> | null
    /**
     * Filter, which ShopOrder to fetch.
     */
    where: ShopOrderWhereUniqueInput
  }

  /**
   * ShopOrder findUniqueOrThrow
   */
  export type ShopOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrder
     */
    select?: ShopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopOrder
     */
    omit?: ShopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOrderInclude<ExtArgs> | null
    /**
     * Filter, which ShopOrder to fetch.
     */
    where: ShopOrderWhereUniqueInput
  }

  /**
   * ShopOrder findFirst
   */
  export type ShopOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrder
     */
    select?: ShopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopOrder
     */
    omit?: ShopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOrderInclude<ExtArgs> | null
    /**
     * Filter, which ShopOrder to fetch.
     */
    where?: ShopOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopOrders to fetch.
     */
    orderBy?: ShopOrderOrderByWithRelationInput | ShopOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopOrders.
     */
    cursor?: ShopOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopOrders.
     */
    distinct?: ShopOrderScalarFieldEnum | ShopOrderScalarFieldEnum[]
  }

  /**
   * ShopOrder findFirstOrThrow
   */
  export type ShopOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrder
     */
    select?: ShopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopOrder
     */
    omit?: ShopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOrderInclude<ExtArgs> | null
    /**
     * Filter, which ShopOrder to fetch.
     */
    where?: ShopOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopOrders to fetch.
     */
    orderBy?: ShopOrderOrderByWithRelationInput | ShopOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopOrders.
     */
    cursor?: ShopOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopOrders.
     */
    distinct?: ShopOrderScalarFieldEnum | ShopOrderScalarFieldEnum[]
  }

  /**
   * ShopOrder findMany
   */
  export type ShopOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrder
     */
    select?: ShopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopOrder
     */
    omit?: ShopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOrderInclude<ExtArgs> | null
    /**
     * Filter, which ShopOrders to fetch.
     */
    where?: ShopOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopOrders to fetch.
     */
    orderBy?: ShopOrderOrderByWithRelationInput | ShopOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopOrders.
     */
    cursor?: ShopOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopOrders.
     */
    skip?: number
    distinct?: ShopOrderScalarFieldEnum | ShopOrderScalarFieldEnum[]
  }

  /**
   * ShopOrder create
   */
  export type ShopOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrder
     */
    select?: ShopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopOrder
     */
    omit?: ShopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a ShopOrder.
     */
    data: XOR<ShopOrderCreateInput, ShopOrderUncheckedCreateInput>
  }

  /**
   * ShopOrder createMany
   */
  export type ShopOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopOrders.
     */
    data: ShopOrderCreateManyInput | ShopOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopOrder createManyAndReturn
   */
  export type ShopOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrder
     */
    select?: ShopOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopOrder
     */
    omit?: ShopOrderOmit<ExtArgs> | null
    /**
     * The data used to create many ShopOrders.
     */
    data: ShopOrderCreateManyInput | ShopOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShopOrder update
   */
  export type ShopOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrder
     */
    select?: ShopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopOrder
     */
    omit?: ShopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a ShopOrder.
     */
    data: XOR<ShopOrderUpdateInput, ShopOrderUncheckedUpdateInput>
    /**
     * Choose, which ShopOrder to update.
     */
    where: ShopOrderWhereUniqueInput
  }

  /**
   * ShopOrder updateMany
   */
  export type ShopOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopOrders.
     */
    data: XOR<ShopOrderUpdateManyMutationInput, ShopOrderUncheckedUpdateManyInput>
    /**
     * Filter which ShopOrders to update
     */
    where?: ShopOrderWhereInput
    /**
     * Limit how many ShopOrders to update.
     */
    limit?: number
  }

  /**
   * ShopOrder updateManyAndReturn
   */
  export type ShopOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrder
     */
    select?: ShopOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShopOrder
     */
    omit?: ShopOrderOmit<ExtArgs> | null
    /**
     * The data used to update ShopOrders.
     */
    data: XOR<ShopOrderUpdateManyMutationInput, ShopOrderUncheckedUpdateManyInput>
    /**
     * Filter which ShopOrders to update
     */
    where?: ShopOrderWhereInput
    /**
     * Limit how many ShopOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShopOrder upsert
   */
  export type ShopOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrder
     */
    select?: ShopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopOrder
     */
    omit?: ShopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the ShopOrder to update in case it exists.
     */
    where: ShopOrderWhereUniqueInput
    /**
     * In case the ShopOrder found by the `where` argument doesn't exist, create a new ShopOrder with this data.
     */
    create: XOR<ShopOrderCreateInput, ShopOrderUncheckedCreateInput>
    /**
     * In case the ShopOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopOrderUpdateInput, ShopOrderUncheckedUpdateInput>
  }

  /**
   * ShopOrder delete
   */
  export type ShopOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrder
     */
    select?: ShopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopOrder
     */
    omit?: ShopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOrderInclude<ExtArgs> | null
    /**
     * Filter which ShopOrder to delete.
     */
    where: ShopOrderWhereUniqueInput
  }

  /**
   * ShopOrder deleteMany
   */
  export type ShopOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopOrders to delete
     */
    where?: ShopOrderWhereInput
    /**
     * Limit how many ShopOrders to delete.
     */
    limit?: number
  }

  /**
   * ShopOrder.deliveryPerson
   */
  export type ShopOrder$deliveryPersonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryPerson
     */
    select?: DeliveryPersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryPerson
     */
    omit?: DeliveryPersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryPersonInclude<ExtArgs> | null
    where?: DeliveryPersonWhereInput
  }

  /**
   * ShopOrder without action
   */
  export type ShopOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrder
     */
    select?: ShopOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShopOrder
     */
    omit?: ShopOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOrderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    email: 'email',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    companyLocation: 'companyLocation',
    companyNumber: 'companyNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    stock: 'stock',
    ingredient: 'ingredient',
    barcode: 'barcode',
    price: 'price',
    expiredAt: 'expiredAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    imageURL: 'imageURL'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductDeliveryScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    shopId: 'shopId',
    deliveryPersonId: 'deliveryPersonId',
    total_price: 'total_price',
    quantity: 'quantity',
    unit_price: 'unit_price',
    productType: 'productType',
    transaction_type: 'transaction_type',
    created_at: 'created_at',
    signature: 'signature'
  };

  export type ProductDeliveryScalarFieldEnum = (typeof ProductDeliveryScalarFieldEnum)[keyof typeof ProductDeliveryScalarFieldEnum]


  export const DeliveryPersonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    phoneNumber: 'phoneNumber',
    region: 'region',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    vehicle: 'vehicle'
  };

  export type DeliveryPersonScalarFieldEnum = (typeof DeliveryPersonScalarFieldEnum)[keyof typeof DeliveryPersonScalarFieldEnum]


  export const ShopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    is_active: 'is_active',
    email: 'email',
    phone_number: 'phone_number'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const ProductRemainingScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    pieces: 'pieces',
    is_delivered: 'is_delivered',
    created_at: 'created_at'
  };

  export type ProductRemainingScalarFieldEnum = (typeof ProductRemainingScalarFieldEnum)[keyof typeof ProductRemainingScalarFieldEnum]


  export const ProductReturnHistoryScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    pieces: 'pieces',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice',
    shopId: 'shopId',
    created_at: 'created_at',
    deliveryPersonId: 'deliveryPersonId',
    signature: 'signature'
  };

  export type ProductReturnHistoryScalarFieldEnum = (typeof ProductReturnHistoryScalarFieldEnum)[keyof typeof ProductReturnHistoryScalarFieldEnum]


  export const ProductStockScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    pieces: 'pieces',
    is_delivered: 'is_delivered',
    created_at: 'created_at'
  };

  export type ProductStockScalarFieldEnum = (typeof ProductStockScalarFieldEnum)[keyof typeof ProductStockScalarFieldEnum]


  export const ShopOrderScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    productId: 'productId',
    pieces: 'pieces',
    deliveredPersonId: 'deliveredPersonId',
    created_at: 'created_at',
    status: 'status'
  };

  export type ShopOrderScalarFieldEnum = (typeof ShopOrderScalarFieldEnum)[keyof typeof ShopOrderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TransactionEnum'
   */
  export type EnumTransactionEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionEnum'>
    


  /**
   * Reference to a field of type 'TransactionEnum[]'
   */
  export type ListEnumTransactionEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionEnum[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    companyName?: StringFilter<"Customer"> | string
    companyLocation?: StringFilter<"Customer"> | string
    companyNumber?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyLocation?: SortOrder
    companyNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    companyName?: StringFilter<"Customer"> | string
    companyLocation?: StringFilter<"Customer"> | string
    companyNumber?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyLocation?: SortOrder
    companyNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    companyName?: StringWithAggregatesFilter<"Customer"> | string
    companyLocation?: StringWithAggregatesFilter<"Customer"> | string
    companyNumber?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    type?: StringFilter<"Product"> | string
    stock?: IntFilter<"Product"> | number
    ingredient?: StringNullableFilter<"Product"> | string | null
    barcode?: StringFilter<"Product"> | string
    price?: IntFilter<"Product"> | number
    expiredAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    imageURL?: StringNullableFilter<"Product"> | string | null
    productDeliveries?: ProductDeliveryListRelationFilter
    remainingProducts?: ProductRemainingListRelationFilter
    stockRecords?: ProductStockListRelationFilter
    returnHistories?: ProductReturnHistoryListRelationFilter
    shopOrders?: ShopOrderListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    stock?: SortOrder
    ingredient?: SortOrderInput | SortOrder
    barcode?: SortOrder
    price?: SortOrder
    expiredAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageURL?: SortOrderInput | SortOrder
    productDeliveries?: ProductDeliveryOrderByRelationAggregateInput
    remainingProducts?: ProductRemainingOrderByRelationAggregateInput
    stockRecords?: ProductStockOrderByRelationAggregateInput
    returnHistories?: ProductReturnHistoryOrderByRelationAggregateInput
    shopOrders?: ShopOrderOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    barcode?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    title?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    type?: StringFilter<"Product"> | string
    stock?: IntFilter<"Product"> | number
    ingredient?: StringNullableFilter<"Product"> | string | null
    price?: IntFilter<"Product"> | number
    expiredAt?: DateTimeNullableFilter<"Product"> | Date | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    imageURL?: StringNullableFilter<"Product"> | string | null
    productDeliveries?: ProductDeliveryListRelationFilter
    remainingProducts?: ProductRemainingListRelationFilter
    stockRecords?: ProductStockListRelationFilter
    returnHistories?: ProductReturnHistoryListRelationFilter
    shopOrders?: ShopOrderListRelationFilter
  }, "id" | "barcode">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    stock?: SortOrder
    ingredient?: SortOrderInput | SortOrder
    barcode?: SortOrder
    price?: SortOrder
    expiredAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageURL?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    title?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    type?: StringWithAggregatesFilter<"Product"> | string
    stock?: IntWithAggregatesFilter<"Product"> | number
    ingredient?: StringNullableWithAggregatesFilter<"Product"> | string | null
    barcode?: StringWithAggregatesFilter<"Product"> | string
    price?: IntWithAggregatesFilter<"Product"> | number
    expiredAt?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    imageURL?: StringNullableWithAggregatesFilter<"Product"> | string | null
  }

  export type ProductDeliveryWhereInput = {
    AND?: ProductDeliveryWhereInput | ProductDeliveryWhereInput[]
    OR?: ProductDeliveryWhereInput[]
    NOT?: ProductDeliveryWhereInput | ProductDeliveryWhereInput[]
    id?: StringFilter<"ProductDelivery"> | string
    productId?: StringFilter<"ProductDelivery"> | string
    shopId?: StringFilter<"ProductDelivery"> | string
    deliveryPersonId?: StringFilter<"ProductDelivery"> | string
    total_price?: IntFilter<"ProductDelivery"> | number
    quantity?: IntFilter<"ProductDelivery"> | number
    unit_price?: IntFilter<"ProductDelivery"> | number
    productType?: StringFilter<"ProductDelivery"> | string
    transaction_type?: EnumTransactionEnumFilter<"ProductDelivery"> | $Enums.TransactionEnum
    created_at?: DateTimeFilter<"ProductDelivery"> | Date | string
    signature?: StringNullableFilter<"ProductDelivery"> | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    deliveryPerson?: XOR<DeliveryPersonScalarRelationFilter, DeliveryPersonWhereInput>
  }

  export type ProductDeliveryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    shopId?: SortOrder
    deliveryPersonId?: SortOrder
    total_price?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    productType?: SortOrder
    transaction_type?: SortOrder
    created_at?: SortOrder
    signature?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    shop?: ShopOrderByWithRelationInput
    deliveryPerson?: DeliveryPersonOrderByWithRelationInput
  }

  export type ProductDeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductDeliveryWhereInput | ProductDeliveryWhereInput[]
    OR?: ProductDeliveryWhereInput[]
    NOT?: ProductDeliveryWhereInput | ProductDeliveryWhereInput[]
    productId?: StringFilter<"ProductDelivery"> | string
    shopId?: StringFilter<"ProductDelivery"> | string
    deliveryPersonId?: StringFilter<"ProductDelivery"> | string
    total_price?: IntFilter<"ProductDelivery"> | number
    quantity?: IntFilter<"ProductDelivery"> | number
    unit_price?: IntFilter<"ProductDelivery"> | number
    productType?: StringFilter<"ProductDelivery"> | string
    transaction_type?: EnumTransactionEnumFilter<"ProductDelivery"> | $Enums.TransactionEnum
    created_at?: DateTimeFilter<"ProductDelivery"> | Date | string
    signature?: StringNullableFilter<"ProductDelivery"> | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    deliveryPerson?: XOR<DeliveryPersonScalarRelationFilter, DeliveryPersonWhereInput>
  }, "id">

  export type ProductDeliveryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    shopId?: SortOrder
    deliveryPersonId?: SortOrder
    total_price?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    productType?: SortOrder
    transaction_type?: SortOrder
    created_at?: SortOrder
    signature?: SortOrderInput | SortOrder
    _count?: ProductDeliveryCountOrderByAggregateInput
    _avg?: ProductDeliveryAvgOrderByAggregateInput
    _max?: ProductDeliveryMaxOrderByAggregateInput
    _min?: ProductDeliveryMinOrderByAggregateInput
    _sum?: ProductDeliverySumOrderByAggregateInput
  }

  export type ProductDeliveryScalarWhereWithAggregatesInput = {
    AND?: ProductDeliveryScalarWhereWithAggregatesInput | ProductDeliveryScalarWhereWithAggregatesInput[]
    OR?: ProductDeliveryScalarWhereWithAggregatesInput[]
    NOT?: ProductDeliveryScalarWhereWithAggregatesInput | ProductDeliveryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductDelivery"> | string
    productId?: StringWithAggregatesFilter<"ProductDelivery"> | string
    shopId?: StringWithAggregatesFilter<"ProductDelivery"> | string
    deliveryPersonId?: StringWithAggregatesFilter<"ProductDelivery"> | string
    total_price?: IntWithAggregatesFilter<"ProductDelivery"> | number
    quantity?: IntWithAggregatesFilter<"ProductDelivery"> | number
    unit_price?: IntWithAggregatesFilter<"ProductDelivery"> | number
    productType?: StringWithAggregatesFilter<"ProductDelivery"> | string
    transaction_type?: EnumTransactionEnumWithAggregatesFilter<"ProductDelivery"> | $Enums.TransactionEnum
    created_at?: DateTimeWithAggregatesFilter<"ProductDelivery"> | Date | string
    signature?: StringNullableWithAggregatesFilter<"ProductDelivery"> | string | null
  }

  export type DeliveryPersonWhereInput = {
    AND?: DeliveryPersonWhereInput | DeliveryPersonWhereInput[]
    OR?: DeliveryPersonWhereInput[]
    NOT?: DeliveryPersonWhereInput | DeliveryPersonWhereInput[]
    id?: StringFilter<"DeliveryPerson"> | string
    name?: StringFilter<"DeliveryPerson"> | string
    image?: StringNullableFilter<"DeliveryPerson"> | string | null
    phoneNumber?: StringFilter<"DeliveryPerson"> | string
    region?: StringNullableFilter<"DeliveryPerson"> | string | null
    createdAt?: DateTimeFilter<"DeliveryPerson"> | Date | string
    updatedAt?: DateTimeFilter<"DeliveryPerson"> | Date | string
    vehicle?: StringNullableFilter<"DeliveryPerson"> | string | null
    productDeliveries?: ProductDeliveryListRelationFilter
    returnHistories?: ProductReturnHistoryListRelationFilter
    shopOrders?: ShopOrderListRelationFilter
  }

  export type DeliveryPersonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    region?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicle?: SortOrderInput | SortOrder
    productDeliveries?: ProductDeliveryOrderByRelationAggregateInput
    returnHistories?: ProductReturnHistoryOrderByRelationAggregateInput
    shopOrders?: ShopOrderOrderByRelationAggregateInput
  }

  export type DeliveryPersonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneNumber?: string
    AND?: DeliveryPersonWhereInput | DeliveryPersonWhereInput[]
    OR?: DeliveryPersonWhereInput[]
    NOT?: DeliveryPersonWhereInput | DeliveryPersonWhereInput[]
    name?: StringFilter<"DeliveryPerson"> | string
    image?: StringNullableFilter<"DeliveryPerson"> | string | null
    region?: StringNullableFilter<"DeliveryPerson"> | string | null
    createdAt?: DateTimeFilter<"DeliveryPerson"> | Date | string
    updatedAt?: DateTimeFilter<"DeliveryPerson"> | Date | string
    vehicle?: StringNullableFilter<"DeliveryPerson"> | string | null
    productDeliveries?: ProductDeliveryListRelationFilter
    returnHistories?: ProductReturnHistoryListRelationFilter
    shopOrders?: ShopOrderListRelationFilter
  }, "id" | "phoneNumber">

  export type DeliveryPersonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    region?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicle?: SortOrderInput | SortOrder
    _count?: DeliveryPersonCountOrderByAggregateInput
    _max?: DeliveryPersonMaxOrderByAggregateInput
    _min?: DeliveryPersonMinOrderByAggregateInput
  }

  export type DeliveryPersonScalarWhereWithAggregatesInput = {
    AND?: DeliveryPersonScalarWhereWithAggregatesInput | DeliveryPersonScalarWhereWithAggregatesInput[]
    OR?: DeliveryPersonScalarWhereWithAggregatesInput[]
    NOT?: DeliveryPersonScalarWhereWithAggregatesInput | DeliveryPersonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeliveryPerson"> | string
    name?: StringWithAggregatesFilter<"DeliveryPerson"> | string
    image?: StringNullableWithAggregatesFilter<"DeliveryPerson"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"DeliveryPerson"> | string
    region?: StringNullableWithAggregatesFilter<"DeliveryPerson"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DeliveryPerson"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DeliveryPerson"> | Date | string
    vehicle?: StringNullableWithAggregatesFilter<"DeliveryPerson"> | string | null
  }

  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    id?: StringFilter<"Shop"> | string
    name?: StringFilter<"Shop"> | string
    address?: StringFilter<"Shop"> | string
    is_active?: BoolFilter<"Shop"> | boolean
    email?: StringFilter<"Shop"> | string
    phone_number?: StringFilter<"Shop"> | string
    returnHistories?: ProductReturnHistoryListRelationFilter
    shopOrders?: ShopOrderListRelationFilter
    productDelivery?: ProductDeliveryListRelationFilter
  }

  export type ShopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    is_active?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    returnHistories?: ProductReturnHistoryOrderByRelationAggregateInput
    shopOrders?: ShopOrderOrderByRelationAggregateInput
    productDelivery?: ProductDeliveryOrderByRelationAggregateInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    name?: StringFilter<"Shop"> | string
    address?: StringFilter<"Shop"> | string
    is_active?: BoolFilter<"Shop"> | boolean
    email?: StringFilter<"Shop"> | string
    phone_number?: StringFilter<"Shop"> | string
    returnHistories?: ProductReturnHistoryListRelationFilter
    shopOrders?: ShopOrderListRelationFilter
    productDelivery?: ProductDeliveryListRelationFilter
  }, "id">

  export type ShopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    is_active?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    _count?: ShopCountOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shop"> | string
    name?: StringWithAggregatesFilter<"Shop"> | string
    address?: StringWithAggregatesFilter<"Shop"> | string
    is_active?: BoolWithAggregatesFilter<"Shop"> | boolean
    email?: StringWithAggregatesFilter<"Shop"> | string
    phone_number?: StringWithAggregatesFilter<"Shop"> | string
  }

  export type ProductRemainingWhereInput = {
    AND?: ProductRemainingWhereInput | ProductRemainingWhereInput[]
    OR?: ProductRemainingWhereInput[]
    NOT?: ProductRemainingWhereInput | ProductRemainingWhereInput[]
    id?: StringFilter<"ProductRemaining"> | string
    productId?: StringFilter<"ProductRemaining"> | string
    pieces?: IntFilter<"ProductRemaining"> | number
    is_delivered?: BoolFilter<"ProductRemaining"> | boolean
    created_at?: DateTimeFilter<"ProductRemaining"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductRemainingOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    is_delivered?: SortOrder
    created_at?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductRemainingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductRemainingWhereInput | ProductRemainingWhereInput[]
    OR?: ProductRemainingWhereInput[]
    NOT?: ProductRemainingWhereInput | ProductRemainingWhereInput[]
    productId?: StringFilter<"ProductRemaining"> | string
    pieces?: IntFilter<"ProductRemaining"> | number
    is_delivered?: BoolFilter<"ProductRemaining"> | boolean
    created_at?: DateTimeFilter<"ProductRemaining"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductRemainingOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    is_delivered?: SortOrder
    created_at?: SortOrder
    _count?: ProductRemainingCountOrderByAggregateInput
    _avg?: ProductRemainingAvgOrderByAggregateInput
    _max?: ProductRemainingMaxOrderByAggregateInput
    _min?: ProductRemainingMinOrderByAggregateInput
    _sum?: ProductRemainingSumOrderByAggregateInput
  }

  export type ProductRemainingScalarWhereWithAggregatesInput = {
    AND?: ProductRemainingScalarWhereWithAggregatesInput | ProductRemainingScalarWhereWithAggregatesInput[]
    OR?: ProductRemainingScalarWhereWithAggregatesInput[]
    NOT?: ProductRemainingScalarWhereWithAggregatesInput | ProductRemainingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductRemaining"> | string
    productId?: StringWithAggregatesFilter<"ProductRemaining"> | string
    pieces?: IntWithAggregatesFilter<"ProductRemaining"> | number
    is_delivered?: BoolWithAggregatesFilter<"ProductRemaining"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"ProductRemaining"> | Date | string
  }

  export type ProductReturnHistoryWhereInput = {
    AND?: ProductReturnHistoryWhereInput | ProductReturnHistoryWhereInput[]
    OR?: ProductReturnHistoryWhereInput[]
    NOT?: ProductReturnHistoryWhereInput | ProductReturnHistoryWhereInput[]
    id?: StringFilter<"ProductReturnHistory"> | string
    productId?: StringFilter<"ProductReturnHistory"> | string
    pieces?: IntFilter<"ProductReturnHistory"> | number
    unitPrice?: IntNullableFilter<"ProductReturnHistory"> | number | null
    totalPrice?: IntNullableFilter<"ProductReturnHistory"> | number | null
    shopId?: StringFilter<"ProductReturnHistory"> | string
    created_at?: DateTimeFilter<"ProductReturnHistory"> | Date | string
    deliveryPersonId?: StringFilter<"ProductReturnHistory"> | string
    signature?: StringFilter<"ProductReturnHistory"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    deliveryPerson?: XOR<DeliveryPersonScalarRelationFilter, DeliveryPersonWhereInput>
  }

  export type ProductReturnHistoryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    unitPrice?: SortOrderInput | SortOrder
    totalPrice?: SortOrderInput | SortOrder
    shopId?: SortOrder
    created_at?: SortOrder
    deliveryPersonId?: SortOrder
    signature?: SortOrder
    product?: ProductOrderByWithRelationInput
    shop?: ShopOrderByWithRelationInput
    deliveryPerson?: DeliveryPersonOrderByWithRelationInput
  }

  export type ProductReturnHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductReturnHistoryWhereInput | ProductReturnHistoryWhereInput[]
    OR?: ProductReturnHistoryWhereInput[]
    NOT?: ProductReturnHistoryWhereInput | ProductReturnHistoryWhereInput[]
    productId?: StringFilter<"ProductReturnHistory"> | string
    pieces?: IntFilter<"ProductReturnHistory"> | number
    unitPrice?: IntNullableFilter<"ProductReturnHistory"> | number | null
    totalPrice?: IntNullableFilter<"ProductReturnHistory"> | number | null
    shopId?: StringFilter<"ProductReturnHistory"> | string
    created_at?: DateTimeFilter<"ProductReturnHistory"> | Date | string
    deliveryPersonId?: StringFilter<"ProductReturnHistory"> | string
    signature?: StringFilter<"ProductReturnHistory"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    deliveryPerson?: XOR<DeliveryPersonScalarRelationFilter, DeliveryPersonWhereInput>
  }, "id">

  export type ProductReturnHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    unitPrice?: SortOrderInput | SortOrder
    totalPrice?: SortOrderInput | SortOrder
    shopId?: SortOrder
    created_at?: SortOrder
    deliveryPersonId?: SortOrder
    signature?: SortOrder
    _count?: ProductReturnHistoryCountOrderByAggregateInput
    _avg?: ProductReturnHistoryAvgOrderByAggregateInput
    _max?: ProductReturnHistoryMaxOrderByAggregateInput
    _min?: ProductReturnHistoryMinOrderByAggregateInput
    _sum?: ProductReturnHistorySumOrderByAggregateInput
  }

  export type ProductReturnHistoryScalarWhereWithAggregatesInput = {
    AND?: ProductReturnHistoryScalarWhereWithAggregatesInput | ProductReturnHistoryScalarWhereWithAggregatesInput[]
    OR?: ProductReturnHistoryScalarWhereWithAggregatesInput[]
    NOT?: ProductReturnHistoryScalarWhereWithAggregatesInput | ProductReturnHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductReturnHistory"> | string
    productId?: StringWithAggregatesFilter<"ProductReturnHistory"> | string
    pieces?: IntWithAggregatesFilter<"ProductReturnHistory"> | number
    unitPrice?: IntNullableWithAggregatesFilter<"ProductReturnHistory"> | number | null
    totalPrice?: IntNullableWithAggregatesFilter<"ProductReturnHistory"> | number | null
    shopId?: StringWithAggregatesFilter<"ProductReturnHistory"> | string
    created_at?: DateTimeWithAggregatesFilter<"ProductReturnHistory"> | Date | string
    deliveryPersonId?: StringWithAggregatesFilter<"ProductReturnHistory"> | string
    signature?: StringWithAggregatesFilter<"ProductReturnHistory"> | string
  }

  export type ProductStockWhereInput = {
    AND?: ProductStockWhereInput | ProductStockWhereInput[]
    OR?: ProductStockWhereInput[]
    NOT?: ProductStockWhereInput | ProductStockWhereInput[]
    id?: StringFilter<"ProductStock"> | string
    productId?: StringFilter<"ProductStock"> | string
    pieces?: IntFilter<"ProductStock"> | number
    is_delivered?: BoolFilter<"ProductStock"> | boolean
    created_at?: DateTimeFilter<"ProductStock"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductStockOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    is_delivered?: SortOrder
    created_at?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ProductStockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductStockWhereInput | ProductStockWhereInput[]
    OR?: ProductStockWhereInput[]
    NOT?: ProductStockWhereInput | ProductStockWhereInput[]
    productId?: StringFilter<"ProductStock"> | string
    pieces?: IntFilter<"ProductStock"> | number
    is_delivered?: BoolFilter<"ProductStock"> | boolean
    created_at?: DateTimeFilter<"ProductStock"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ProductStockOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    is_delivered?: SortOrder
    created_at?: SortOrder
    _count?: ProductStockCountOrderByAggregateInput
    _avg?: ProductStockAvgOrderByAggregateInput
    _max?: ProductStockMaxOrderByAggregateInput
    _min?: ProductStockMinOrderByAggregateInput
    _sum?: ProductStockSumOrderByAggregateInput
  }

  export type ProductStockScalarWhereWithAggregatesInput = {
    AND?: ProductStockScalarWhereWithAggregatesInput | ProductStockScalarWhereWithAggregatesInput[]
    OR?: ProductStockScalarWhereWithAggregatesInput[]
    NOT?: ProductStockScalarWhereWithAggregatesInput | ProductStockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProductStock"> | string
    productId?: StringWithAggregatesFilter<"ProductStock"> | string
    pieces?: IntWithAggregatesFilter<"ProductStock"> | number
    is_delivered?: BoolWithAggregatesFilter<"ProductStock"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"ProductStock"> | Date | string
  }

  export type ShopOrderWhereInput = {
    AND?: ShopOrderWhereInput | ShopOrderWhereInput[]
    OR?: ShopOrderWhereInput[]
    NOT?: ShopOrderWhereInput | ShopOrderWhereInput[]
    id?: StringFilter<"ShopOrder"> | string
    shopId?: StringFilter<"ShopOrder"> | string
    productId?: StringFilter<"ShopOrder"> | string
    pieces?: IntFilter<"ShopOrder"> | number
    deliveredPersonId?: StringNullableFilter<"ShopOrder"> | string | null
    created_at?: DateTimeFilter<"ShopOrder"> | Date | string
    status?: EnumOrderStatusFilter<"ShopOrder"> | $Enums.OrderStatus
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    deliveryPerson?: XOR<DeliveryPersonNullableScalarRelationFilter, DeliveryPersonWhereInput> | null
  }

  export type ShopOrderOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    deliveredPersonId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    status?: SortOrder
    shop?: ShopOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    deliveryPerson?: DeliveryPersonOrderByWithRelationInput
  }

  export type ShopOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShopOrderWhereInput | ShopOrderWhereInput[]
    OR?: ShopOrderWhereInput[]
    NOT?: ShopOrderWhereInput | ShopOrderWhereInput[]
    shopId?: StringFilter<"ShopOrder"> | string
    productId?: StringFilter<"ShopOrder"> | string
    pieces?: IntFilter<"ShopOrder"> | number
    deliveredPersonId?: StringNullableFilter<"ShopOrder"> | string | null
    created_at?: DateTimeFilter<"ShopOrder"> | Date | string
    status?: EnumOrderStatusFilter<"ShopOrder"> | $Enums.OrderStatus
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    deliveryPerson?: XOR<DeliveryPersonNullableScalarRelationFilter, DeliveryPersonWhereInput> | null
  }, "id">

  export type ShopOrderOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    deliveredPersonId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    status?: SortOrder
    _count?: ShopOrderCountOrderByAggregateInput
    _avg?: ShopOrderAvgOrderByAggregateInput
    _max?: ShopOrderMaxOrderByAggregateInput
    _min?: ShopOrderMinOrderByAggregateInput
    _sum?: ShopOrderSumOrderByAggregateInput
  }

  export type ShopOrderScalarWhereWithAggregatesInput = {
    AND?: ShopOrderScalarWhereWithAggregatesInput | ShopOrderScalarWhereWithAggregatesInput[]
    OR?: ShopOrderScalarWhereWithAggregatesInput[]
    NOT?: ShopOrderScalarWhereWithAggregatesInput | ShopOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShopOrder"> | string
    shopId?: StringWithAggregatesFilter<"ShopOrder"> | string
    productId?: StringWithAggregatesFilter<"ShopOrder"> | string
    pieces?: IntWithAggregatesFilter<"ShopOrder"> | number
    deliveredPersonId?: StringNullableWithAggregatesFilter<"ShopOrder"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ShopOrder"> | Date | string
    status?: EnumOrderStatusWithAggregatesFilter<"ShopOrder"> | $Enums.OrderStatus
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    email: string
    role: $Enums.Role
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    email: string
    role: $Enums.Role
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    email: string
    role: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type CustomerCreateInput = {
    id?: string
    companyName: string
    companyLocation: string
    companyNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    companyName: string
    companyLocation: string
    companyNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyLocation?: StringFieldUpdateOperationsInput | string
    companyNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyLocation?: StringFieldUpdateOperationsInput | string
    companyNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateManyInput = {
    id?: string
    companyName: string
    companyLocation: string
    companyNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyLocation?: StringFieldUpdateOperationsInput | string
    companyNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyLocation?: StringFieldUpdateOperationsInput | string
    companyNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    stock: number
    ingredient?: string | null
    barcode: string
    price: number
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imageURL?: string | null
    productDeliveries?: ProductDeliveryCreateNestedManyWithoutProductInput
    remainingProducts?: ProductRemainingCreateNestedManyWithoutProductInput
    stockRecords?: ProductStockCreateNestedManyWithoutProductInput
    returnHistories?: ProductReturnHistoryCreateNestedManyWithoutProductInput
    shopOrders?: ShopOrderCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    stock: number
    ingredient?: string | null
    barcode: string
    price: number
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imageURL?: string | null
    productDeliveries?: ProductDeliveryUncheckedCreateNestedManyWithoutProductInput
    remainingProducts?: ProductRemainingUncheckedCreateNestedManyWithoutProductInput
    stockRecords?: ProductStockUncheckedCreateNestedManyWithoutProductInput
    returnHistories?: ProductReturnHistoryUncheckedCreateNestedManyWithoutProductInput
    shopOrders?: ShopOrderUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    ingredient?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    productDeliveries?: ProductDeliveryUpdateManyWithoutProductNestedInput
    remainingProducts?: ProductRemainingUpdateManyWithoutProductNestedInput
    stockRecords?: ProductStockUpdateManyWithoutProductNestedInput
    returnHistories?: ProductReturnHistoryUpdateManyWithoutProductNestedInput
    shopOrders?: ShopOrderUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    ingredient?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    productDeliveries?: ProductDeliveryUncheckedUpdateManyWithoutProductNestedInput
    remainingProducts?: ProductRemainingUncheckedUpdateManyWithoutProductNestedInput
    stockRecords?: ProductStockUncheckedUpdateManyWithoutProductNestedInput
    returnHistories?: ProductReturnHistoryUncheckedUpdateManyWithoutProductNestedInput
    shopOrders?: ShopOrderUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    stock: number
    ingredient?: string | null
    barcode: string
    price: number
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imageURL?: string | null
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    ingredient?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    ingredient?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductDeliveryCreateInput = {
    id?: string
    total_price: number
    quantity: number
    unit_price: number
    productType: string
    transaction_type: $Enums.TransactionEnum
    created_at?: Date | string
    signature?: string | null
    product: ProductCreateNestedOneWithoutProductDeliveriesInput
    shop: ShopCreateNestedOneWithoutProductDeliveryInput
    deliveryPerson: DeliveryPersonCreateNestedOneWithoutProductDeliveriesInput
  }

  export type ProductDeliveryUncheckedCreateInput = {
    id?: string
    productId: string
    shopId: string
    deliveryPersonId: string
    total_price: number
    quantity: number
    unit_price: number
    productType: string
    transaction_type: $Enums.TransactionEnum
    created_at?: Date | string
    signature?: string | null
  }

  export type ProductDeliveryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    transaction_type?: EnumTransactionEnumFieldUpdateOperationsInput | $Enums.TransactionEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutProductDeliveriesNestedInput
    shop?: ShopUpdateOneRequiredWithoutProductDeliveryNestedInput
    deliveryPerson?: DeliveryPersonUpdateOneRequiredWithoutProductDeliveriesNestedInput
  }

  export type ProductDeliveryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    deliveryPersonId?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    transaction_type?: EnumTransactionEnumFieldUpdateOperationsInput | $Enums.TransactionEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductDeliveryCreateManyInput = {
    id?: string
    productId: string
    shopId: string
    deliveryPersonId: string
    total_price: number
    quantity: number
    unit_price: number
    productType: string
    transaction_type: $Enums.TransactionEnum
    created_at?: Date | string
    signature?: string | null
  }

  export type ProductDeliveryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    transaction_type?: EnumTransactionEnumFieldUpdateOperationsInput | $Enums.TransactionEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductDeliveryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    deliveryPersonId?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    transaction_type?: EnumTransactionEnumFieldUpdateOperationsInput | $Enums.TransactionEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryPersonCreateInput = {
    id?: string
    name: string
    image?: string | null
    phoneNumber: string
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle?: string | null
    productDeliveries?: ProductDeliveryCreateNestedManyWithoutDeliveryPersonInput
    returnHistories?: ProductReturnHistoryCreateNestedManyWithoutDeliveryPersonInput
    shopOrders?: ShopOrderCreateNestedManyWithoutDeliveryPersonInput
  }

  export type DeliveryPersonUncheckedCreateInput = {
    id?: string
    name: string
    image?: string | null
    phoneNumber: string
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle?: string | null
    productDeliveries?: ProductDeliveryUncheckedCreateNestedManyWithoutDeliveryPersonInput
    returnHistories?: ProductReturnHistoryUncheckedCreateNestedManyWithoutDeliveryPersonInput
    shopOrders?: ShopOrderUncheckedCreateNestedManyWithoutDeliveryPersonInput
  }

  export type DeliveryPersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    productDeliveries?: ProductDeliveryUpdateManyWithoutDeliveryPersonNestedInput
    returnHistories?: ProductReturnHistoryUpdateManyWithoutDeliveryPersonNestedInput
    shopOrders?: ShopOrderUpdateManyWithoutDeliveryPersonNestedInput
  }

  export type DeliveryPersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    productDeliveries?: ProductDeliveryUncheckedUpdateManyWithoutDeliveryPersonNestedInput
    returnHistories?: ProductReturnHistoryUncheckedUpdateManyWithoutDeliveryPersonNestedInput
    shopOrders?: ShopOrderUncheckedUpdateManyWithoutDeliveryPersonNestedInput
  }

  export type DeliveryPersonCreateManyInput = {
    id?: string
    name: string
    image?: string | null
    phoneNumber: string
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle?: string | null
  }

  export type DeliveryPersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryPersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShopCreateInput = {
    id?: string
    name: string
    address: string
    is_active: boolean
    email: string
    phone_number: string
    returnHistories?: ProductReturnHistoryCreateNestedManyWithoutShopInput
    shopOrders?: ShopOrderCreateNestedManyWithoutShopInput
    productDelivery?: ProductDeliveryCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    is_active: boolean
    email: string
    phone_number: string
    returnHistories?: ProductReturnHistoryUncheckedCreateNestedManyWithoutShopInput
    shopOrders?: ShopOrderUncheckedCreateNestedManyWithoutShopInput
    productDelivery?: ProductDeliveryUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    returnHistories?: ProductReturnHistoryUpdateManyWithoutShopNestedInput
    shopOrders?: ShopOrderUpdateManyWithoutShopNestedInput
    productDelivery?: ProductDeliveryUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    returnHistories?: ProductReturnHistoryUncheckedUpdateManyWithoutShopNestedInput
    shopOrders?: ShopOrderUncheckedUpdateManyWithoutShopNestedInput
    productDelivery?: ProductDeliveryUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateManyInput = {
    id?: string
    name: string
    address: string
    is_active: boolean
    email: string
    phone_number: string
  }

  export type ShopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type ShopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
  }

  export type ProductRemainingCreateInput = {
    id?: string
    pieces: number
    is_delivered: boolean
    created_at?: Date | string
    product: ProductCreateNestedOneWithoutRemainingProductsInput
  }

  export type ProductRemainingUncheckedCreateInput = {
    id?: string
    productId: string
    pieces: number
    is_delivered: boolean
    created_at?: Date | string
  }

  export type ProductRemainingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutRemainingProductsNestedInput
  }

  export type ProductRemainingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductRemainingCreateManyInput = {
    id?: string
    productId: string
    pieces: number
    is_delivered: boolean
    created_at?: Date | string
  }

  export type ProductRemainingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductRemainingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductReturnHistoryCreateInput = {
    id?: string
    pieces: number
    unitPrice?: number | null
    totalPrice?: number | null
    created_at?: Date | string
    signature: string
    product: ProductCreateNestedOneWithoutReturnHistoriesInput
    shop: ShopCreateNestedOneWithoutReturnHistoriesInput
    deliveryPerson: DeliveryPersonCreateNestedOneWithoutReturnHistoriesInput
  }

  export type ProductReturnHistoryUncheckedCreateInput = {
    id?: string
    productId: string
    pieces: number
    unitPrice?: number | null
    totalPrice?: number | null
    shopId: string
    created_at?: Date | string
    deliveryPersonId: string
    signature: string
  }

  export type ProductReturnHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutReturnHistoriesNestedInput
    shop?: ShopUpdateOneRequiredWithoutReturnHistoriesNestedInput
    deliveryPerson?: DeliveryPersonUpdateOneRequiredWithoutReturnHistoriesNestedInput
  }

  export type ProductReturnHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    shopId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryPersonId?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
  }

  export type ProductReturnHistoryCreateManyInput = {
    id?: string
    productId: string
    pieces: number
    unitPrice?: number | null
    totalPrice?: number | null
    shopId: string
    created_at?: Date | string
    deliveryPersonId: string
    signature: string
  }

  export type ProductReturnHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
  }

  export type ProductReturnHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    shopId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryPersonId?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
  }

  export type ProductStockCreateInput = {
    id?: string
    pieces: number
    is_delivered: boolean
    created_at?: Date | string
    product: ProductCreateNestedOneWithoutStockRecordsInput
  }

  export type ProductStockUncheckedCreateInput = {
    id?: string
    productId: string
    pieces: number
    is_delivered: boolean
    created_at?: Date | string
  }

  export type ProductStockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutStockRecordsNestedInput
  }

  export type ProductStockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductStockCreateManyInput = {
    id?: string
    productId: string
    pieces: number
    is_delivered: boolean
    created_at?: Date | string
  }

  export type ProductStockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductStockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopOrderCreateInput = {
    id?: string
    pieces: number
    created_at?: Date | string
    status?: $Enums.OrderStatus
    shop: ShopCreateNestedOneWithoutShopOrdersInput
    product: ProductCreateNestedOneWithoutShopOrdersInput
    deliveryPerson?: DeliveryPersonCreateNestedOneWithoutShopOrdersInput
  }

  export type ShopOrderUncheckedCreateInput = {
    id?: string
    shopId: string
    productId: string
    pieces: number
    deliveredPersonId?: string | null
    created_at?: Date | string
    status?: $Enums.OrderStatus
  }

  export type ShopOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shop?: ShopUpdateOneRequiredWithoutShopOrdersNestedInput
    product?: ProductUpdateOneRequiredWithoutShopOrdersNestedInput
    deliveryPerson?: DeliveryPersonUpdateOneWithoutShopOrdersNestedInput
  }

  export type ShopOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    deliveredPersonId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  }

  export type ShopOrderCreateManyInput = {
    id?: string
    shopId: string
    productId: string
    pieces: number
    deliveredPersonId?: string | null
    created_at?: Date | string
    status?: $Enums.OrderStatus
  }

  export type ShopOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  }

  export type ShopOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    deliveredPersonId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyLocation?: SortOrder
    companyNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyLocation?: SortOrder
    companyNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyLocation?: SortOrder
    companyNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProductDeliveryListRelationFilter = {
    every?: ProductDeliveryWhereInput
    some?: ProductDeliveryWhereInput
    none?: ProductDeliveryWhereInput
  }

  export type ProductRemainingListRelationFilter = {
    every?: ProductRemainingWhereInput
    some?: ProductRemainingWhereInput
    none?: ProductRemainingWhereInput
  }

  export type ProductStockListRelationFilter = {
    every?: ProductStockWhereInput
    some?: ProductStockWhereInput
    none?: ProductStockWhereInput
  }

  export type ProductReturnHistoryListRelationFilter = {
    every?: ProductReturnHistoryWhereInput
    some?: ProductReturnHistoryWhereInput
    none?: ProductReturnHistoryWhereInput
  }

  export type ShopOrderListRelationFilter = {
    every?: ShopOrderWhereInput
    some?: ShopOrderWhereInput
    none?: ShopOrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductDeliveryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductRemainingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductStockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductReturnHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    stock?: SortOrder
    ingredient?: SortOrder
    barcode?: SortOrder
    price?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageURL?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    stock?: SortOrder
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    stock?: SortOrder
    ingredient?: SortOrder
    barcode?: SortOrder
    price?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageURL?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    stock?: SortOrder
    ingredient?: SortOrder
    barcode?: SortOrder
    price?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageURL?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    stock?: SortOrder
    price?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTransactionEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionEnum | EnumTransactionEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionEnum[] | ListEnumTransactionEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionEnum[] | ListEnumTransactionEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionEnumFilter<$PrismaModel> | $Enums.TransactionEnum
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ShopScalarRelationFilter = {
    is?: ShopWhereInput
    isNot?: ShopWhereInput
  }

  export type DeliveryPersonScalarRelationFilter = {
    is?: DeliveryPersonWhereInput
    isNot?: DeliveryPersonWhereInput
  }

  export type ProductDeliveryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    shopId?: SortOrder
    deliveryPersonId?: SortOrder
    total_price?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    productType?: SortOrder
    transaction_type?: SortOrder
    created_at?: SortOrder
    signature?: SortOrder
  }

  export type ProductDeliveryAvgOrderByAggregateInput = {
    total_price?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
  }

  export type ProductDeliveryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    shopId?: SortOrder
    deliveryPersonId?: SortOrder
    total_price?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    productType?: SortOrder
    transaction_type?: SortOrder
    created_at?: SortOrder
    signature?: SortOrder
  }

  export type ProductDeliveryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    shopId?: SortOrder
    deliveryPersonId?: SortOrder
    total_price?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    productType?: SortOrder
    transaction_type?: SortOrder
    created_at?: SortOrder
    signature?: SortOrder
  }

  export type ProductDeliverySumOrderByAggregateInput = {
    total_price?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
  }

  export type EnumTransactionEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionEnum | EnumTransactionEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionEnum[] | ListEnumTransactionEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionEnum[] | ListEnumTransactionEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionEnumWithAggregatesFilter<$PrismaModel> | $Enums.TransactionEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionEnumFilter<$PrismaModel>
    _max?: NestedEnumTransactionEnumFilter<$PrismaModel>
  }

  export type DeliveryPersonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicle?: SortOrder
  }

  export type DeliveryPersonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicle?: SortOrder
  }

  export type DeliveryPersonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    phoneNumber?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicle?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ShopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    is_active?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    is_active?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    is_active?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProductRemainingCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    is_delivered?: SortOrder
    created_at?: SortOrder
  }

  export type ProductRemainingAvgOrderByAggregateInput = {
    pieces?: SortOrder
  }

  export type ProductRemainingMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    is_delivered?: SortOrder
    created_at?: SortOrder
  }

  export type ProductRemainingMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    is_delivered?: SortOrder
    created_at?: SortOrder
  }

  export type ProductRemainingSumOrderByAggregateInput = {
    pieces?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductReturnHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    shopId?: SortOrder
    created_at?: SortOrder
    deliveryPersonId?: SortOrder
    signature?: SortOrder
  }

  export type ProductReturnHistoryAvgOrderByAggregateInput = {
    pieces?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type ProductReturnHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    shopId?: SortOrder
    created_at?: SortOrder
    deliveryPersonId?: SortOrder
    signature?: SortOrder
  }

  export type ProductReturnHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
    shopId?: SortOrder
    created_at?: SortOrder
    deliveryPersonId?: SortOrder
    signature?: SortOrder
  }

  export type ProductReturnHistorySumOrderByAggregateInput = {
    pieces?: SortOrder
    unitPrice?: SortOrder
    totalPrice?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProductStockCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    is_delivered?: SortOrder
    created_at?: SortOrder
  }

  export type ProductStockAvgOrderByAggregateInput = {
    pieces?: SortOrder
  }

  export type ProductStockMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    is_delivered?: SortOrder
    created_at?: SortOrder
  }

  export type ProductStockMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    is_delivered?: SortOrder
    created_at?: SortOrder
  }

  export type ProductStockSumOrderByAggregateInput = {
    pieces?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type DeliveryPersonNullableScalarRelationFilter = {
    is?: DeliveryPersonWhereInput | null
    isNot?: DeliveryPersonWhereInput | null
  }

  export type ShopOrderCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    deliveredPersonId?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type ShopOrderAvgOrderByAggregateInput = {
    pieces?: SortOrder
  }

  export type ShopOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    deliveredPersonId?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type ShopOrderMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    productId?: SortOrder
    pieces?: SortOrder
    deliveredPersonId?: SortOrder
    created_at?: SortOrder
    status?: SortOrder
  }

  export type ShopOrderSumOrderByAggregateInput = {
    pieces?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductDeliveryCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductDeliveryCreateWithoutProductInput, ProductDeliveryUncheckedCreateWithoutProductInput> | ProductDeliveryCreateWithoutProductInput[] | ProductDeliveryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDeliveryCreateOrConnectWithoutProductInput | ProductDeliveryCreateOrConnectWithoutProductInput[]
    createMany?: ProductDeliveryCreateManyProductInputEnvelope
    connect?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
  }

  export type ProductRemainingCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductRemainingCreateWithoutProductInput, ProductRemainingUncheckedCreateWithoutProductInput> | ProductRemainingCreateWithoutProductInput[] | ProductRemainingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductRemainingCreateOrConnectWithoutProductInput | ProductRemainingCreateOrConnectWithoutProductInput[]
    createMany?: ProductRemainingCreateManyProductInputEnvelope
    connect?: ProductRemainingWhereUniqueInput | ProductRemainingWhereUniqueInput[]
  }

  export type ProductStockCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductStockCreateWithoutProductInput, ProductStockUncheckedCreateWithoutProductInput> | ProductStockCreateWithoutProductInput[] | ProductStockUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutProductInput | ProductStockCreateOrConnectWithoutProductInput[]
    createMany?: ProductStockCreateManyProductInputEnvelope
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
  }

  export type ProductReturnHistoryCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductReturnHistoryCreateWithoutProductInput, ProductReturnHistoryUncheckedCreateWithoutProductInput> | ProductReturnHistoryCreateWithoutProductInput[] | ProductReturnHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductReturnHistoryCreateOrConnectWithoutProductInput | ProductReturnHistoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductReturnHistoryCreateManyProductInputEnvelope
    connect?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
  }

  export type ShopOrderCreateNestedManyWithoutProductInput = {
    create?: XOR<ShopOrderCreateWithoutProductInput, ShopOrderUncheckedCreateWithoutProductInput> | ShopOrderCreateWithoutProductInput[] | ShopOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ShopOrderCreateOrConnectWithoutProductInput | ShopOrderCreateOrConnectWithoutProductInput[]
    createMany?: ShopOrderCreateManyProductInputEnvelope
    connect?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
  }

  export type ProductDeliveryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductDeliveryCreateWithoutProductInput, ProductDeliveryUncheckedCreateWithoutProductInput> | ProductDeliveryCreateWithoutProductInput[] | ProductDeliveryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDeliveryCreateOrConnectWithoutProductInput | ProductDeliveryCreateOrConnectWithoutProductInput[]
    createMany?: ProductDeliveryCreateManyProductInputEnvelope
    connect?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
  }

  export type ProductRemainingUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductRemainingCreateWithoutProductInput, ProductRemainingUncheckedCreateWithoutProductInput> | ProductRemainingCreateWithoutProductInput[] | ProductRemainingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductRemainingCreateOrConnectWithoutProductInput | ProductRemainingCreateOrConnectWithoutProductInput[]
    createMany?: ProductRemainingCreateManyProductInputEnvelope
    connect?: ProductRemainingWhereUniqueInput | ProductRemainingWhereUniqueInput[]
  }

  export type ProductStockUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductStockCreateWithoutProductInput, ProductStockUncheckedCreateWithoutProductInput> | ProductStockCreateWithoutProductInput[] | ProductStockUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutProductInput | ProductStockCreateOrConnectWithoutProductInput[]
    createMany?: ProductStockCreateManyProductInputEnvelope
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
  }

  export type ProductReturnHistoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductReturnHistoryCreateWithoutProductInput, ProductReturnHistoryUncheckedCreateWithoutProductInput> | ProductReturnHistoryCreateWithoutProductInput[] | ProductReturnHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductReturnHistoryCreateOrConnectWithoutProductInput | ProductReturnHistoryCreateOrConnectWithoutProductInput[]
    createMany?: ProductReturnHistoryCreateManyProductInputEnvelope
    connect?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
  }

  export type ShopOrderUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ShopOrderCreateWithoutProductInput, ShopOrderUncheckedCreateWithoutProductInput> | ShopOrderCreateWithoutProductInput[] | ShopOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ShopOrderCreateOrConnectWithoutProductInput | ShopOrderCreateOrConnectWithoutProductInput[]
    createMany?: ShopOrderCreateManyProductInputEnvelope
    connect?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProductDeliveryUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductDeliveryCreateWithoutProductInput, ProductDeliveryUncheckedCreateWithoutProductInput> | ProductDeliveryCreateWithoutProductInput[] | ProductDeliveryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDeliveryCreateOrConnectWithoutProductInput | ProductDeliveryCreateOrConnectWithoutProductInput[]
    upsert?: ProductDeliveryUpsertWithWhereUniqueWithoutProductInput | ProductDeliveryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductDeliveryCreateManyProductInputEnvelope
    set?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    disconnect?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    delete?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    connect?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    update?: ProductDeliveryUpdateWithWhereUniqueWithoutProductInput | ProductDeliveryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductDeliveryUpdateManyWithWhereWithoutProductInput | ProductDeliveryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductDeliveryScalarWhereInput | ProductDeliveryScalarWhereInput[]
  }

  export type ProductRemainingUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductRemainingCreateWithoutProductInput, ProductRemainingUncheckedCreateWithoutProductInput> | ProductRemainingCreateWithoutProductInput[] | ProductRemainingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductRemainingCreateOrConnectWithoutProductInput | ProductRemainingCreateOrConnectWithoutProductInput[]
    upsert?: ProductRemainingUpsertWithWhereUniqueWithoutProductInput | ProductRemainingUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductRemainingCreateManyProductInputEnvelope
    set?: ProductRemainingWhereUniqueInput | ProductRemainingWhereUniqueInput[]
    disconnect?: ProductRemainingWhereUniqueInput | ProductRemainingWhereUniqueInput[]
    delete?: ProductRemainingWhereUniqueInput | ProductRemainingWhereUniqueInput[]
    connect?: ProductRemainingWhereUniqueInput | ProductRemainingWhereUniqueInput[]
    update?: ProductRemainingUpdateWithWhereUniqueWithoutProductInput | ProductRemainingUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductRemainingUpdateManyWithWhereWithoutProductInput | ProductRemainingUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductRemainingScalarWhereInput | ProductRemainingScalarWhereInput[]
  }

  export type ProductStockUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductStockCreateWithoutProductInput, ProductStockUncheckedCreateWithoutProductInput> | ProductStockCreateWithoutProductInput[] | ProductStockUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutProductInput | ProductStockCreateOrConnectWithoutProductInput[]
    upsert?: ProductStockUpsertWithWhereUniqueWithoutProductInput | ProductStockUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductStockCreateManyProductInputEnvelope
    set?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    disconnect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    delete?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    update?: ProductStockUpdateWithWhereUniqueWithoutProductInput | ProductStockUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductStockUpdateManyWithWhereWithoutProductInput | ProductStockUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
  }

  export type ProductReturnHistoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductReturnHistoryCreateWithoutProductInput, ProductReturnHistoryUncheckedCreateWithoutProductInput> | ProductReturnHistoryCreateWithoutProductInput[] | ProductReturnHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductReturnHistoryCreateOrConnectWithoutProductInput | ProductReturnHistoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductReturnHistoryUpsertWithWhereUniqueWithoutProductInput | ProductReturnHistoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductReturnHistoryCreateManyProductInputEnvelope
    set?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    disconnect?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    delete?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    connect?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    update?: ProductReturnHistoryUpdateWithWhereUniqueWithoutProductInput | ProductReturnHistoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductReturnHistoryUpdateManyWithWhereWithoutProductInput | ProductReturnHistoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductReturnHistoryScalarWhereInput | ProductReturnHistoryScalarWhereInput[]
  }

  export type ShopOrderUpdateManyWithoutProductNestedInput = {
    create?: XOR<ShopOrderCreateWithoutProductInput, ShopOrderUncheckedCreateWithoutProductInput> | ShopOrderCreateWithoutProductInput[] | ShopOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ShopOrderCreateOrConnectWithoutProductInput | ShopOrderCreateOrConnectWithoutProductInput[]
    upsert?: ShopOrderUpsertWithWhereUniqueWithoutProductInput | ShopOrderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ShopOrderCreateManyProductInputEnvelope
    set?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    disconnect?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    delete?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    connect?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    update?: ShopOrderUpdateWithWhereUniqueWithoutProductInput | ShopOrderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ShopOrderUpdateManyWithWhereWithoutProductInput | ShopOrderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ShopOrderScalarWhereInput | ShopOrderScalarWhereInput[]
  }

  export type ProductDeliveryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductDeliveryCreateWithoutProductInput, ProductDeliveryUncheckedCreateWithoutProductInput> | ProductDeliveryCreateWithoutProductInput[] | ProductDeliveryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductDeliveryCreateOrConnectWithoutProductInput | ProductDeliveryCreateOrConnectWithoutProductInput[]
    upsert?: ProductDeliveryUpsertWithWhereUniqueWithoutProductInput | ProductDeliveryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductDeliveryCreateManyProductInputEnvelope
    set?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    disconnect?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    delete?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    connect?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    update?: ProductDeliveryUpdateWithWhereUniqueWithoutProductInput | ProductDeliveryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductDeliveryUpdateManyWithWhereWithoutProductInput | ProductDeliveryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductDeliveryScalarWhereInput | ProductDeliveryScalarWhereInput[]
  }

  export type ProductRemainingUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductRemainingCreateWithoutProductInput, ProductRemainingUncheckedCreateWithoutProductInput> | ProductRemainingCreateWithoutProductInput[] | ProductRemainingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductRemainingCreateOrConnectWithoutProductInput | ProductRemainingCreateOrConnectWithoutProductInput[]
    upsert?: ProductRemainingUpsertWithWhereUniqueWithoutProductInput | ProductRemainingUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductRemainingCreateManyProductInputEnvelope
    set?: ProductRemainingWhereUniqueInput | ProductRemainingWhereUniqueInput[]
    disconnect?: ProductRemainingWhereUniqueInput | ProductRemainingWhereUniqueInput[]
    delete?: ProductRemainingWhereUniqueInput | ProductRemainingWhereUniqueInput[]
    connect?: ProductRemainingWhereUniqueInput | ProductRemainingWhereUniqueInput[]
    update?: ProductRemainingUpdateWithWhereUniqueWithoutProductInput | ProductRemainingUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductRemainingUpdateManyWithWhereWithoutProductInput | ProductRemainingUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductRemainingScalarWhereInput | ProductRemainingScalarWhereInput[]
  }

  export type ProductStockUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductStockCreateWithoutProductInput, ProductStockUncheckedCreateWithoutProductInput> | ProductStockCreateWithoutProductInput[] | ProductStockUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductStockCreateOrConnectWithoutProductInput | ProductStockCreateOrConnectWithoutProductInput[]
    upsert?: ProductStockUpsertWithWhereUniqueWithoutProductInput | ProductStockUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductStockCreateManyProductInputEnvelope
    set?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    disconnect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    delete?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    connect?: ProductStockWhereUniqueInput | ProductStockWhereUniqueInput[]
    update?: ProductStockUpdateWithWhereUniqueWithoutProductInput | ProductStockUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductStockUpdateManyWithWhereWithoutProductInput | ProductStockUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
  }

  export type ProductReturnHistoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductReturnHistoryCreateWithoutProductInput, ProductReturnHistoryUncheckedCreateWithoutProductInput> | ProductReturnHistoryCreateWithoutProductInput[] | ProductReturnHistoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductReturnHistoryCreateOrConnectWithoutProductInput | ProductReturnHistoryCreateOrConnectWithoutProductInput[]
    upsert?: ProductReturnHistoryUpsertWithWhereUniqueWithoutProductInput | ProductReturnHistoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductReturnHistoryCreateManyProductInputEnvelope
    set?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    disconnect?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    delete?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    connect?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    update?: ProductReturnHistoryUpdateWithWhereUniqueWithoutProductInput | ProductReturnHistoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductReturnHistoryUpdateManyWithWhereWithoutProductInput | ProductReturnHistoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductReturnHistoryScalarWhereInput | ProductReturnHistoryScalarWhereInput[]
  }

  export type ShopOrderUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ShopOrderCreateWithoutProductInput, ShopOrderUncheckedCreateWithoutProductInput> | ShopOrderCreateWithoutProductInput[] | ShopOrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ShopOrderCreateOrConnectWithoutProductInput | ShopOrderCreateOrConnectWithoutProductInput[]
    upsert?: ShopOrderUpsertWithWhereUniqueWithoutProductInput | ShopOrderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ShopOrderCreateManyProductInputEnvelope
    set?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    disconnect?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    delete?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    connect?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    update?: ShopOrderUpdateWithWhereUniqueWithoutProductInput | ShopOrderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ShopOrderUpdateManyWithWhereWithoutProductInput | ShopOrderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ShopOrderScalarWhereInput | ShopOrderScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutProductDeliveriesInput = {
    create?: XOR<ProductCreateWithoutProductDeliveriesInput, ProductUncheckedCreateWithoutProductDeliveriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductDeliveriesInput
    connect?: ProductWhereUniqueInput
  }

  export type ShopCreateNestedOneWithoutProductDeliveryInput = {
    create?: XOR<ShopCreateWithoutProductDeliveryInput, ShopUncheckedCreateWithoutProductDeliveryInput>
    connectOrCreate?: ShopCreateOrConnectWithoutProductDeliveryInput
    connect?: ShopWhereUniqueInput
  }

  export type DeliveryPersonCreateNestedOneWithoutProductDeliveriesInput = {
    create?: XOR<DeliveryPersonCreateWithoutProductDeliveriesInput, DeliveryPersonUncheckedCreateWithoutProductDeliveriesInput>
    connectOrCreate?: DeliveryPersonCreateOrConnectWithoutProductDeliveriesInput
    connect?: DeliveryPersonWhereUniqueInput
  }

  export type EnumTransactionEnumFieldUpdateOperationsInput = {
    set?: $Enums.TransactionEnum
  }

  export type ProductUpdateOneRequiredWithoutProductDeliveriesNestedInput = {
    create?: XOR<ProductCreateWithoutProductDeliveriesInput, ProductUncheckedCreateWithoutProductDeliveriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutProductDeliveriesInput
    upsert?: ProductUpsertWithoutProductDeliveriesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutProductDeliveriesInput, ProductUpdateWithoutProductDeliveriesInput>, ProductUncheckedUpdateWithoutProductDeliveriesInput>
  }

  export type ShopUpdateOneRequiredWithoutProductDeliveryNestedInput = {
    create?: XOR<ShopCreateWithoutProductDeliveryInput, ShopUncheckedCreateWithoutProductDeliveryInput>
    connectOrCreate?: ShopCreateOrConnectWithoutProductDeliveryInput
    upsert?: ShopUpsertWithoutProductDeliveryInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutProductDeliveryInput, ShopUpdateWithoutProductDeliveryInput>, ShopUncheckedUpdateWithoutProductDeliveryInput>
  }

  export type DeliveryPersonUpdateOneRequiredWithoutProductDeliveriesNestedInput = {
    create?: XOR<DeliveryPersonCreateWithoutProductDeliveriesInput, DeliveryPersonUncheckedCreateWithoutProductDeliveriesInput>
    connectOrCreate?: DeliveryPersonCreateOrConnectWithoutProductDeliveriesInput
    upsert?: DeliveryPersonUpsertWithoutProductDeliveriesInput
    connect?: DeliveryPersonWhereUniqueInput
    update?: XOR<XOR<DeliveryPersonUpdateToOneWithWhereWithoutProductDeliveriesInput, DeliveryPersonUpdateWithoutProductDeliveriesInput>, DeliveryPersonUncheckedUpdateWithoutProductDeliveriesInput>
  }

  export type ProductDeliveryCreateNestedManyWithoutDeliveryPersonInput = {
    create?: XOR<ProductDeliveryCreateWithoutDeliveryPersonInput, ProductDeliveryUncheckedCreateWithoutDeliveryPersonInput> | ProductDeliveryCreateWithoutDeliveryPersonInput[] | ProductDeliveryUncheckedCreateWithoutDeliveryPersonInput[]
    connectOrCreate?: ProductDeliveryCreateOrConnectWithoutDeliveryPersonInput | ProductDeliveryCreateOrConnectWithoutDeliveryPersonInput[]
    createMany?: ProductDeliveryCreateManyDeliveryPersonInputEnvelope
    connect?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
  }

  export type ProductReturnHistoryCreateNestedManyWithoutDeliveryPersonInput = {
    create?: XOR<ProductReturnHistoryCreateWithoutDeliveryPersonInput, ProductReturnHistoryUncheckedCreateWithoutDeliveryPersonInput> | ProductReturnHistoryCreateWithoutDeliveryPersonInput[] | ProductReturnHistoryUncheckedCreateWithoutDeliveryPersonInput[]
    connectOrCreate?: ProductReturnHistoryCreateOrConnectWithoutDeliveryPersonInput | ProductReturnHistoryCreateOrConnectWithoutDeliveryPersonInput[]
    createMany?: ProductReturnHistoryCreateManyDeliveryPersonInputEnvelope
    connect?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
  }

  export type ShopOrderCreateNestedManyWithoutDeliveryPersonInput = {
    create?: XOR<ShopOrderCreateWithoutDeliveryPersonInput, ShopOrderUncheckedCreateWithoutDeliveryPersonInput> | ShopOrderCreateWithoutDeliveryPersonInput[] | ShopOrderUncheckedCreateWithoutDeliveryPersonInput[]
    connectOrCreate?: ShopOrderCreateOrConnectWithoutDeliveryPersonInput | ShopOrderCreateOrConnectWithoutDeliveryPersonInput[]
    createMany?: ShopOrderCreateManyDeliveryPersonInputEnvelope
    connect?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
  }

  export type ProductDeliveryUncheckedCreateNestedManyWithoutDeliveryPersonInput = {
    create?: XOR<ProductDeliveryCreateWithoutDeliveryPersonInput, ProductDeliveryUncheckedCreateWithoutDeliveryPersonInput> | ProductDeliveryCreateWithoutDeliveryPersonInput[] | ProductDeliveryUncheckedCreateWithoutDeliveryPersonInput[]
    connectOrCreate?: ProductDeliveryCreateOrConnectWithoutDeliveryPersonInput | ProductDeliveryCreateOrConnectWithoutDeliveryPersonInput[]
    createMany?: ProductDeliveryCreateManyDeliveryPersonInputEnvelope
    connect?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
  }

  export type ProductReturnHistoryUncheckedCreateNestedManyWithoutDeliveryPersonInput = {
    create?: XOR<ProductReturnHistoryCreateWithoutDeliveryPersonInput, ProductReturnHistoryUncheckedCreateWithoutDeliveryPersonInput> | ProductReturnHistoryCreateWithoutDeliveryPersonInput[] | ProductReturnHistoryUncheckedCreateWithoutDeliveryPersonInput[]
    connectOrCreate?: ProductReturnHistoryCreateOrConnectWithoutDeliveryPersonInput | ProductReturnHistoryCreateOrConnectWithoutDeliveryPersonInput[]
    createMany?: ProductReturnHistoryCreateManyDeliveryPersonInputEnvelope
    connect?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
  }

  export type ShopOrderUncheckedCreateNestedManyWithoutDeliveryPersonInput = {
    create?: XOR<ShopOrderCreateWithoutDeliveryPersonInput, ShopOrderUncheckedCreateWithoutDeliveryPersonInput> | ShopOrderCreateWithoutDeliveryPersonInput[] | ShopOrderUncheckedCreateWithoutDeliveryPersonInput[]
    connectOrCreate?: ShopOrderCreateOrConnectWithoutDeliveryPersonInput | ShopOrderCreateOrConnectWithoutDeliveryPersonInput[]
    createMany?: ShopOrderCreateManyDeliveryPersonInputEnvelope
    connect?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
  }

  export type ProductDeliveryUpdateManyWithoutDeliveryPersonNestedInput = {
    create?: XOR<ProductDeliveryCreateWithoutDeliveryPersonInput, ProductDeliveryUncheckedCreateWithoutDeliveryPersonInput> | ProductDeliveryCreateWithoutDeliveryPersonInput[] | ProductDeliveryUncheckedCreateWithoutDeliveryPersonInput[]
    connectOrCreate?: ProductDeliveryCreateOrConnectWithoutDeliveryPersonInput | ProductDeliveryCreateOrConnectWithoutDeliveryPersonInput[]
    upsert?: ProductDeliveryUpsertWithWhereUniqueWithoutDeliveryPersonInput | ProductDeliveryUpsertWithWhereUniqueWithoutDeliveryPersonInput[]
    createMany?: ProductDeliveryCreateManyDeliveryPersonInputEnvelope
    set?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    disconnect?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    delete?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    connect?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    update?: ProductDeliveryUpdateWithWhereUniqueWithoutDeliveryPersonInput | ProductDeliveryUpdateWithWhereUniqueWithoutDeliveryPersonInput[]
    updateMany?: ProductDeliveryUpdateManyWithWhereWithoutDeliveryPersonInput | ProductDeliveryUpdateManyWithWhereWithoutDeliveryPersonInput[]
    deleteMany?: ProductDeliveryScalarWhereInput | ProductDeliveryScalarWhereInput[]
  }

  export type ProductReturnHistoryUpdateManyWithoutDeliveryPersonNestedInput = {
    create?: XOR<ProductReturnHistoryCreateWithoutDeliveryPersonInput, ProductReturnHistoryUncheckedCreateWithoutDeliveryPersonInput> | ProductReturnHistoryCreateWithoutDeliveryPersonInput[] | ProductReturnHistoryUncheckedCreateWithoutDeliveryPersonInput[]
    connectOrCreate?: ProductReturnHistoryCreateOrConnectWithoutDeliveryPersonInput | ProductReturnHistoryCreateOrConnectWithoutDeliveryPersonInput[]
    upsert?: ProductReturnHistoryUpsertWithWhereUniqueWithoutDeliveryPersonInput | ProductReturnHistoryUpsertWithWhereUniqueWithoutDeliveryPersonInput[]
    createMany?: ProductReturnHistoryCreateManyDeliveryPersonInputEnvelope
    set?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    disconnect?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    delete?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    connect?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    update?: ProductReturnHistoryUpdateWithWhereUniqueWithoutDeliveryPersonInput | ProductReturnHistoryUpdateWithWhereUniqueWithoutDeliveryPersonInput[]
    updateMany?: ProductReturnHistoryUpdateManyWithWhereWithoutDeliveryPersonInput | ProductReturnHistoryUpdateManyWithWhereWithoutDeliveryPersonInput[]
    deleteMany?: ProductReturnHistoryScalarWhereInput | ProductReturnHistoryScalarWhereInput[]
  }

  export type ShopOrderUpdateManyWithoutDeliveryPersonNestedInput = {
    create?: XOR<ShopOrderCreateWithoutDeliveryPersonInput, ShopOrderUncheckedCreateWithoutDeliveryPersonInput> | ShopOrderCreateWithoutDeliveryPersonInput[] | ShopOrderUncheckedCreateWithoutDeliveryPersonInput[]
    connectOrCreate?: ShopOrderCreateOrConnectWithoutDeliveryPersonInput | ShopOrderCreateOrConnectWithoutDeliveryPersonInput[]
    upsert?: ShopOrderUpsertWithWhereUniqueWithoutDeliveryPersonInput | ShopOrderUpsertWithWhereUniqueWithoutDeliveryPersonInput[]
    createMany?: ShopOrderCreateManyDeliveryPersonInputEnvelope
    set?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    disconnect?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    delete?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    connect?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    update?: ShopOrderUpdateWithWhereUniqueWithoutDeliveryPersonInput | ShopOrderUpdateWithWhereUniqueWithoutDeliveryPersonInput[]
    updateMany?: ShopOrderUpdateManyWithWhereWithoutDeliveryPersonInput | ShopOrderUpdateManyWithWhereWithoutDeliveryPersonInput[]
    deleteMany?: ShopOrderScalarWhereInput | ShopOrderScalarWhereInput[]
  }

  export type ProductDeliveryUncheckedUpdateManyWithoutDeliveryPersonNestedInput = {
    create?: XOR<ProductDeliveryCreateWithoutDeliveryPersonInput, ProductDeliveryUncheckedCreateWithoutDeliveryPersonInput> | ProductDeliveryCreateWithoutDeliveryPersonInput[] | ProductDeliveryUncheckedCreateWithoutDeliveryPersonInput[]
    connectOrCreate?: ProductDeliveryCreateOrConnectWithoutDeliveryPersonInput | ProductDeliveryCreateOrConnectWithoutDeliveryPersonInput[]
    upsert?: ProductDeliveryUpsertWithWhereUniqueWithoutDeliveryPersonInput | ProductDeliveryUpsertWithWhereUniqueWithoutDeliveryPersonInput[]
    createMany?: ProductDeliveryCreateManyDeliveryPersonInputEnvelope
    set?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    disconnect?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    delete?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    connect?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    update?: ProductDeliveryUpdateWithWhereUniqueWithoutDeliveryPersonInput | ProductDeliveryUpdateWithWhereUniqueWithoutDeliveryPersonInput[]
    updateMany?: ProductDeliveryUpdateManyWithWhereWithoutDeliveryPersonInput | ProductDeliveryUpdateManyWithWhereWithoutDeliveryPersonInput[]
    deleteMany?: ProductDeliveryScalarWhereInput | ProductDeliveryScalarWhereInput[]
  }

  export type ProductReturnHistoryUncheckedUpdateManyWithoutDeliveryPersonNestedInput = {
    create?: XOR<ProductReturnHistoryCreateWithoutDeliveryPersonInput, ProductReturnHistoryUncheckedCreateWithoutDeliveryPersonInput> | ProductReturnHistoryCreateWithoutDeliveryPersonInput[] | ProductReturnHistoryUncheckedCreateWithoutDeliveryPersonInput[]
    connectOrCreate?: ProductReturnHistoryCreateOrConnectWithoutDeliveryPersonInput | ProductReturnHistoryCreateOrConnectWithoutDeliveryPersonInput[]
    upsert?: ProductReturnHistoryUpsertWithWhereUniqueWithoutDeliveryPersonInput | ProductReturnHistoryUpsertWithWhereUniqueWithoutDeliveryPersonInput[]
    createMany?: ProductReturnHistoryCreateManyDeliveryPersonInputEnvelope
    set?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    disconnect?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    delete?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    connect?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    update?: ProductReturnHistoryUpdateWithWhereUniqueWithoutDeliveryPersonInput | ProductReturnHistoryUpdateWithWhereUniqueWithoutDeliveryPersonInput[]
    updateMany?: ProductReturnHistoryUpdateManyWithWhereWithoutDeliveryPersonInput | ProductReturnHistoryUpdateManyWithWhereWithoutDeliveryPersonInput[]
    deleteMany?: ProductReturnHistoryScalarWhereInput | ProductReturnHistoryScalarWhereInput[]
  }

  export type ShopOrderUncheckedUpdateManyWithoutDeliveryPersonNestedInput = {
    create?: XOR<ShopOrderCreateWithoutDeliveryPersonInput, ShopOrderUncheckedCreateWithoutDeliveryPersonInput> | ShopOrderCreateWithoutDeliveryPersonInput[] | ShopOrderUncheckedCreateWithoutDeliveryPersonInput[]
    connectOrCreate?: ShopOrderCreateOrConnectWithoutDeliveryPersonInput | ShopOrderCreateOrConnectWithoutDeliveryPersonInput[]
    upsert?: ShopOrderUpsertWithWhereUniqueWithoutDeliveryPersonInput | ShopOrderUpsertWithWhereUniqueWithoutDeliveryPersonInput[]
    createMany?: ShopOrderCreateManyDeliveryPersonInputEnvelope
    set?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    disconnect?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    delete?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    connect?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    update?: ShopOrderUpdateWithWhereUniqueWithoutDeliveryPersonInput | ShopOrderUpdateWithWhereUniqueWithoutDeliveryPersonInput[]
    updateMany?: ShopOrderUpdateManyWithWhereWithoutDeliveryPersonInput | ShopOrderUpdateManyWithWhereWithoutDeliveryPersonInput[]
    deleteMany?: ShopOrderScalarWhereInput | ShopOrderScalarWhereInput[]
  }

  export type ProductReturnHistoryCreateNestedManyWithoutShopInput = {
    create?: XOR<ProductReturnHistoryCreateWithoutShopInput, ProductReturnHistoryUncheckedCreateWithoutShopInput> | ProductReturnHistoryCreateWithoutShopInput[] | ProductReturnHistoryUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductReturnHistoryCreateOrConnectWithoutShopInput | ProductReturnHistoryCreateOrConnectWithoutShopInput[]
    createMany?: ProductReturnHistoryCreateManyShopInputEnvelope
    connect?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
  }

  export type ShopOrderCreateNestedManyWithoutShopInput = {
    create?: XOR<ShopOrderCreateWithoutShopInput, ShopOrderUncheckedCreateWithoutShopInput> | ShopOrderCreateWithoutShopInput[] | ShopOrderUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopOrderCreateOrConnectWithoutShopInput | ShopOrderCreateOrConnectWithoutShopInput[]
    createMany?: ShopOrderCreateManyShopInputEnvelope
    connect?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
  }

  export type ProductDeliveryCreateNestedManyWithoutShopInput = {
    create?: XOR<ProductDeliveryCreateWithoutShopInput, ProductDeliveryUncheckedCreateWithoutShopInput> | ProductDeliveryCreateWithoutShopInput[] | ProductDeliveryUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductDeliveryCreateOrConnectWithoutShopInput | ProductDeliveryCreateOrConnectWithoutShopInput[]
    createMany?: ProductDeliveryCreateManyShopInputEnvelope
    connect?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
  }

  export type ProductReturnHistoryUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ProductReturnHistoryCreateWithoutShopInput, ProductReturnHistoryUncheckedCreateWithoutShopInput> | ProductReturnHistoryCreateWithoutShopInput[] | ProductReturnHistoryUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductReturnHistoryCreateOrConnectWithoutShopInput | ProductReturnHistoryCreateOrConnectWithoutShopInput[]
    createMany?: ProductReturnHistoryCreateManyShopInputEnvelope
    connect?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
  }

  export type ShopOrderUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ShopOrderCreateWithoutShopInput, ShopOrderUncheckedCreateWithoutShopInput> | ShopOrderCreateWithoutShopInput[] | ShopOrderUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopOrderCreateOrConnectWithoutShopInput | ShopOrderCreateOrConnectWithoutShopInput[]
    createMany?: ShopOrderCreateManyShopInputEnvelope
    connect?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
  }

  export type ProductDeliveryUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ProductDeliveryCreateWithoutShopInput, ProductDeliveryUncheckedCreateWithoutShopInput> | ProductDeliveryCreateWithoutShopInput[] | ProductDeliveryUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductDeliveryCreateOrConnectWithoutShopInput | ProductDeliveryCreateOrConnectWithoutShopInput[]
    createMany?: ProductDeliveryCreateManyShopInputEnvelope
    connect?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductReturnHistoryUpdateManyWithoutShopNestedInput = {
    create?: XOR<ProductReturnHistoryCreateWithoutShopInput, ProductReturnHistoryUncheckedCreateWithoutShopInput> | ProductReturnHistoryCreateWithoutShopInput[] | ProductReturnHistoryUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductReturnHistoryCreateOrConnectWithoutShopInput | ProductReturnHistoryCreateOrConnectWithoutShopInput[]
    upsert?: ProductReturnHistoryUpsertWithWhereUniqueWithoutShopInput | ProductReturnHistoryUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ProductReturnHistoryCreateManyShopInputEnvelope
    set?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    disconnect?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    delete?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    connect?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    update?: ProductReturnHistoryUpdateWithWhereUniqueWithoutShopInput | ProductReturnHistoryUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ProductReturnHistoryUpdateManyWithWhereWithoutShopInput | ProductReturnHistoryUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ProductReturnHistoryScalarWhereInput | ProductReturnHistoryScalarWhereInput[]
  }

  export type ShopOrderUpdateManyWithoutShopNestedInput = {
    create?: XOR<ShopOrderCreateWithoutShopInput, ShopOrderUncheckedCreateWithoutShopInput> | ShopOrderCreateWithoutShopInput[] | ShopOrderUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopOrderCreateOrConnectWithoutShopInput | ShopOrderCreateOrConnectWithoutShopInput[]
    upsert?: ShopOrderUpsertWithWhereUniqueWithoutShopInput | ShopOrderUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ShopOrderCreateManyShopInputEnvelope
    set?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    disconnect?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    delete?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    connect?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    update?: ShopOrderUpdateWithWhereUniqueWithoutShopInput | ShopOrderUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ShopOrderUpdateManyWithWhereWithoutShopInput | ShopOrderUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ShopOrderScalarWhereInput | ShopOrderScalarWhereInput[]
  }

  export type ProductDeliveryUpdateManyWithoutShopNestedInput = {
    create?: XOR<ProductDeliveryCreateWithoutShopInput, ProductDeliveryUncheckedCreateWithoutShopInput> | ProductDeliveryCreateWithoutShopInput[] | ProductDeliveryUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductDeliveryCreateOrConnectWithoutShopInput | ProductDeliveryCreateOrConnectWithoutShopInput[]
    upsert?: ProductDeliveryUpsertWithWhereUniqueWithoutShopInput | ProductDeliveryUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ProductDeliveryCreateManyShopInputEnvelope
    set?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    disconnect?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    delete?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    connect?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    update?: ProductDeliveryUpdateWithWhereUniqueWithoutShopInput | ProductDeliveryUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ProductDeliveryUpdateManyWithWhereWithoutShopInput | ProductDeliveryUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ProductDeliveryScalarWhereInput | ProductDeliveryScalarWhereInput[]
  }

  export type ProductReturnHistoryUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ProductReturnHistoryCreateWithoutShopInput, ProductReturnHistoryUncheckedCreateWithoutShopInput> | ProductReturnHistoryCreateWithoutShopInput[] | ProductReturnHistoryUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductReturnHistoryCreateOrConnectWithoutShopInput | ProductReturnHistoryCreateOrConnectWithoutShopInput[]
    upsert?: ProductReturnHistoryUpsertWithWhereUniqueWithoutShopInput | ProductReturnHistoryUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ProductReturnHistoryCreateManyShopInputEnvelope
    set?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    disconnect?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    delete?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    connect?: ProductReturnHistoryWhereUniqueInput | ProductReturnHistoryWhereUniqueInput[]
    update?: ProductReturnHistoryUpdateWithWhereUniqueWithoutShopInput | ProductReturnHistoryUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ProductReturnHistoryUpdateManyWithWhereWithoutShopInput | ProductReturnHistoryUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ProductReturnHistoryScalarWhereInput | ProductReturnHistoryScalarWhereInput[]
  }

  export type ShopOrderUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ShopOrderCreateWithoutShopInput, ShopOrderUncheckedCreateWithoutShopInput> | ShopOrderCreateWithoutShopInput[] | ShopOrderUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ShopOrderCreateOrConnectWithoutShopInput | ShopOrderCreateOrConnectWithoutShopInput[]
    upsert?: ShopOrderUpsertWithWhereUniqueWithoutShopInput | ShopOrderUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ShopOrderCreateManyShopInputEnvelope
    set?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    disconnect?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    delete?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    connect?: ShopOrderWhereUniqueInput | ShopOrderWhereUniqueInput[]
    update?: ShopOrderUpdateWithWhereUniqueWithoutShopInput | ShopOrderUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ShopOrderUpdateManyWithWhereWithoutShopInput | ShopOrderUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ShopOrderScalarWhereInput | ShopOrderScalarWhereInput[]
  }

  export type ProductDeliveryUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ProductDeliveryCreateWithoutShopInput, ProductDeliveryUncheckedCreateWithoutShopInput> | ProductDeliveryCreateWithoutShopInput[] | ProductDeliveryUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductDeliveryCreateOrConnectWithoutShopInput | ProductDeliveryCreateOrConnectWithoutShopInput[]
    upsert?: ProductDeliveryUpsertWithWhereUniqueWithoutShopInput | ProductDeliveryUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ProductDeliveryCreateManyShopInputEnvelope
    set?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    disconnect?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    delete?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    connect?: ProductDeliveryWhereUniqueInput | ProductDeliveryWhereUniqueInput[]
    update?: ProductDeliveryUpdateWithWhereUniqueWithoutShopInput | ProductDeliveryUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ProductDeliveryUpdateManyWithWhereWithoutShopInput | ProductDeliveryUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ProductDeliveryScalarWhereInput | ProductDeliveryScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutRemainingProductsInput = {
    create?: XOR<ProductCreateWithoutRemainingProductsInput, ProductUncheckedCreateWithoutRemainingProductsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRemainingProductsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutRemainingProductsNestedInput = {
    create?: XOR<ProductCreateWithoutRemainingProductsInput, ProductUncheckedCreateWithoutRemainingProductsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutRemainingProductsInput
    upsert?: ProductUpsertWithoutRemainingProductsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutRemainingProductsInput, ProductUpdateWithoutRemainingProductsInput>, ProductUncheckedUpdateWithoutRemainingProductsInput>
  }

  export type ProductCreateNestedOneWithoutReturnHistoriesInput = {
    create?: XOR<ProductCreateWithoutReturnHistoriesInput, ProductUncheckedCreateWithoutReturnHistoriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReturnHistoriesInput
    connect?: ProductWhereUniqueInput
  }

  export type ShopCreateNestedOneWithoutReturnHistoriesInput = {
    create?: XOR<ShopCreateWithoutReturnHistoriesInput, ShopUncheckedCreateWithoutReturnHistoriesInput>
    connectOrCreate?: ShopCreateOrConnectWithoutReturnHistoriesInput
    connect?: ShopWhereUniqueInput
  }

  export type DeliveryPersonCreateNestedOneWithoutReturnHistoriesInput = {
    create?: XOR<DeliveryPersonCreateWithoutReturnHistoriesInput, DeliveryPersonUncheckedCreateWithoutReturnHistoriesInput>
    connectOrCreate?: DeliveryPersonCreateOrConnectWithoutReturnHistoriesInput
    connect?: DeliveryPersonWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneRequiredWithoutReturnHistoriesNestedInput = {
    create?: XOR<ProductCreateWithoutReturnHistoriesInput, ProductUncheckedCreateWithoutReturnHistoriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReturnHistoriesInput
    upsert?: ProductUpsertWithoutReturnHistoriesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutReturnHistoriesInput, ProductUpdateWithoutReturnHistoriesInput>, ProductUncheckedUpdateWithoutReturnHistoriesInput>
  }

  export type ShopUpdateOneRequiredWithoutReturnHistoriesNestedInput = {
    create?: XOR<ShopCreateWithoutReturnHistoriesInput, ShopUncheckedCreateWithoutReturnHistoriesInput>
    connectOrCreate?: ShopCreateOrConnectWithoutReturnHistoriesInput
    upsert?: ShopUpsertWithoutReturnHistoriesInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutReturnHistoriesInput, ShopUpdateWithoutReturnHistoriesInput>, ShopUncheckedUpdateWithoutReturnHistoriesInput>
  }

  export type DeliveryPersonUpdateOneRequiredWithoutReturnHistoriesNestedInput = {
    create?: XOR<DeliveryPersonCreateWithoutReturnHistoriesInput, DeliveryPersonUncheckedCreateWithoutReturnHistoriesInput>
    connectOrCreate?: DeliveryPersonCreateOrConnectWithoutReturnHistoriesInput
    upsert?: DeliveryPersonUpsertWithoutReturnHistoriesInput
    connect?: DeliveryPersonWhereUniqueInput
    update?: XOR<XOR<DeliveryPersonUpdateToOneWithWhereWithoutReturnHistoriesInput, DeliveryPersonUpdateWithoutReturnHistoriesInput>, DeliveryPersonUncheckedUpdateWithoutReturnHistoriesInput>
  }

  export type ProductCreateNestedOneWithoutStockRecordsInput = {
    create?: XOR<ProductCreateWithoutStockRecordsInput, ProductUncheckedCreateWithoutStockRecordsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockRecordsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutStockRecordsNestedInput = {
    create?: XOR<ProductCreateWithoutStockRecordsInput, ProductUncheckedCreateWithoutStockRecordsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockRecordsInput
    upsert?: ProductUpsertWithoutStockRecordsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutStockRecordsInput, ProductUpdateWithoutStockRecordsInput>, ProductUncheckedUpdateWithoutStockRecordsInput>
  }

  export type ShopCreateNestedOneWithoutShopOrdersInput = {
    create?: XOR<ShopCreateWithoutShopOrdersInput, ShopUncheckedCreateWithoutShopOrdersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutShopOrdersInput
    connect?: ShopWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutShopOrdersInput = {
    create?: XOR<ProductCreateWithoutShopOrdersInput, ProductUncheckedCreateWithoutShopOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutShopOrdersInput
    connect?: ProductWhereUniqueInput
  }

  export type DeliveryPersonCreateNestedOneWithoutShopOrdersInput = {
    create?: XOR<DeliveryPersonCreateWithoutShopOrdersInput, DeliveryPersonUncheckedCreateWithoutShopOrdersInput>
    connectOrCreate?: DeliveryPersonCreateOrConnectWithoutShopOrdersInput
    connect?: DeliveryPersonWhereUniqueInput
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type ShopUpdateOneRequiredWithoutShopOrdersNestedInput = {
    create?: XOR<ShopCreateWithoutShopOrdersInput, ShopUncheckedCreateWithoutShopOrdersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutShopOrdersInput
    upsert?: ShopUpsertWithoutShopOrdersInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutShopOrdersInput, ShopUpdateWithoutShopOrdersInput>, ShopUncheckedUpdateWithoutShopOrdersInput>
  }

  export type ProductUpdateOneRequiredWithoutShopOrdersNestedInput = {
    create?: XOR<ProductCreateWithoutShopOrdersInput, ProductUncheckedCreateWithoutShopOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutShopOrdersInput
    upsert?: ProductUpsertWithoutShopOrdersInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutShopOrdersInput, ProductUpdateWithoutShopOrdersInput>, ProductUncheckedUpdateWithoutShopOrdersInput>
  }

  export type DeliveryPersonUpdateOneWithoutShopOrdersNestedInput = {
    create?: XOR<DeliveryPersonCreateWithoutShopOrdersInput, DeliveryPersonUncheckedCreateWithoutShopOrdersInput>
    connectOrCreate?: DeliveryPersonCreateOrConnectWithoutShopOrdersInput
    upsert?: DeliveryPersonUpsertWithoutShopOrdersInput
    disconnect?: DeliveryPersonWhereInput | boolean
    delete?: DeliveryPersonWhereInput | boolean
    connect?: DeliveryPersonWhereUniqueInput
    update?: XOR<XOR<DeliveryPersonUpdateToOneWithWhereWithoutShopOrdersInput, DeliveryPersonUpdateWithoutShopOrdersInput>, DeliveryPersonUncheckedUpdateWithoutShopOrdersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumTransactionEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionEnum | EnumTransactionEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionEnum[] | ListEnumTransactionEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionEnum[] | ListEnumTransactionEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionEnumFilter<$PrismaModel> | $Enums.TransactionEnum
  }

  export type NestedEnumTransactionEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionEnum | EnumTransactionEnumFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionEnum[] | ListEnumTransactionEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionEnum[] | ListEnumTransactionEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionEnumWithAggregatesFilter<$PrismaModel> | $Enums.TransactionEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionEnumFilter<$PrismaModel>
    _max?: NestedEnumTransactionEnumFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type ProductDeliveryCreateWithoutProductInput = {
    id?: string
    total_price: number
    quantity: number
    unit_price: number
    productType: string
    transaction_type: $Enums.TransactionEnum
    created_at?: Date | string
    signature?: string | null
    shop: ShopCreateNestedOneWithoutProductDeliveryInput
    deliveryPerson: DeliveryPersonCreateNestedOneWithoutProductDeliveriesInput
  }

  export type ProductDeliveryUncheckedCreateWithoutProductInput = {
    id?: string
    shopId: string
    deliveryPersonId: string
    total_price: number
    quantity: number
    unit_price: number
    productType: string
    transaction_type: $Enums.TransactionEnum
    created_at?: Date | string
    signature?: string | null
  }

  export type ProductDeliveryCreateOrConnectWithoutProductInput = {
    where: ProductDeliveryWhereUniqueInput
    create: XOR<ProductDeliveryCreateWithoutProductInput, ProductDeliveryUncheckedCreateWithoutProductInput>
  }

  export type ProductDeliveryCreateManyProductInputEnvelope = {
    data: ProductDeliveryCreateManyProductInput | ProductDeliveryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductRemainingCreateWithoutProductInput = {
    id?: string
    pieces: number
    is_delivered: boolean
    created_at?: Date | string
  }

  export type ProductRemainingUncheckedCreateWithoutProductInput = {
    id?: string
    pieces: number
    is_delivered: boolean
    created_at?: Date | string
  }

  export type ProductRemainingCreateOrConnectWithoutProductInput = {
    where: ProductRemainingWhereUniqueInput
    create: XOR<ProductRemainingCreateWithoutProductInput, ProductRemainingUncheckedCreateWithoutProductInput>
  }

  export type ProductRemainingCreateManyProductInputEnvelope = {
    data: ProductRemainingCreateManyProductInput | ProductRemainingCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductStockCreateWithoutProductInput = {
    id?: string
    pieces: number
    is_delivered: boolean
    created_at?: Date | string
  }

  export type ProductStockUncheckedCreateWithoutProductInput = {
    id?: string
    pieces: number
    is_delivered: boolean
    created_at?: Date | string
  }

  export type ProductStockCreateOrConnectWithoutProductInput = {
    where: ProductStockWhereUniqueInput
    create: XOR<ProductStockCreateWithoutProductInput, ProductStockUncheckedCreateWithoutProductInput>
  }

  export type ProductStockCreateManyProductInputEnvelope = {
    data: ProductStockCreateManyProductInput | ProductStockCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductReturnHistoryCreateWithoutProductInput = {
    id?: string
    pieces: number
    unitPrice?: number | null
    totalPrice?: number | null
    created_at?: Date | string
    signature: string
    shop: ShopCreateNestedOneWithoutReturnHistoriesInput
    deliveryPerson: DeliveryPersonCreateNestedOneWithoutReturnHistoriesInput
  }

  export type ProductReturnHistoryUncheckedCreateWithoutProductInput = {
    id?: string
    pieces: number
    unitPrice?: number | null
    totalPrice?: number | null
    shopId: string
    created_at?: Date | string
    deliveryPersonId: string
    signature: string
  }

  export type ProductReturnHistoryCreateOrConnectWithoutProductInput = {
    where: ProductReturnHistoryWhereUniqueInput
    create: XOR<ProductReturnHistoryCreateWithoutProductInput, ProductReturnHistoryUncheckedCreateWithoutProductInput>
  }

  export type ProductReturnHistoryCreateManyProductInputEnvelope = {
    data: ProductReturnHistoryCreateManyProductInput | ProductReturnHistoryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ShopOrderCreateWithoutProductInput = {
    id?: string
    pieces: number
    created_at?: Date | string
    status?: $Enums.OrderStatus
    shop: ShopCreateNestedOneWithoutShopOrdersInput
    deliveryPerson?: DeliveryPersonCreateNestedOneWithoutShopOrdersInput
  }

  export type ShopOrderUncheckedCreateWithoutProductInput = {
    id?: string
    shopId: string
    pieces: number
    deliveredPersonId?: string | null
    created_at?: Date | string
    status?: $Enums.OrderStatus
  }

  export type ShopOrderCreateOrConnectWithoutProductInput = {
    where: ShopOrderWhereUniqueInput
    create: XOR<ShopOrderCreateWithoutProductInput, ShopOrderUncheckedCreateWithoutProductInput>
  }

  export type ShopOrderCreateManyProductInputEnvelope = {
    data: ShopOrderCreateManyProductInput | ShopOrderCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductDeliveryUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductDeliveryWhereUniqueInput
    update: XOR<ProductDeliveryUpdateWithoutProductInput, ProductDeliveryUncheckedUpdateWithoutProductInput>
    create: XOR<ProductDeliveryCreateWithoutProductInput, ProductDeliveryUncheckedCreateWithoutProductInput>
  }

  export type ProductDeliveryUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductDeliveryWhereUniqueInput
    data: XOR<ProductDeliveryUpdateWithoutProductInput, ProductDeliveryUncheckedUpdateWithoutProductInput>
  }

  export type ProductDeliveryUpdateManyWithWhereWithoutProductInput = {
    where: ProductDeliveryScalarWhereInput
    data: XOR<ProductDeliveryUpdateManyMutationInput, ProductDeliveryUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductDeliveryScalarWhereInput = {
    AND?: ProductDeliveryScalarWhereInput | ProductDeliveryScalarWhereInput[]
    OR?: ProductDeliveryScalarWhereInput[]
    NOT?: ProductDeliveryScalarWhereInput | ProductDeliveryScalarWhereInput[]
    id?: StringFilter<"ProductDelivery"> | string
    productId?: StringFilter<"ProductDelivery"> | string
    shopId?: StringFilter<"ProductDelivery"> | string
    deliveryPersonId?: StringFilter<"ProductDelivery"> | string
    total_price?: IntFilter<"ProductDelivery"> | number
    quantity?: IntFilter<"ProductDelivery"> | number
    unit_price?: IntFilter<"ProductDelivery"> | number
    productType?: StringFilter<"ProductDelivery"> | string
    transaction_type?: EnumTransactionEnumFilter<"ProductDelivery"> | $Enums.TransactionEnum
    created_at?: DateTimeFilter<"ProductDelivery"> | Date | string
    signature?: StringNullableFilter<"ProductDelivery"> | string | null
  }

  export type ProductRemainingUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductRemainingWhereUniqueInput
    update: XOR<ProductRemainingUpdateWithoutProductInput, ProductRemainingUncheckedUpdateWithoutProductInput>
    create: XOR<ProductRemainingCreateWithoutProductInput, ProductRemainingUncheckedCreateWithoutProductInput>
  }

  export type ProductRemainingUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductRemainingWhereUniqueInput
    data: XOR<ProductRemainingUpdateWithoutProductInput, ProductRemainingUncheckedUpdateWithoutProductInput>
  }

  export type ProductRemainingUpdateManyWithWhereWithoutProductInput = {
    where: ProductRemainingScalarWhereInput
    data: XOR<ProductRemainingUpdateManyMutationInput, ProductRemainingUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductRemainingScalarWhereInput = {
    AND?: ProductRemainingScalarWhereInput | ProductRemainingScalarWhereInput[]
    OR?: ProductRemainingScalarWhereInput[]
    NOT?: ProductRemainingScalarWhereInput | ProductRemainingScalarWhereInput[]
    id?: StringFilter<"ProductRemaining"> | string
    productId?: StringFilter<"ProductRemaining"> | string
    pieces?: IntFilter<"ProductRemaining"> | number
    is_delivered?: BoolFilter<"ProductRemaining"> | boolean
    created_at?: DateTimeFilter<"ProductRemaining"> | Date | string
  }

  export type ProductStockUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductStockWhereUniqueInput
    update: XOR<ProductStockUpdateWithoutProductInput, ProductStockUncheckedUpdateWithoutProductInput>
    create: XOR<ProductStockCreateWithoutProductInput, ProductStockUncheckedCreateWithoutProductInput>
  }

  export type ProductStockUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductStockWhereUniqueInput
    data: XOR<ProductStockUpdateWithoutProductInput, ProductStockUncheckedUpdateWithoutProductInput>
  }

  export type ProductStockUpdateManyWithWhereWithoutProductInput = {
    where: ProductStockScalarWhereInput
    data: XOR<ProductStockUpdateManyMutationInput, ProductStockUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductStockScalarWhereInput = {
    AND?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
    OR?: ProductStockScalarWhereInput[]
    NOT?: ProductStockScalarWhereInput | ProductStockScalarWhereInput[]
    id?: StringFilter<"ProductStock"> | string
    productId?: StringFilter<"ProductStock"> | string
    pieces?: IntFilter<"ProductStock"> | number
    is_delivered?: BoolFilter<"ProductStock"> | boolean
    created_at?: DateTimeFilter<"ProductStock"> | Date | string
  }

  export type ProductReturnHistoryUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductReturnHistoryWhereUniqueInput
    update: XOR<ProductReturnHistoryUpdateWithoutProductInput, ProductReturnHistoryUncheckedUpdateWithoutProductInput>
    create: XOR<ProductReturnHistoryCreateWithoutProductInput, ProductReturnHistoryUncheckedCreateWithoutProductInput>
  }

  export type ProductReturnHistoryUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductReturnHistoryWhereUniqueInput
    data: XOR<ProductReturnHistoryUpdateWithoutProductInput, ProductReturnHistoryUncheckedUpdateWithoutProductInput>
  }

  export type ProductReturnHistoryUpdateManyWithWhereWithoutProductInput = {
    where: ProductReturnHistoryScalarWhereInput
    data: XOR<ProductReturnHistoryUpdateManyMutationInput, ProductReturnHistoryUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductReturnHistoryScalarWhereInput = {
    AND?: ProductReturnHistoryScalarWhereInput | ProductReturnHistoryScalarWhereInput[]
    OR?: ProductReturnHistoryScalarWhereInput[]
    NOT?: ProductReturnHistoryScalarWhereInput | ProductReturnHistoryScalarWhereInput[]
    id?: StringFilter<"ProductReturnHistory"> | string
    productId?: StringFilter<"ProductReturnHistory"> | string
    pieces?: IntFilter<"ProductReturnHistory"> | number
    unitPrice?: IntNullableFilter<"ProductReturnHistory"> | number | null
    totalPrice?: IntNullableFilter<"ProductReturnHistory"> | number | null
    shopId?: StringFilter<"ProductReturnHistory"> | string
    created_at?: DateTimeFilter<"ProductReturnHistory"> | Date | string
    deliveryPersonId?: StringFilter<"ProductReturnHistory"> | string
    signature?: StringFilter<"ProductReturnHistory"> | string
  }

  export type ShopOrderUpsertWithWhereUniqueWithoutProductInput = {
    where: ShopOrderWhereUniqueInput
    update: XOR<ShopOrderUpdateWithoutProductInput, ShopOrderUncheckedUpdateWithoutProductInput>
    create: XOR<ShopOrderCreateWithoutProductInput, ShopOrderUncheckedCreateWithoutProductInput>
  }

  export type ShopOrderUpdateWithWhereUniqueWithoutProductInput = {
    where: ShopOrderWhereUniqueInput
    data: XOR<ShopOrderUpdateWithoutProductInput, ShopOrderUncheckedUpdateWithoutProductInput>
  }

  export type ShopOrderUpdateManyWithWhereWithoutProductInput = {
    where: ShopOrderScalarWhereInput
    data: XOR<ShopOrderUpdateManyMutationInput, ShopOrderUncheckedUpdateManyWithoutProductInput>
  }

  export type ShopOrderScalarWhereInput = {
    AND?: ShopOrderScalarWhereInput | ShopOrderScalarWhereInput[]
    OR?: ShopOrderScalarWhereInput[]
    NOT?: ShopOrderScalarWhereInput | ShopOrderScalarWhereInput[]
    id?: StringFilter<"ShopOrder"> | string
    shopId?: StringFilter<"ShopOrder"> | string
    productId?: StringFilter<"ShopOrder"> | string
    pieces?: IntFilter<"ShopOrder"> | number
    deliveredPersonId?: StringNullableFilter<"ShopOrder"> | string | null
    created_at?: DateTimeFilter<"ShopOrder"> | Date | string
    status?: EnumOrderStatusFilter<"ShopOrder"> | $Enums.OrderStatus
  }

  export type ProductCreateWithoutProductDeliveriesInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    stock: number
    ingredient?: string | null
    barcode: string
    price: number
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imageURL?: string | null
    remainingProducts?: ProductRemainingCreateNestedManyWithoutProductInput
    stockRecords?: ProductStockCreateNestedManyWithoutProductInput
    returnHistories?: ProductReturnHistoryCreateNestedManyWithoutProductInput
    shopOrders?: ShopOrderCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutProductDeliveriesInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    stock: number
    ingredient?: string | null
    barcode: string
    price: number
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imageURL?: string | null
    remainingProducts?: ProductRemainingUncheckedCreateNestedManyWithoutProductInput
    stockRecords?: ProductStockUncheckedCreateNestedManyWithoutProductInput
    returnHistories?: ProductReturnHistoryUncheckedCreateNestedManyWithoutProductInput
    shopOrders?: ShopOrderUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutProductDeliveriesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutProductDeliveriesInput, ProductUncheckedCreateWithoutProductDeliveriesInput>
  }

  export type ShopCreateWithoutProductDeliveryInput = {
    id?: string
    name: string
    address: string
    is_active: boolean
    email: string
    phone_number: string
    returnHistories?: ProductReturnHistoryCreateNestedManyWithoutShopInput
    shopOrders?: ShopOrderCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutProductDeliveryInput = {
    id?: string
    name: string
    address: string
    is_active: boolean
    email: string
    phone_number: string
    returnHistories?: ProductReturnHistoryUncheckedCreateNestedManyWithoutShopInput
    shopOrders?: ShopOrderUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutProductDeliveryInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutProductDeliveryInput, ShopUncheckedCreateWithoutProductDeliveryInput>
  }

  export type DeliveryPersonCreateWithoutProductDeliveriesInput = {
    id?: string
    name: string
    image?: string | null
    phoneNumber: string
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle?: string | null
    returnHistories?: ProductReturnHistoryCreateNestedManyWithoutDeliveryPersonInput
    shopOrders?: ShopOrderCreateNestedManyWithoutDeliveryPersonInput
  }

  export type DeliveryPersonUncheckedCreateWithoutProductDeliveriesInput = {
    id?: string
    name: string
    image?: string | null
    phoneNumber: string
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle?: string | null
    returnHistories?: ProductReturnHistoryUncheckedCreateNestedManyWithoutDeliveryPersonInput
    shopOrders?: ShopOrderUncheckedCreateNestedManyWithoutDeliveryPersonInput
  }

  export type DeliveryPersonCreateOrConnectWithoutProductDeliveriesInput = {
    where: DeliveryPersonWhereUniqueInput
    create: XOR<DeliveryPersonCreateWithoutProductDeliveriesInput, DeliveryPersonUncheckedCreateWithoutProductDeliveriesInput>
  }

  export type ProductUpsertWithoutProductDeliveriesInput = {
    update: XOR<ProductUpdateWithoutProductDeliveriesInput, ProductUncheckedUpdateWithoutProductDeliveriesInput>
    create: XOR<ProductCreateWithoutProductDeliveriesInput, ProductUncheckedCreateWithoutProductDeliveriesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutProductDeliveriesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutProductDeliveriesInput, ProductUncheckedUpdateWithoutProductDeliveriesInput>
  }

  export type ProductUpdateWithoutProductDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    ingredient?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    remainingProducts?: ProductRemainingUpdateManyWithoutProductNestedInput
    stockRecords?: ProductStockUpdateManyWithoutProductNestedInput
    returnHistories?: ProductReturnHistoryUpdateManyWithoutProductNestedInput
    shopOrders?: ShopOrderUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutProductDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    ingredient?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    remainingProducts?: ProductRemainingUncheckedUpdateManyWithoutProductNestedInput
    stockRecords?: ProductStockUncheckedUpdateManyWithoutProductNestedInput
    returnHistories?: ProductReturnHistoryUncheckedUpdateManyWithoutProductNestedInput
    shopOrders?: ShopOrderUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ShopUpsertWithoutProductDeliveryInput = {
    update: XOR<ShopUpdateWithoutProductDeliveryInput, ShopUncheckedUpdateWithoutProductDeliveryInput>
    create: XOR<ShopCreateWithoutProductDeliveryInput, ShopUncheckedCreateWithoutProductDeliveryInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutProductDeliveryInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutProductDeliveryInput, ShopUncheckedUpdateWithoutProductDeliveryInput>
  }

  export type ShopUpdateWithoutProductDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    returnHistories?: ProductReturnHistoryUpdateManyWithoutShopNestedInput
    shopOrders?: ShopOrderUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutProductDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    returnHistories?: ProductReturnHistoryUncheckedUpdateManyWithoutShopNestedInput
    shopOrders?: ShopOrderUncheckedUpdateManyWithoutShopNestedInput
  }

  export type DeliveryPersonUpsertWithoutProductDeliveriesInput = {
    update: XOR<DeliveryPersonUpdateWithoutProductDeliveriesInput, DeliveryPersonUncheckedUpdateWithoutProductDeliveriesInput>
    create: XOR<DeliveryPersonCreateWithoutProductDeliveriesInput, DeliveryPersonUncheckedCreateWithoutProductDeliveriesInput>
    where?: DeliveryPersonWhereInput
  }

  export type DeliveryPersonUpdateToOneWithWhereWithoutProductDeliveriesInput = {
    where?: DeliveryPersonWhereInput
    data: XOR<DeliveryPersonUpdateWithoutProductDeliveriesInput, DeliveryPersonUncheckedUpdateWithoutProductDeliveriesInput>
  }

  export type DeliveryPersonUpdateWithoutProductDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    returnHistories?: ProductReturnHistoryUpdateManyWithoutDeliveryPersonNestedInput
    shopOrders?: ShopOrderUpdateManyWithoutDeliveryPersonNestedInput
  }

  export type DeliveryPersonUncheckedUpdateWithoutProductDeliveriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    returnHistories?: ProductReturnHistoryUncheckedUpdateManyWithoutDeliveryPersonNestedInput
    shopOrders?: ShopOrderUncheckedUpdateManyWithoutDeliveryPersonNestedInput
  }

  export type ProductDeliveryCreateWithoutDeliveryPersonInput = {
    id?: string
    total_price: number
    quantity: number
    unit_price: number
    productType: string
    transaction_type: $Enums.TransactionEnum
    created_at?: Date | string
    signature?: string | null
    product: ProductCreateNestedOneWithoutProductDeliveriesInput
    shop: ShopCreateNestedOneWithoutProductDeliveryInput
  }

  export type ProductDeliveryUncheckedCreateWithoutDeliveryPersonInput = {
    id?: string
    productId: string
    shopId: string
    total_price: number
    quantity: number
    unit_price: number
    productType: string
    transaction_type: $Enums.TransactionEnum
    created_at?: Date | string
    signature?: string | null
  }

  export type ProductDeliveryCreateOrConnectWithoutDeliveryPersonInput = {
    where: ProductDeliveryWhereUniqueInput
    create: XOR<ProductDeliveryCreateWithoutDeliveryPersonInput, ProductDeliveryUncheckedCreateWithoutDeliveryPersonInput>
  }

  export type ProductDeliveryCreateManyDeliveryPersonInputEnvelope = {
    data: ProductDeliveryCreateManyDeliveryPersonInput | ProductDeliveryCreateManyDeliveryPersonInput[]
    skipDuplicates?: boolean
  }

  export type ProductReturnHistoryCreateWithoutDeliveryPersonInput = {
    id?: string
    pieces: number
    unitPrice?: number | null
    totalPrice?: number | null
    created_at?: Date | string
    signature: string
    product: ProductCreateNestedOneWithoutReturnHistoriesInput
    shop: ShopCreateNestedOneWithoutReturnHistoriesInput
  }

  export type ProductReturnHistoryUncheckedCreateWithoutDeliveryPersonInput = {
    id?: string
    productId: string
    pieces: number
    unitPrice?: number | null
    totalPrice?: number | null
    shopId: string
    created_at?: Date | string
    signature: string
  }

  export type ProductReturnHistoryCreateOrConnectWithoutDeliveryPersonInput = {
    where: ProductReturnHistoryWhereUniqueInput
    create: XOR<ProductReturnHistoryCreateWithoutDeliveryPersonInput, ProductReturnHistoryUncheckedCreateWithoutDeliveryPersonInput>
  }

  export type ProductReturnHistoryCreateManyDeliveryPersonInputEnvelope = {
    data: ProductReturnHistoryCreateManyDeliveryPersonInput | ProductReturnHistoryCreateManyDeliveryPersonInput[]
    skipDuplicates?: boolean
  }

  export type ShopOrderCreateWithoutDeliveryPersonInput = {
    id?: string
    pieces: number
    created_at?: Date | string
    status?: $Enums.OrderStatus
    shop: ShopCreateNestedOneWithoutShopOrdersInput
    product: ProductCreateNestedOneWithoutShopOrdersInput
  }

  export type ShopOrderUncheckedCreateWithoutDeliveryPersonInput = {
    id?: string
    shopId: string
    productId: string
    pieces: number
    created_at?: Date | string
    status?: $Enums.OrderStatus
  }

  export type ShopOrderCreateOrConnectWithoutDeliveryPersonInput = {
    where: ShopOrderWhereUniqueInput
    create: XOR<ShopOrderCreateWithoutDeliveryPersonInput, ShopOrderUncheckedCreateWithoutDeliveryPersonInput>
  }

  export type ShopOrderCreateManyDeliveryPersonInputEnvelope = {
    data: ShopOrderCreateManyDeliveryPersonInput | ShopOrderCreateManyDeliveryPersonInput[]
    skipDuplicates?: boolean
  }

  export type ProductDeliveryUpsertWithWhereUniqueWithoutDeliveryPersonInput = {
    where: ProductDeliveryWhereUniqueInput
    update: XOR<ProductDeliveryUpdateWithoutDeliveryPersonInput, ProductDeliveryUncheckedUpdateWithoutDeliveryPersonInput>
    create: XOR<ProductDeliveryCreateWithoutDeliveryPersonInput, ProductDeliveryUncheckedCreateWithoutDeliveryPersonInput>
  }

  export type ProductDeliveryUpdateWithWhereUniqueWithoutDeliveryPersonInput = {
    where: ProductDeliveryWhereUniqueInput
    data: XOR<ProductDeliveryUpdateWithoutDeliveryPersonInput, ProductDeliveryUncheckedUpdateWithoutDeliveryPersonInput>
  }

  export type ProductDeliveryUpdateManyWithWhereWithoutDeliveryPersonInput = {
    where: ProductDeliveryScalarWhereInput
    data: XOR<ProductDeliveryUpdateManyMutationInput, ProductDeliveryUncheckedUpdateManyWithoutDeliveryPersonInput>
  }

  export type ProductReturnHistoryUpsertWithWhereUniqueWithoutDeliveryPersonInput = {
    where: ProductReturnHistoryWhereUniqueInput
    update: XOR<ProductReturnHistoryUpdateWithoutDeliveryPersonInput, ProductReturnHistoryUncheckedUpdateWithoutDeliveryPersonInput>
    create: XOR<ProductReturnHistoryCreateWithoutDeliveryPersonInput, ProductReturnHistoryUncheckedCreateWithoutDeliveryPersonInput>
  }

  export type ProductReturnHistoryUpdateWithWhereUniqueWithoutDeliveryPersonInput = {
    where: ProductReturnHistoryWhereUniqueInput
    data: XOR<ProductReturnHistoryUpdateWithoutDeliveryPersonInput, ProductReturnHistoryUncheckedUpdateWithoutDeliveryPersonInput>
  }

  export type ProductReturnHistoryUpdateManyWithWhereWithoutDeliveryPersonInput = {
    where: ProductReturnHistoryScalarWhereInput
    data: XOR<ProductReturnHistoryUpdateManyMutationInput, ProductReturnHistoryUncheckedUpdateManyWithoutDeliveryPersonInput>
  }

  export type ShopOrderUpsertWithWhereUniqueWithoutDeliveryPersonInput = {
    where: ShopOrderWhereUniqueInput
    update: XOR<ShopOrderUpdateWithoutDeliveryPersonInput, ShopOrderUncheckedUpdateWithoutDeliveryPersonInput>
    create: XOR<ShopOrderCreateWithoutDeliveryPersonInput, ShopOrderUncheckedCreateWithoutDeliveryPersonInput>
  }

  export type ShopOrderUpdateWithWhereUniqueWithoutDeliveryPersonInput = {
    where: ShopOrderWhereUniqueInput
    data: XOR<ShopOrderUpdateWithoutDeliveryPersonInput, ShopOrderUncheckedUpdateWithoutDeliveryPersonInput>
  }

  export type ShopOrderUpdateManyWithWhereWithoutDeliveryPersonInput = {
    where: ShopOrderScalarWhereInput
    data: XOR<ShopOrderUpdateManyMutationInput, ShopOrderUncheckedUpdateManyWithoutDeliveryPersonInput>
  }

  export type ProductReturnHistoryCreateWithoutShopInput = {
    id?: string
    pieces: number
    unitPrice?: number | null
    totalPrice?: number | null
    created_at?: Date | string
    signature: string
    product: ProductCreateNestedOneWithoutReturnHistoriesInput
    deliveryPerson: DeliveryPersonCreateNestedOneWithoutReturnHistoriesInput
  }

  export type ProductReturnHistoryUncheckedCreateWithoutShopInput = {
    id?: string
    productId: string
    pieces: number
    unitPrice?: number | null
    totalPrice?: number | null
    created_at?: Date | string
    deliveryPersonId: string
    signature: string
  }

  export type ProductReturnHistoryCreateOrConnectWithoutShopInput = {
    where: ProductReturnHistoryWhereUniqueInput
    create: XOR<ProductReturnHistoryCreateWithoutShopInput, ProductReturnHistoryUncheckedCreateWithoutShopInput>
  }

  export type ProductReturnHistoryCreateManyShopInputEnvelope = {
    data: ProductReturnHistoryCreateManyShopInput | ProductReturnHistoryCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type ShopOrderCreateWithoutShopInput = {
    id?: string
    pieces: number
    created_at?: Date | string
    status?: $Enums.OrderStatus
    product: ProductCreateNestedOneWithoutShopOrdersInput
    deliveryPerson?: DeliveryPersonCreateNestedOneWithoutShopOrdersInput
  }

  export type ShopOrderUncheckedCreateWithoutShopInput = {
    id?: string
    productId: string
    pieces: number
    deliveredPersonId?: string | null
    created_at?: Date | string
    status?: $Enums.OrderStatus
  }

  export type ShopOrderCreateOrConnectWithoutShopInput = {
    where: ShopOrderWhereUniqueInput
    create: XOR<ShopOrderCreateWithoutShopInput, ShopOrderUncheckedCreateWithoutShopInput>
  }

  export type ShopOrderCreateManyShopInputEnvelope = {
    data: ShopOrderCreateManyShopInput | ShopOrderCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type ProductDeliveryCreateWithoutShopInput = {
    id?: string
    total_price: number
    quantity: number
    unit_price: number
    productType: string
    transaction_type: $Enums.TransactionEnum
    created_at?: Date | string
    signature?: string | null
    product: ProductCreateNestedOneWithoutProductDeliveriesInput
    deliveryPerson: DeliveryPersonCreateNestedOneWithoutProductDeliveriesInput
  }

  export type ProductDeliveryUncheckedCreateWithoutShopInput = {
    id?: string
    productId: string
    deliveryPersonId: string
    total_price: number
    quantity: number
    unit_price: number
    productType: string
    transaction_type: $Enums.TransactionEnum
    created_at?: Date | string
    signature?: string | null
  }

  export type ProductDeliveryCreateOrConnectWithoutShopInput = {
    where: ProductDeliveryWhereUniqueInput
    create: XOR<ProductDeliveryCreateWithoutShopInput, ProductDeliveryUncheckedCreateWithoutShopInput>
  }

  export type ProductDeliveryCreateManyShopInputEnvelope = {
    data: ProductDeliveryCreateManyShopInput | ProductDeliveryCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type ProductReturnHistoryUpsertWithWhereUniqueWithoutShopInput = {
    where: ProductReturnHistoryWhereUniqueInput
    update: XOR<ProductReturnHistoryUpdateWithoutShopInput, ProductReturnHistoryUncheckedUpdateWithoutShopInput>
    create: XOR<ProductReturnHistoryCreateWithoutShopInput, ProductReturnHistoryUncheckedCreateWithoutShopInput>
  }

  export type ProductReturnHistoryUpdateWithWhereUniqueWithoutShopInput = {
    where: ProductReturnHistoryWhereUniqueInput
    data: XOR<ProductReturnHistoryUpdateWithoutShopInput, ProductReturnHistoryUncheckedUpdateWithoutShopInput>
  }

  export type ProductReturnHistoryUpdateManyWithWhereWithoutShopInput = {
    where: ProductReturnHistoryScalarWhereInput
    data: XOR<ProductReturnHistoryUpdateManyMutationInput, ProductReturnHistoryUncheckedUpdateManyWithoutShopInput>
  }

  export type ShopOrderUpsertWithWhereUniqueWithoutShopInput = {
    where: ShopOrderWhereUniqueInput
    update: XOR<ShopOrderUpdateWithoutShopInput, ShopOrderUncheckedUpdateWithoutShopInput>
    create: XOR<ShopOrderCreateWithoutShopInput, ShopOrderUncheckedCreateWithoutShopInput>
  }

  export type ShopOrderUpdateWithWhereUniqueWithoutShopInput = {
    where: ShopOrderWhereUniqueInput
    data: XOR<ShopOrderUpdateWithoutShopInput, ShopOrderUncheckedUpdateWithoutShopInput>
  }

  export type ShopOrderUpdateManyWithWhereWithoutShopInput = {
    where: ShopOrderScalarWhereInput
    data: XOR<ShopOrderUpdateManyMutationInput, ShopOrderUncheckedUpdateManyWithoutShopInput>
  }

  export type ProductDeliveryUpsertWithWhereUniqueWithoutShopInput = {
    where: ProductDeliveryWhereUniqueInput
    update: XOR<ProductDeliveryUpdateWithoutShopInput, ProductDeliveryUncheckedUpdateWithoutShopInput>
    create: XOR<ProductDeliveryCreateWithoutShopInput, ProductDeliveryUncheckedCreateWithoutShopInput>
  }

  export type ProductDeliveryUpdateWithWhereUniqueWithoutShopInput = {
    where: ProductDeliveryWhereUniqueInput
    data: XOR<ProductDeliveryUpdateWithoutShopInput, ProductDeliveryUncheckedUpdateWithoutShopInput>
  }

  export type ProductDeliveryUpdateManyWithWhereWithoutShopInput = {
    where: ProductDeliveryScalarWhereInput
    data: XOR<ProductDeliveryUpdateManyMutationInput, ProductDeliveryUncheckedUpdateManyWithoutShopInput>
  }

  export type ProductCreateWithoutRemainingProductsInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    stock: number
    ingredient?: string | null
    barcode: string
    price: number
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imageURL?: string | null
    productDeliveries?: ProductDeliveryCreateNestedManyWithoutProductInput
    stockRecords?: ProductStockCreateNestedManyWithoutProductInput
    returnHistories?: ProductReturnHistoryCreateNestedManyWithoutProductInput
    shopOrders?: ShopOrderCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutRemainingProductsInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    stock: number
    ingredient?: string | null
    barcode: string
    price: number
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imageURL?: string | null
    productDeliveries?: ProductDeliveryUncheckedCreateNestedManyWithoutProductInput
    stockRecords?: ProductStockUncheckedCreateNestedManyWithoutProductInput
    returnHistories?: ProductReturnHistoryUncheckedCreateNestedManyWithoutProductInput
    shopOrders?: ShopOrderUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutRemainingProductsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutRemainingProductsInput, ProductUncheckedCreateWithoutRemainingProductsInput>
  }

  export type ProductUpsertWithoutRemainingProductsInput = {
    update: XOR<ProductUpdateWithoutRemainingProductsInput, ProductUncheckedUpdateWithoutRemainingProductsInput>
    create: XOR<ProductCreateWithoutRemainingProductsInput, ProductUncheckedCreateWithoutRemainingProductsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutRemainingProductsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutRemainingProductsInput, ProductUncheckedUpdateWithoutRemainingProductsInput>
  }

  export type ProductUpdateWithoutRemainingProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    ingredient?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    productDeliveries?: ProductDeliveryUpdateManyWithoutProductNestedInput
    stockRecords?: ProductStockUpdateManyWithoutProductNestedInput
    returnHistories?: ProductReturnHistoryUpdateManyWithoutProductNestedInput
    shopOrders?: ShopOrderUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutRemainingProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    ingredient?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    productDeliveries?: ProductDeliveryUncheckedUpdateManyWithoutProductNestedInput
    stockRecords?: ProductStockUncheckedUpdateManyWithoutProductNestedInput
    returnHistories?: ProductReturnHistoryUncheckedUpdateManyWithoutProductNestedInput
    shopOrders?: ShopOrderUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutReturnHistoriesInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    stock: number
    ingredient?: string | null
    barcode: string
    price: number
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imageURL?: string | null
    productDeliveries?: ProductDeliveryCreateNestedManyWithoutProductInput
    remainingProducts?: ProductRemainingCreateNestedManyWithoutProductInput
    stockRecords?: ProductStockCreateNestedManyWithoutProductInput
    shopOrders?: ShopOrderCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutReturnHistoriesInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    stock: number
    ingredient?: string | null
    barcode: string
    price: number
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imageURL?: string | null
    productDeliveries?: ProductDeliveryUncheckedCreateNestedManyWithoutProductInput
    remainingProducts?: ProductRemainingUncheckedCreateNestedManyWithoutProductInput
    stockRecords?: ProductStockUncheckedCreateNestedManyWithoutProductInput
    shopOrders?: ShopOrderUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutReturnHistoriesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutReturnHistoriesInput, ProductUncheckedCreateWithoutReturnHistoriesInput>
  }

  export type ShopCreateWithoutReturnHistoriesInput = {
    id?: string
    name: string
    address: string
    is_active: boolean
    email: string
    phone_number: string
    shopOrders?: ShopOrderCreateNestedManyWithoutShopInput
    productDelivery?: ProductDeliveryCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutReturnHistoriesInput = {
    id?: string
    name: string
    address: string
    is_active: boolean
    email: string
    phone_number: string
    shopOrders?: ShopOrderUncheckedCreateNestedManyWithoutShopInput
    productDelivery?: ProductDeliveryUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutReturnHistoriesInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutReturnHistoriesInput, ShopUncheckedCreateWithoutReturnHistoriesInput>
  }

  export type DeliveryPersonCreateWithoutReturnHistoriesInput = {
    id?: string
    name: string
    image?: string | null
    phoneNumber: string
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle?: string | null
    productDeliveries?: ProductDeliveryCreateNestedManyWithoutDeliveryPersonInput
    shopOrders?: ShopOrderCreateNestedManyWithoutDeliveryPersonInput
  }

  export type DeliveryPersonUncheckedCreateWithoutReturnHistoriesInput = {
    id?: string
    name: string
    image?: string | null
    phoneNumber: string
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle?: string | null
    productDeliveries?: ProductDeliveryUncheckedCreateNestedManyWithoutDeliveryPersonInput
    shopOrders?: ShopOrderUncheckedCreateNestedManyWithoutDeliveryPersonInput
  }

  export type DeliveryPersonCreateOrConnectWithoutReturnHistoriesInput = {
    where: DeliveryPersonWhereUniqueInput
    create: XOR<DeliveryPersonCreateWithoutReturnHistoriesInput, DeliveryPersonUncheckedCreateWithoutReturnHistoriesInput>
  }

  export type ProductUpsertWithoutReturnHistoriesInput = {
    update: XOR<ProductUpdateWithoutReturnHistoriesInput, ProductUncheckedUpdateWithoutReturnHistoriesInput>
    create: XOR<ProductCreateWithoutReturnHistoriesInput, ProductUncheckedCreateWithoutReturnHistoriesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutReturnHistoriesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutReturnHistoriesInput, ProductUncheckedUpdateWithoutReturnHistoriesInput>
  }

  export type ProductUpdateWithoutReturnHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    ingredient?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    productDeliveries?: ProductDeliveryUpdateManyWithoutProductNestedInput
    remainingProducts?: ProductRemainingUpdateManyWithoutProductNestedInput
    stockRecords?: ProductStockUpdateManyWithoutProductNestedInput
    shopOrders?: ShopOrderUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutReturnHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    ingredient?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    productDeliveries?: ProductDeliveryUncheckedUpdateManyWithoutProductNestedInput
    remainingProducts?: ProductRemainingUncheckedUpdateManyWithoutProductNestedInput
    stockRecords?: ProductStockUncheckedUpdateManyWithoutProductNestedInput
    shopOrders?: ShopOrderUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ShopUpsertWithoutReturnHistoriesInput = {
    update: XOR<ShopUpdateWithoutReturnHistoriesInput, ShopUncheckedUpdateWithoutReturnHistoriesInput>
    create: XOR<ShopCreateWithoutReturnHistoriesInput, ShopUncheckedCreateWithoutReturnHistoriesInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutReturnHistoriesInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutReturnHistoriesInput, ShopUncheckedUpdateWithoutReturnHistoriesInput>
  }

  export type ShopUpdateWithoutReturnHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    shopOrders?: ShopOrderUpdateManyWithoutShopNestedInput
    productDelivery?: ProductDeliveryUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutReturnHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    shopOrders?: ShopOrderUncheckedUpdateManyWithoutShopNestedInput
    productDelivery?: ProductDeliveryUncheckedUpdateManyWithoutShopNestedInput
  }

  export type DeliveryPersonUpsertWithoutReturnHistoriesInput = {
    update: XOR<DeliveryPersonUpdateWithoutReturnHistoriesInput, DeliveryPersonUncheckedUpdateWithoutReturnHistoriesInput>
    create: XOR<DeliveryPersonCreateWithoutReturnHistoriesInput, DeliveryPersonUncheckedCreateWithoutReturnHistoriesInput>
    where?: DeliveryPersonWhereInput
  }

  export type DeliveryPersonUpdateToOneWithWhereWithoutReturnHistoriesInput = {
    where?: DeliveryPersonWhereInput
    data: XOR<DeliveryPersonUpdateWithoutReturnHistoriesInput, DeliveryPersonUncheckedUpdateWithoutReturnHistoriesInput>
  }

  export type DeliveryPersonUpdateWithoutReturnHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    productDeliveries?: ProductDeliveryUpdateManyWithoutDeliveryPersonNestedInput
    shopOrders?: ShopOrderUpdateManyWithoutDeliveryPersonNestedInput
  }

  export type DeliveryPersonUncheckedUpdateWithoutReturnHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    productDeliveries?: ProductDeliveryUncheckedUpdateManyWithoutDeliveryPersonNestedInput
    shopOrders?: ShopOrderUncheckedUpdateManyWithoutDeliveryPersonNestedInput
  }

  export type ProductCreateWithoutStockRecordsInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    stock: number
    ingredient?: string | null
    barcode: string
    price: number
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imageURL?: string | null
    productDeliveries?: ProductDeliveryCreateNestedManyWithoutProductInput
    remainingProducts?: ProductRemainingCreateNestedManyWithoutProductInput
    returnHistories?: ProductReturnHistoryCreateNestedManyWithoutProductInput
    shopOrders?: ShopOrderCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStockRecordsInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    stock: number
    ingredient?: string | null
    barcode: string
    price: number
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imageURL?: string | null
    productDeliveries?: ProductDeliveryUncheckedCreateNestedManyWithoutProductInput
    remainingProducts?: ProductRemainingUncheckedCreateNestedManyWithoutProductInput
    returnHistories?: ProductReturnHistoryUncheckedCreateNestedManyWithoutProductInput
    shopOrders?: ShopOrderUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStockRecordsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStockRecordsInput, ProductUncheckedCreateWithoutStockRecordsInput>
  }

  export type ProductUpsertWithoutStockRecordsInput = {
    update: XOR<ProductUpdateWithoutStockRecordsInput, ProductUncheckedUpdateWithoutStockRecordsInput>
    create: XOR<ProductCreateWithoutStockRecordsInput, ProductUncheckedCreateWithoutStockRecordsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutStockRecordsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutStockRecordsInput, ProductUncheckedUpdateWithoutStockRecordsInput>
  }

  export type ProductUpdateWithoutStockRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    ingredient?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    productDeliveries?: ProductDeliveryUpdateManyWithoutProductNestedInput
    remainingProducts?: ProductRemainingUpdateManyWithoutProductNestedInput
    returnHistories?: ProductReturnHistoryUpdateManyWithoutProductNestedInput
    shopOrders?: ShopOrderUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStockRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    ingredient?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    productDeliveries?: ProductDeliveryUncheckedUpdateManyWithoutProductNestedInput
    remainingProducts?: ProductRemainingUncheckedUpdateManyWithoutProductNestedInput
    returnHistories?: ProductReturnHistoryUncheckedUpdateManyWithoutProductNestedInput
    shopOrders?: ShopOrderUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ShopCreateWithoutShopOrdersInput = {
    id?: string
    name: string
    address: string
    is_active: boolean
    email: string
    phone_number: string
    returnHistories?: ProductReturnHistoryCreateNestedManyWithoutShopInput
    productDelivery?: ProductDeliveryCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutShopOrdersInput = {
    id?: string
    name: string
    address: string
    is_active: boolean
    email: string
    phone_number: string
    returnHistories?: ProductReturnHistoryUncheckedCreateNestedManyWithoutShopInput
    productDelivery?: ProductDeliveryUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutShopOrdersInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutShopOrdersInput, ShopUncheckedCreateWithoutShopOrdersInput>
  }

  export type ProductCreateWithoutShopOrdersInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    stock: number
    ingredient?: string | null
    barcode: string
    price: number
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imageURL?: string | null
    productDeliveries?: ProductDeliveryCreateNestedManyWithoutProductInput
    remainingProducts?: ProductRemainingCreateNestedManyWithoutProductInput
    stockRecords?: ProductStockCreateNestedManyWithoutProductInput
    returnHistories?: ProductReturnHistoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutShopOrdersInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    stock: number
    ingredient?: string | null
    barcode: string
    price: number
    expiredAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imageURL?: string | null
    productDeliveries?: ProductDeliveryUncheckedCreateNestedManyWithoutProductInput
    remainingProducts?: ProductRemainingUncheckedCreateNestedManyWithoutProductInput
    stockRecords?: ProductStockUncheckedCreateNestedManyWithoutProductInput
    returnHistories?: ProductReturnHistoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutShopOrdersInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutShopOrdersInput, ProductUncheckedCreateWithoutShopOrdersInput>
  }

  export type DeliveryPersonCreateWithoutShopOrdersInput = {
    id?: string
    name: string
    image?: string | null
    phoneNumber: string
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle?: string | null
    productDeliveries?: ProductDeliveryCreateNestedManyWithoutDeliveryPersonInput
    returnHistories?: ProductReturnHistoryCreateNestedManyWithoutDeliveryPersonInput
  }

  export type DeliveryPersonUncheckedCreateWithoutShopOrdersInput = {
    id?: string
    name: string
    image?: string | null
    phoneNumber: string
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle?: string | null
    productDeliveries?: ProductDeliveryUncheckedCreateNestedManyWithoutDeliveryPersonInput
    returnHistories?: ProductReturnHistoryUncheckedCreateNestedManyWithoutDeliveryPersonInput
  }

  export type DeliveryPersonCreateOrConnectWithoutShopOrdersInput = {
    where: DeliveryPersonWhereUniqueInput
    create: XOR<DeliveryPersonCreateWithoutShopOrdersInput, DeliveryPersonUncheckedCreateWithoutShopOrdersInput>
  }

  export type ShopUpsertWithoutShopOrdersInput = {
    update: XOR<ShopUpdateWithoutShopOrdersInput, ShopUncheckedUpdateWithoutShopOrdersInput>
    create: XOR<ShopCreateWithoutShopOrdersInput, ShopUncheckedCreateWithoutShopOrdersInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutShopOrdersInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutShopOrdersInput, ShopUncheckedUpdateWithoutShopOrdersInput>
  }

  export type ShopUpdateWithoutShopOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    returnHistories?: ProductReturnHistoryUpdateManyWithoutShopNestedInput
    productDelivery?: ProductDeliveryUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutShopOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    returnHistories?: ProductReturnHistoryUncheckedUpdateManyWithoutShopNestedInput
    productDelivery?: ProductDeliveryUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ProductUpsertWithoutShopOrdersInput = {
    update: XOR<ProductUpdateWithoutShopOrdersInput, ProductUncheckedUpdateWithoutShopOrdersInput>
    create: XOR<ProductCreateWithoutShopOrdersInput, ProductUncheckedCreateWithoutShopOrdersInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutShopOrdersInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutShopOrdersInput, ProductUncheckedUpdateWithoutShopOrdersInput>
  }

  export type ProductUpdateWithoutShopOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    ingredient?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    productDeliveries?: ProductDeliveryUpdateManyWithoutProductNestedInput
    remainingProducts?: ProductRemainingUpdateManyWithoutProductNestedInput
    stockRecords?: ProductStockUpdateManyWithoutProductNestedInput
    returnHistories?: ProductReturnHistoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutShopOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    stock?: IntFieldUpdateOperationsInput | number
    ingredient?: NullableStringFieldUpdateOperationsInput | string | null
    barcode?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    productDeliveries?: ProductDeliveryUncheckedUpdateManyWithoutProductNestedInput
    remainingProducts?: ProductRemainingUncheckedUpdateManyWithoutProductNestedInput
    stockRecords?: ProductStockUncheckedUpdateManyWithoutProductNestedInput
    returnHistories?: ProductReturnHistoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type DeliveryPersonUpsertWithoutShopOrdersInput = {
    update: XOR<DeliveryPersonUpdateWithoutShopOrdersInput, DeliveryPersonUncheckedUpdateWithoutShopOrdersInput>
    create: XOR<DeliveryPersonCreateWithoutShopOrdersInput, DeliveryPersonUncheckedCreateWithoutShopOrdersInput>
    where?: DeliveryPersonWhereInput
  }

  export type DeliveryPersonUpdateToOneWithWhereWithoutShopOrdersInput = {
    where?: DeliveryPersonWhereInput
    data: XOR<DeliveryPersonUpdateWithoutShopOrdersInput, DeliveryPersonUncheckedUpdateWithoutShopOrdersInput>
  }

  export type DeliveryPersonUpdateWithoutShopOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    productDeliveries?: ProductDeliveryUpdateManyWithoutDeliveryPersonNestedInput
    returnHistories?: ProductReturnHistoryUpdateManyWithoutDeliveryPersonNestedInput
  }

  export type DeliveryPersonUncheckedUpdateWithoutShopOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: NullableStringFieldUpdateOperationsInput | string | null
    productDeliveries?: ProductDeliveryUncheckedUpdateManyWithoutDeliveryPersonNestedInput
    returnHistories?: ProductReturnHistoryUncheckedUpdateManyWithoutDeliveryPersonNestedInput
  }

  export type ProductDeliveryCreateManyProductInput = {
    id?: string
    shopId: string
    deliveryPersonId: string
    total_price: number
    quantity: number
    unit_price: number
    productType: string
    transaction_type: $Enums.TransactionEnum
    created_at?: Date | string
    signature?: string | null
  }

  export type ProductRemainingCreateManyProductInput = {
    id?: string
    pieces: number
    is_delivered: boolean
    created_at?: Date | string
  }

  export type ProductStockCreateManyProductInput = {
    id?: string
    pieces: number
    is_delivered: boolean
    created_at?: Date | string
  }

  export type ProductReturnHistoryCreateManyProductInput = {
    id?: string
    pieces: number
    unitPrice?: number | null
    totalPrice?: number | null
    shopId: string
    created_at?: Date | string
    deliveryPersonId: string
    signature: string
  }

  export type ShopOrderCreateManyProductInput = {
    id?: string
    shopId: string
    pieces: number
    deliveredPersonId?: string | null
    created_at?: Date | string
    status?: $Enums.OrderStatus
  }

  export type ProductDeliveryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    transaction_type?: EnumTransactionEnumFieldUpdateOperationsInput | $Enums.TransactionEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    shop?: ShopUpdateOneRequiredWithoutProductDeliveryNestedInput
    deliveryPerson?: DeliveryPersonUpdateOneRequiredWithoutProductDeliveriesNestedInput
  }

  export type ProductDeliveryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    deliveryPersonId?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    transaction_type?: EnumTransactionEnumFieldUpdateOperationsInput | $Enums.TransactionEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductDeliveryUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    deliveryPersonId?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    transaction_type?: EnumTransactionEnumFieldUpdateOperationsInput | $Enums.TransactionEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductRemainingUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductRemainingUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductRemainingUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductStockUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductStockUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductStockUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    is_delivered?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductReturnHistoryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    shop?: ShopUpdateOneRequiredWithoutReturnHistoriesNestedInput
    deliveryPerson?: DeliveryPersonUpdateOneRequiredWithoutReturnHistoriesNestedInput
  }

  export type ProductReturnHistoryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    shopId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryPersonId?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
  }

  export type ProductReturnHistoryUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    shopId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryPersonId?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
  }

  export type ShopOrderUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shop?: ShopUpdateOneRequiredWithoutShopOrdersNestedInput
    deliveryPerson?: DeliveryPersonUpdateOneWithoutShopOrdersNestedInput
  }

  export type ShopOrderUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    deliveredPersonId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  }

  export type ShopOrderUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    deliveredPersonId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  }

  export type ProductDeliveryCreateManyDeliveryPersonInput = {
    id?: string
    productId: string
    shopId: string
    total_price: number
    quantity: number
    unit_price: number
    productType: string
    transaction_type: $Enums.TransactionEnum
    created_at?: Date | string
    signature?: string | null
  }

  export type ProductReturnHistoryCreateManyDeliveryPersonInput = {
    id?: string
    productId: string
    pieces: number
    unitPrice?: number | null
    totalPrice?: number | null
    shopId: string
    created_at?: Date | string
    signature: string
  }

  export type ShopOrderCreateManyDeliveryPersonInput = {
    id?: string
    shopId: string
    productId: string
    pieces: number
    created_at?: Date | string
    status?: $Enums.OrderStatus
  }

  export type ProductDeliveryUpdateWithoutDeliveryPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    transaction_type?: EnumTransactionEnumFieldUpdateOperationsInput | $Enums.TransactionEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutProductDeliveriesNestedInput
    shop?: ShopUpdateOneRequiredWithoutProductDeliveryNestedInput
  }

  export type ProductDeliveryUncheckedUpdateWithoutDeliveryPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    transaction_type?: EnumTransactionEnumFieldUpdateOperationsInput | $Enums.TransactionEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductDeliveryUncheckedUpdateManyWithoutDeliveryPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    transaction_type?: EnumTransactionEnumFieldUpdateOperationsInput | $Enums.TransactionEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductReturnHistoryUpdateWithoutDeliveryPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutReturnHistoriesNestedInput
    shop?: ShopUpdateOneRequiredWithoutReturnHistoriesNestedInput
  }

  export type ProductReturnHistoryUncheckedUpdateWithoutDeliveryPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    shopId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
  }

  export type ProductReturnHistoryUncheckedUpdateManyWithoutDeliveryPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    shopId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
  }

  export type ShopOrderUpdateWithoutDeliveryPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    shop?: ShopUpdateOneRequiredWithoutShopOrdersNestedInput
    product?: ProductUpdateOneRequiredWithoutShopOrdersNestedInput
  }

  export type ShopOrderUncheckedUpdateWithoutDeliveryPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  }

  export type ShopOrderUncheckedUpdateManyWithoutDeliveryPersonInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  }

  export type ProductReturnHistoryCreateManyShopInput = {
    id?: string
    productId: string
    pieces: number
    unitPrice?: number | null
    totalPrice?: number | null
    created_at?: Date | string
    deliveryPersonId: string
    signature: string
  }

  export type ShopOrderCreateManyShopInput = {
    id?: string
    productId: string
    pieces: number
    deliveredPersonId?: string | null
    created_at?: Date | string
    status?: $Enums.OrderStatus
  }

  export type ProductDeliveryCreateManyShopInput = {
    id?: string
    productId: string
    deliveryPersonId: string
    total_price: number
    quantity: number
    unit_price: number
    productType: string
    transaction_type: $Enums.TransactionEnum
    created_at?: Date | string
    signature?: string | null
  }

  export type ProductReturnHistoryUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutReturnHistoriesNestedInput
    deliveryPerson?: DeliveryPersonUpdateOneRequiredWithoutReturnHistoriesNestedInput
  }

  export type ProductReturnHistoryUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryPersonId?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
  }

  export type ProductReturnHistoryUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    unitPrice?: NullableIntFieldUpdateOperationsInput | number | null
    totalPrice?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryPersonId?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
  }

  export type ShopOrderUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    product?: ProductUpdateOneRequiredWithoutShopOrdersNestedInput
    deliveryPerson?: DeliveryPersonUpdateOneWithoutShopOrdersNestedInput
  }

  export type ShopOrderUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    deliveredPersonId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  }

  export type ShopOrderUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    pieces?: IntFieldUpdateOperationsInput | number
    deliveredPersonId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
  }

  export type ProductDeliveryUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    transaction_type?: EnumTransactionEnumFieldUpdateOperationsInput | $Enums.TransactionEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutProductDeliveriesNestedInput
    deliveryPerson?: DeliveryPersonUpdateOneRequiredWithoutProductDeliveriesNestedInput
  }

  export type ProductDeliveryUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    deliveryPersonId?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    transaction_type?: EnumTransactionEnumFieldUpdateOperationsInput | $Enums.TransactionEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductDeliveryUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    deliveryPersonId?: StringFieldUpdateOperationsInput | string
    total_price?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: IntFieldUpdateOperationsInput | number
    productType?: StringFieldUpdateOperationsInput | string
    transaction_type?: EnumTransactionEnumFieldUpdateOperationsInput | $Enums.TransactionEnum
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    signature?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}