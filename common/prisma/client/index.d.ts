// Code generated by Prisma (prisma@1.29.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  user: (where?: UserWhereInput) => Promise<boolean>;
  dashboard: (where?: DashboardWhereInput) => Promise<boolean>;
  chart: (where?: ChartWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  dashboards: (
    args?: {
      where?: DashboardWhereInput;
      orderBy?: DashboardOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Dashboard>;
  charts: (
    args?: {
      where?: ChartWhereInput;
      orderBy?: ChartOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Chart>;
  user: (where: UserWhereUniqueInput) => UserPromise;
  dashboard: (where: DashboardWhereUniqueInput) => DashboardPromise;
  chart: (where: ChartWhereUniqueInput) => ChartPromise;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  dashboardsConnection: (
    args?: {
      where?: DashboardWhereInput;
      orderBy?: DashboardOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => DashboardConnectionPromise;
  chartsConnection: (
    args?: {
      where?: ChartWhereInput;
      orderBy?: ChartOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ChartConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createUser: (data: UserCreateInput) => UserPromise;
  createDashboard: (data: DashboardCreateInput) => DashboardPromise;
  createChart: (data: ChartCreateInput) => ChartPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateDashboard: (
    args: { data: DashboardUpdateInput; where: DashboardWhereUniqueInput }
  ) => DashboardPromise;
  updateChart: (
    args: { data: ChartUpdateInput; where: ChartWhereUniqueInput }
  ) => ChartPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteDashboard: (where: DashboardWhereUniqueInput) => DashboardPromise;
  deleteChart: (where: ChartWhereUniqueInput) => ChartPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  upsertDashboard: (
    args: {
      where: DashboardWhereUniqueInput;
      create: DashboardCreateInput;
      update: DashboardUpdateInput;
    }
  ) => DashboardPromise;
  upsertChart: (
    args: {
      where: ChartWhereUniqueInput;
      create: ChartCreateInput;
      update: ChartUpdateInput;
    }
  ) => ChartPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  updateManyCharts: (
    args: { data: ChartUpdateManyMutationInput; where?: ChartWhereInput }
  ) => BatchPayloadPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
  deleteManyDashboards: (where?: DashboardWhereInput) => BatchPayloadPromise;
  deleteManyCharts: (where?: ChartWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
  dashboard: (
    where?: DashboardSubscriptionWhereInput
  ) => DashboardSubscriptionPayloadSubscription;
  chart: (
    where?: ChartSubscriptionWhereInput
  ) => ChartSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type Period =
  | "MINUTE1"
  | "MINUTE15"
  | "HOUR1"
  | "HOUR6"
  | "HOUR12"
  | "DAY1";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type ChartOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "from_ASC"
  | "from_DESC"
  | "to_ASC"
  | "to_DESC"
  | "period_ASC"
  | "period_DESC"
  | "base_ASC"
  | "base_DESC"
  | "quote_ASC"
  | "quote_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type DashboardOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  dashboard?: DashboardWhereInput;
}

export interface DashboardWhereInput {
  AND?: DashboardWhereInput[] | DashboardWhereInput;
  OR?: DashboardWhereInput[] | DashboardWhereInput;
  NOT?: DashboardWhereInput[] | DashboardWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  user?: UserWhereInput;
  charts_every?: ChartWhereInput;
  charts_some?: ChartWhereInput;
  charts_none?: ChartWhereInput;
}

export interface ChartWhereInput {
  AND?: ChartWhereInput[] | ChartWhereInput;
  OR?: ChartWhereInput[] | ChartWhereInput;
  NOT?: ChartWhereInput[] | ChartWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  from?: DateTimeInput;
  from_not?: DateTimeInput;
  from_in?: DateTimeInput[] | DateTimeInput;
  from_not_in?: DateTimeInput[] | DateTimeInput;
  from_lt?: DateTimeInput;
  from_lte?: DateTimeInput;
  from_gt?: DateTimeInput;
  from_gte?: DateTimeInput;
  to?: DateTimeInput;
  to_not?: DateTimeInput;
  to_in?: DateTimeInput[] | DateTimeInput;
  to_not_in?: DateTimeInput[] | DateTimeInput;
  to_lt?: DateTimeInput;
  to_lte?: DateTimeInput;
  to_gt?: DateTimeInput;
  to_gte?: DateTimeInput;
  period?: Period;
  period_not?: Period;
  period_in?: Period[] | Period;
  period_not_in?: Period[] | Period;
  base?: String;
  base_not?: String;
  base_in?: String[] | String;
  base_not_in?: String[] | String;
  base_lt?: String;
  base_lte?: String;
  base_gt?: String;
  base_gte?: String;
  base_contains?: String;
  base_not_contains?: String;
  base_starts_with?: String;
  base_not_starts_with?: String;
  base_ends_with?: String;
  base_not_ends_with?: String;
  quote?: String;
  quote_not?: String;
  quote_in?: String[] | String;
  quote_not_in?: String[] | String;
  quote_lt?: String;
  quote_lte?: String;
  quote_gt?: String;
  quote_gte?: String;
  quote_contains?: String;
  quote_not_contains?: String;
  quote_starts_with?: String;
  quote_not_starts_with?: String;
  quote_ends_with?: String;
  quote_not_ends_with?: String;
  dashboard?: DashboardWhereInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export type DashboardWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export type ChartWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserCreateInput {
  name: String;
  dashboard?: DashboardCreateOneWithoutUserInput;
}

export interface DashboardCreateOneWithoutUserInput {
  create?: DashboardCreateWithoutUserInput;
  connect?: DashboardWhereUniqueInput;
}

export interface DashboardCreateWithoutUserInput {
  charts?: ChartCreateManyWithoutDashboardInput;
}

export interface ChartCreateManyWithoutDashboardInput {
  create?:
    | ChartCreateWithoutDashboardInput[]
    | ChartCreateWithoutDashboardInput;
  connect?: ChartWhereUniqueInput[] | ChartWhereUniqueInput;
}

export interface ChartCreateWithoutDashboardInput {
  from: DateTimeInput;
  to: DateTimeInput;
  period: Period;
  base: String;
  quote: String;
}

export interface DashboardCreateInput {
  user: UserCreateOneWithoutDashboardInput;
  charts?: ChartCreateManyWithoutDashboardInput;
}

export interface UserCreateOneWithoutDashboardInput {
  create?: UserCreateWithoutDashboardInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateWithoutDashboardInput {
  name: String;
}

export interface ChartCreateInput {
  from: DateTimeInput;
  to: DateTimeInput;
  period: Period;
  base: String;
  quote: String;
  dashboard: DashboardCreateOneWithoutChartsInput;
}

export interface DashboardCreateOneWithoutChartsInput {
  create?: DashboardCreateWithoutChartsInput;
  connect?: DashboardWhereUniqueInput;
}

export interface DashboardCreateWithoutChartsInput {
  user: UserCreateOneWithoutDashboardInput;
}

export interface UserUpdateInput {
  name?: String;
  dashboard?: DashboardUpdateOneWithoutUserInput;
}

export interface DashboardUpdateOneWithoutUserInput {
  create?: DashboardCreateWithoutUserInput;
  connect?: DashboardWhereUniqueInput;
  disconnect?: Boolean;
  delete?: Boolean;
  update?: DashboardUpdateWithoutUserDataInput;
  upsert?: DashboardUpsertWithoutUserInput;
}

export interface DashboardUpdateWithoutUserDataInput {
  charts?: ChartUpdateManyWithoutDashboardInput;
}

export interface ChartUpdateManyWithoutDashboardInput {
  create?:
    | ChartCreateWithoutDashboardInput[]
    | ChartCreateWithoutDashboardInput;
  connect?: ChartWhereUniqueInput[] | ChartWhereUniqueInput;
  disconnect?: ChartWhereUniqueInput[] | ChartWhereUniqueInput;
  delete?: ChartWhereUniqueInput[] | ChartWhereUniqueInput;
  update?:
    | ChartUpdateWithWhereUniqueWithoutDashboardInput[]
    | ChartUpdateWithWhereUniqueWithoutDashboardInput;
  updateMany?:
    | ChartUpdateManyWithWhereNestedInput[]
    | ChartUpdateManyWithWhereNestedInput;
  deleteMany?: ChartScalarWhereInput[] | ChartScalarWhereInput;
  upsert?:
    | ChartUpsertWithWhereUniqueWithoutDashboardInput[]
    | ChartUpsertWithWhereUniqueWithoutDashboardInput;
}

export interface ChartUpdateWithWhereUniqueWithoutDashboardInput {
  where: ChartWhereUniqueInput;
  data: ChartUpdateWithoutDashboardDataInput;
}

export interface ChartUpdateWithoutDashboardDataInput {
  from?: DateTimeInput;
  to?: DateTimeInput;
  period?: Period;
  base?: String;
  quote?: String;
}

export interface ChartUpdateManyWithWhereNestedInput {
  where: ChartScalarWhereInput;
  data: ChartUpdateManyDataInput;
}

export interface ChartScalarWhereInput {
  AND?: ChartScalarWhereInput[] | ChartScalarWhereInput;
  OR?: ChartScalarWhereInput[] | ChartScalarWhereInput;
  NOT?: ChartScalarWhereInput[] | ChartScalarWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  from?: DateTimeInput;
  from_not?: DateTimeInput;
  from_in?: DateTimeInput[] | DateTimeInput;
  from_not_in?: DateTimeInput[] | DateTimeInput;
  from_lt?: DateTimeInput;
  from_lte?: DateTimeInput;
  from_gt?: DateTimeInput;
  from_gte?: DateTimeInput;
  to?: DateTimeInput;
  to_not?: DateTimeInput;
  to_in?: DateTimeInput[] | DateTimeInput;
  to_not_in?: DateTimeInput[] | DateTimeInput;
  to_lt?: DateTimeInput;
  to_lte?: DateTimeInput;
  to_gt?: DateTimeInput;
  to_gte?: DateTimeInput;
  period?: Period;
  period_not?: Period;
  period_in?: Period[] | Period;
  period_not_in?: Period[] | Period;
  base?: String;
  base_not?: String;
  base_in?: String[] | String;
  base_not_in?: String[] | String;
  base_lt?: String;
  base_lte?: String;
  base_gt?: String;
  base_gte?: String;
  base_contains?: String;
  base_not_contains?: String;
  base_starts_with?: String;
  base_not_starts_with?: String;
  base_ends_with?: String;
  base_not_ends_with?: String;
  quote?: String;
  quote_not?: String;
  quote_in?: String[] | String;
  quote_not_in?: String[] | String;
  quote_lt?: String;
  quote_lte?: String;
  quote_gt?: String;
  quote_gte?: String;
  quote_contains?: String;
  quote_not_contains?: String;
  quote_starts_with?: String;
  quote_not_starts_with?: String;
  quote_ends_with?: String;
  quote_not_ends_with?: String;
}

export interface ChartUpdateManyDataInput {
  from?: DateTimeInput;
  to?: DateTimeInput;
  period?: Period;
  base?: String;
  quote?: String;
}

export interface ChartUpsertWithWhereUniqueWithoutDashboardInput {
  where: ChartWhereUniqueInput;
  update: ChartUpdateWithoutDashboardDataInput;
  create: ChartCreateWithoutDashboardInput;
}

export interface DashboardUpsertWithoutUserInput {
  update: DashboardUpdateWithoutUserDataInput;
  create: DashboardCreateWithoutUserInput;
}

export interface DashboardUpdateInput {
  user?: UserUpdateOneRequiredWithoutDashboardInput;
  charts?: ChartUpdateManyWithoutDashboardInput;
}

export interface UserUpdateOneRequiredWithoutDashboardInput {
  create?: UserCreateWithoutDashboardInput;
  connect?: UserWhereUniqueInput;
  update?: UserUpdateWithoutDashboardDataInput;
  upsert?: UserUpsertWithoutDashboardInput;
}

export interface UserUpdateWithoutDashboardDataInput {
  name?: String;
}

export interface UserUpsertWithoutDashboardInput {
  update: UserUpdateWithoutDashboardDataInput;
  create: UserCreateWithoutDashboardInput;
}

export interface ChartUpdateInput {
  from?: DateTimeInput;
  to?: DateTimeInput;
  period?: Period;
  base?: String;
  quote?: String;
  dashboard?: DashboardUpdateOneRequiredWithoutChartsInput;
}

export interface DashboardUpdateOneRequiredWithoutChartsInput {
  create?: DashboardCreateWithoutChartsInput;
  connect?: DashboardWhereUniqueInput;
  update?: DashboardUpdateWithoutChartsDataInput;
  upsert?: DashboardUpsertWithoutChartsInput;
}

export interface DashboardUpdateWithoutChartsDataInput {
  user?: UserUpdateOneRequiredWithoutDashboardInput;
}

export interface DashboardUpsertWithoutChartsInput {
  update: DashboardUpdateWithoutChartsDataInput;
  create: DashboardCreateWithoutChartsInput;
}

export interface UserUpdateManyMutationInput {
  name?: String;
}

export interface ChartUpdateManyMutationInput {
  from?: DateTimeInput;
  to?: DateTimeInput;
  period?: Period;
  base?: String;
  quote?: String;
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
}

export interface DashboardSubscriptionWhereInput {
  AND?: DashboardSubscriptionWhereInput[] | DashboardSubscriptionWhereInput;
  OR?: DashboardSubscriptionWhereInput[] | DashboardSubscriptionWhereInput;
  NOT?: DashboardSubscriptionWhereInput[] | DashboardSubscriptionWhereInput;
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: DashboardWhereInput;
}

export interface ChartSubscriptionWhereInput {
  AND?: ChartSubscriptionWhereInput[] | ChartSubscriptionWhereInput;
  OR?: ChartSubscriptionWhereInput[] | ChartSubscriptionWhereInput;
  NOT?: ChartSubscriptionWhereInput[] | ChartSubscriptionWhereInput;
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ChartWhereInput;
}

/*
 * An object with an ID

 */
export interface NodeNode {
  id: ID_Output;
}

export interface User extends Node {
  id: ID_Output;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable, Node {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  dashboard: <T = DashboardPromise>() => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable,
    Node {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  dashboard: <T = DashboardSubscription>() => T;
}

export interface Dashboard extends Node {
  id: ID_Output;
}

export interface DashboardPromise
  extends Promise<Dashboard>,
    Fragmentable,
    Node {
  id: () => Promise<ID_Output>;
  user: <T = UserPromise>() => T;
  charts: <T = FragmentableArray<Chart>>(
    args?: {
      where?: ChartWhereInput;
      orderBy?: ChartOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface DashboardSubscription
  extends Promise<AsyncIterator<Dashboard>>,
    Fragmentable,
    Node {
  id: () => Promise<AsyncIterator<ID_Output>>;
  user: <T = UserSubscription>() => T;
  charts: <T = Promise<AsyncIterator<ChartSubscription>>>(
    args?: {
      where?: ChartWhereInput;
      orderBy?: ChartOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface Chart extends Node {
  id: ID_Output;
  from: DateTimeOutput;
  to: DateTimeOutput;
  period: Period;
  base: String;
  quote: String;
}

export interface ChartPromise extends Promise<Chart>, Fragmentable, Node {
  id: () => Promise<ID_Output>;
  from: () => Promise<DateTimeOutput>;
  to: () => Promise<DateTimeOutput>;
  period: () => Promise<Period>;
  base: () => Promise<String>;
  quote: () => Promise<String>;
  dashboard: <T = DashboardPromise>() => T;
}

export interface ChartSubscription
  extends Promise<AsyncIterator<Chart>>,
    Fragmentable,
    Node {
  id: () => Promise<AsyncIterator<ID_Output>>;
  from: () => Promise<AsyncIterator<DateTimeOutput>>;
  to: () => Promise<AsyncIterator<DateTimeOutput>>;
  period: () => Promise<AsyncIterator<Period>>;
  base: () => Promise<AsyncIterator<String>>;
  quote: () => Promise<AsyncIterator<String>>;
  dashboard: <T = DashboardSubscription>() => T;
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

/*
 * A connection to a list of items.

 */
export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

/*
 * A connection to a list of items.

 */
export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User;
  cursor: String;
}

/*
 * An edge in a connection.

 */
export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

/*
 * An edge in a connection.

 */
export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
 * A connection to a list of items.

 */
export interface DashboardConnection {
  pageInfo: PageInfo;
  edges: DashboardEdge[];
}

/*
 * A connection to a list of items.

 */
export interface DashboardConnectionPromise
  extends Promise<DashboardConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<DashboardEdge>>() => T;
  aggregate: <T = AggregateDashboardPromise>() => T;
}

/*
 * A connection to a list of items.

 */
export interface DashboardConnectionSubscription
  extends Promise<AsyncIterator<DashboardConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<DashboardEdgeSubscription>>>() => T;
  aggregate: <T = AggregateDashboardSubscription>() => T;
}

/*
 * An edge in a connection.

 */
export interface DashboardEdge {
  node: Dashboard;
  cursor: String;
}

/*
 * An edge in a connection.

 */
export interface DashboardEdgePromise
  extends Promise<DashboardEdge>,
    Fragmentable {
  node: <T = DashboardPromise>() => T;
  cursor: () => Promise<String>;
}

/*
 * An edge in a connection.

 */
export interface DashboardEdgeSubscription
  extends Promise<AsyncIterator<DashboardEdge>>,
    Fragmentable {
  node: <T = DashboardSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateDashboard {
  count: Int;
}

export interface AggregateDashboardPromise
  extends Promise<AggregateDashboard>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateDashboardSubscription
  extends Promise<AsyncIterator<AggregateDashboard>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
 * A connection to a list of items.

 */
export interface ChartConnection {
  pageInfo: PageInfo;
  edges: ChartEdge[];
}

/*
 * A connection to a list of items.

 */
export interface ChartConnectionPromise
  extends Promise<ChartConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ChartEdge>>() => T;
  aggregate: <T = AggregateChartPromise>() => T;
}

/*
 * A connection to a list of items.

 */
export interface ChartConnectionSubscription
  extends Promise<AsyncIterator<ChartConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ChartEdgeSubscription>>>() => T;
  aggregate: <T = AggregateChartSubscription>() => T;
}

/*
 * An edge in a connection.

 */
export interface ChartEdge {
  node: Chart;
  cursor: String;
}

/*
 * An edge in a connection.

 */
export interface ChartEdgePromise extends Promise<ChartEdge>, Fragmentable {
  node: <T = ChartPromise>() => T;
  cursor: () => Promise<String>;
}

/*
 * An edge in a connection.

 */
export interface ChartEdgeSubscription
  extends Promise<AsyncIterator<ChartEdge>>,
    Fragmentable {
  node: <T = ChartSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateChart {
  count: Int;
}

export interface AggregateChartPromise
  extends Promise<AggregateChart>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateChartSubscription
  extends Promise<AsyncIterator<AggregateChart>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface DashboardSubscriptionPayload {
  mutation: MutationType;
  node: Dashboard;
  updatedFields: String[];
  previousValues: DashboardPreviousValues;
}

export interface DashboardSubscriptionPayloadPromise
  extends Promise<DashboardSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = DashboardPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = DashboardPreviousValuesPromise>() => T;
}

export interface DashboardSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<DashboardSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = DashboardSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = DashboardPreviousValuesSubscription>() => T;
}

export interface DashboardPreviousValues {
  id: ID_Output;
}

export interface DashboardPreviousValuesPromise
  extends Promise<DashboardPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface DashboardPreviousValuesSubscription
  extends Promise<AsyncIterator<DashboardPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
}

export interface ChartSubscriptionPayload {
  mutation: MutationType;
  node: Chart;
  updatedFields: String[];
  previousValues: ChartPreviousValues;
}

export interface ChartSubscriptionPayloadPromise
  extends Promise<ChartSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ChartPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ChartPreviousValuesPromise>() => T;
}

export interface ChartSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ChartSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ChartSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ChartPreviousValuesSubscription>() => T;
}

export interface ChartPreviousValues {
  id: ID_Output;
  from: DateTimeOutput;
  to: DateTimeOutput;
  period: Period;
  base: String;
  quote: String;
}

export interface ChartPreviousValuesPromise
  extends Promise<ChartPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  from: () => Promise<DateTimeOutput>;
  to: () => Promise<DateTimeOutput>;
  period: () => Promise<Period>;
  base: () => Promise<String>;
  quote: () => Promise<String>;
}

export interface ChartPreviousValuesSubscription
  extends Promise<AsyncIterator<ChartPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  from: () => Promise<AsyncIterator<DateTimeOutput>>;
  to: () => Promise<AsyncIterator<DateTimeOutput>>;
  period: () => Promise<AsyncIterator<Period>>;
  base: () => Promise<AsyncIterator<String>>;
  quote: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string;

/*
Raw JSON value
*/
export type Json = any;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Period",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Dashboard",
    embedded: false
  },
  {
    name: "Chart",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
