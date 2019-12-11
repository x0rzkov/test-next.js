module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateChart {
  count: Int!
}

type AggregateDashboard {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Chart {
  id: ID!
  from: DateTime!
  to: DateTime!
  period: Period!
  base: String!
  quote: String!
  dashboard: Dashboard!
}

type ChartConnection {
  pageInfo: PageInfo!
  edges: [ChartEdge]!
  aggregate: AggregateChart!
}

input ChartCreateInput {
  id: ID
  from: DateTime!
  to: DateTime!
  period: Period!
  base: String!
  quote: String!
  dashboard: DashboardCreateOneWithoutChartsInput!
}

input ChartCreateManyWithoutDashboardInput {
  create: [ChartCreateWithoutDashboardInput!]
  connect: [ChartWhereUniqueInput!]
}

input ChartCreateWithoutDashboardInput {
  id: ID
  from: DateTime!
  to: DateTime!
  period: Period!
  base: String!
  quote: String!
}

type ChartEdge {
  node: Chart!
  cursor: String!
}

enum ChartOrderByInput {
  id_ASC
  id_DESC
  from_ASC
  from_DESC
  to_ASC
  to_DESC
  period_ASC
  period_DESC
  base_ASC
  base_DESC
  quote_ASC
  quote_DESC
}

type ChartPreviousValues {
  id: ID!
  from: DateTime!
  to: DateTime!
  period: Period!
  base: String!
  quote: String!
}

input ChartScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  from: DateTime
  from_not: DateTime
  from_in: [DateTime!]
  from_not_in: [DateTime!]
  from_lt: DateTime
  from_lte: DateTime
  from_gt: DateTime
  from_gte: DateTime
  to: DateTime
  to_not: DateTime
  to_in: [DateTime!]
  to_not_in: [DateTime!]
  to_lt: DateTime
  to_lte: DateTime
  to_gt: DateTime
  to_gte: DateTime
  period: Period
  period_not: Period
  period_in: [Period!]
  period_not_in: [Period!]
  base: String
  base_not: String
  base_in: [String!]
  base_not_in: [String!]
  base_lt: String
  base_lte: String
  base_gt: String
  base_gte: String
  base_contains: String
  base_not_contains: String
  base_starts_with: String
  base_not_starts_with: String
  base_ends_with: String
  base_not_ends_with: String
  quote: String
  quote_not: String
  quote_in: [String!]
  quote_not_in: [String!]
  quote_lt: String
  quote_lte: String
  quote_gt: String
  quote_gte: String
  quote_contains: String
  quote_not_contains: String
  quote_starts_with: String
  quote_not_starts_with: String
  quote_ends_with: String
  quote_not_ends_with: String
  AND: [ChartScalarWhereInput!]
  OR: [ChartScalarWhereInput!]
  NOT: [ChartScalarWhereInput!]
}

type ChartSubscriptionPayload {
  mutation: MutationType!
  node: Chart
  updatedFields: [String!]
  previousValues: ChartPreviousValues
}

input ChartSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ChartWhereInput
  AND: [ChartSubscriptionWhereInput!]
  OR: [ChartSubscriptionWhereInput!]
  NOT: [ChartSubscriptionWhereInput!]
}

input ChartUpdateInput {
  from: DateTime
  to: DateTime
  period: Period
  base: String
  quote: String
  dashboard: DashboardUpdateOneRequiredWithoutChartsInput
}

input ChartUpdateManyDataInput {
  from: DateTime
  to: DateTime
  period: Period
  base: String
  quote: String
}

input ChartUpdateManyMutationInput {
  from: DateTime
  to: DateTime
  period: Period
  base: String
  quote: String
}

input ChartUpdateManyWithoutDashboardInput {
  create: [ChartCreateWithoutDashboardInput!]
  delete: [ChartWhereUniqueInput!]
  connect: [ChartWhereUniqueInput!]
  set: [ChartWhereUniqueInput!]
  disconnect: [ChartWhereUniqueInput!]
  update: [ChartUpdateWithWhereUniqueWithoutDashboardInput!]
  upsert: [ChartUpsertWithWhereUniqueWithoutDashboardInput!]
  deleteMany: [ChartScalarWhereInput!]
  updateMany: [ChartUpdateManyWithWhereNestedInput!]
}

input ChartUpdateManyWithWhereNestedInput {
  where: ChartScalarWhereInput!
  data: ChartUpdateManyDataInput!
}

input ChartUpdateWithoutDashboardDataInput {
  from: DateTime
  to: DateTime
  period: Period
  base: String
  quote: String
}

input ChartUpdateWithWhereUniqueWithoutDashboardInput {
  where: ChartWhereUniqueInput!
  data: ChartUpdateWithoutDashboardDataInput!
}

input ChartUpsertWithWhereUniqueWithoutDashboardInput {
  where: ChartWhereUniqueInput!
  update: ChartUpdateWithoutDashboardDataInput!
  create: ChartCreateWithoutDashboardInput!
}

input ChartWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  from: DateTime
  from_not: DateTime
  from_in: [DateTime!]
  from_not_in: [DateTime!]
  from_lt: DateTime
  from_lte: DateTime
  from_gt: DateTime
  from_gte: DateTime
  to: DateTime
  to_not: DateTime
  to_in: [DateTime!]
  to_not_in: [DateTime!]
  to_lt: DateTime
  to_lte: DateTime
  to_gt: DateTime
  to_gte: DateTime
  period: Period
  period_not: Period
  period_in: [Period!]
  period_not_in: [Period!]
  base: String
  base_not: String
  base_in: [String!]
  base_not_in: [String!]
  base_lt: String
  base_lte: String
  base_gt: String
  base_gte: String
  base_contains: String
  base_not_contains: String
  base_starts_with: String
  base_not_starts_with: String
  base_ends_with: String
  base_not_ends_with: String
  quote: String
  quote_not: String
  quote_in: [String!]
  quote_not_in: [String!]
  quote_lt: String
  quote_lte: String
  quote_gt: String
  quote_gte: String
  quote_contains: String
  quote_not_contains: String
  quote_starts_with: String
  quote_not_starts_with: String
  quote_ends_with: String
  quote_not_ends_with: String
  dashboard: DashboardWhereInput
  AND: [ChartWhereInput!]
  OR: [ChartWhereInput!]
  NOT: [ChartWhereInput!]
}

input ChartWhereUniqueInput {
  id: ID
}

type Dashboard {
  id: ID!
  user: User!
  charts(where: ChartWhereInput, orderBy: ChartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chart!]
}

type DashboardConnection {
  pageInfo: PageInfo!
  edges: [DashboardEdge]!
  aggregate: AggregateDashboard!
}

input DashboardCreateInput {
  id: ID
  user: UserCreateOneWithoutDashboardInput!
  charts: ChartCreateManyWithoutDashboardInput
}

input DashboardCreateOneWithoutChartsInput {
  create: DashboardCreateWithoutChartsInput
  connect: DashboardWhereUniqueInput
}

input DashboardCreateOneWithoutUserInput {
  create: DashboardCreateWithoutUserInput
  connect: DashboardWhereUniqueInput
}

input DashboardCreateWithoutChartsInput {
  id: ID
  user: UserCreateOneWithoutDashboardInput!
}

input DashboardCreateWithoutUserInput {
  id: ID
  charts: ChartCreateManyWithoutDashboardInput
}

type DashboardEdge {
  node: Dashboard!
  cursor: String!
}

enum DashboardOrderByInput {
  id_ASC
  id_DESC
}

type DashboardPreviousValues {
  id: ID!
}

type DashboardSubscriptionPayload {
  mutation: MutationType!
  node: Dashboard
  updatedFields: [String!]
  previousValues: DashboardPreviousValues
}

input DashboardSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DashboardWhereInput
  AND: [DashboardSubscriptionWhereInput!]
  OR: [DashboardSubscriptionWhereInput!]
  NOT: [DashboardSubscriptionWhereInput!]
}

input DashboardUpdateInput {
  user: UserUpdateOneRequiredWithoutDashboardInput
  charts: ChartUpdateManyWithoutDashboardInput
}

input DashboardUpdateOneRequiredWithoutChartsInput {
  create: DashboardCreateWithoutChartsInput
  update: DashboardUpdateWithoutChartsDataInput
  upsert: DashboardUpsertWithoutChartsInput
  connect: DashboardWhereUniqueInput
}

input DashboardUpdateOneWithoutUserInput {
  create: DashboardCreateWithoutUserInput
  update: DashboardUpdateWithoutUserDataInput
  upsert: DashboardUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: DashboardWhereUniqueInput
}

input DashboardUpdateWithoutChartsDataInput {
  user: UserUpdateOneRequiredWithoutDashboardInput
}

input DashboardUpdateWithoutUserDataInput {
  charts: ChartUpdateManyWithoutDashboardInput
}

input DashboardUpsertWithoutChartsInput {
  update: DashboardUpdateWithoutChartsDataInput!
  create: DashboardCreateWithoutChartsInput!
}

input DashboardUpsertWithoutUserInput {
  update: DashboardUpdateWithoutUserDataInput!
  create: DashboardCreateWithoutUserInput!
}

input DashboardWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  charts_every: ChartWhereInput
  charts_some: ChartWhereInput
  charts_none: ChartWhereInput
  AND: [DashboardWhereInput!]
  OR: [DashboardWhereInput!]
  NOT: [DashboardWhereInput!]
}

input DashboardWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createChart(data: ChartCreateInput!): Chart!
  updateChart(data: ChartUpdateInput!, where: ChartWhereUniqueInput!): Chart
  updateManyCharts(data: ChartUpdateManyMutationInput!, where: ChartWhereInput): BatchPayload!
  upsertChart(where: ChartWhereUniqueInput!, create: ChartCreateInput!, update: ChartUpdateInput!): Chart!
  deleteChart(where: ChartWhereUniqueInput!): Chart
  deleteManyCharts(where: ChartWhereInput): BatchPayload!
  createDashboard(data: DashboardCreateInput!): Dashboard!
  updateDashboard(data: DashboardUpdateInput!, where: DashboardWhereUniqueInput!): Dashboard
  upsertDashboard(where: DashboardWhereUniqueInput!, create: DashboardCreateInput!, update: DashboardUpdateInput!): Dashboard!
  deleteDashboard(where: DashboardWhereUniqueInput!): Dashboard
  deleteManyDashboards(where: DashboardWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum Period {
  MINUTE1
  MINUTE15
  HOUR1
  HOUR6
  HOUR12
  DAY1
}

type Query {
  chart(where: ChartWhereUniqueInput!): Chart
  charts(where: ChartWhereInput, orderBy: ChartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chart]!
  chartsConnection(where: ChartWhereInput, orderBy: ChartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChartConnection!
  dashboard(where: DashboardWhereUniqueInput!): Dashboard
  dashboards(where: DashboardWhereInput, orderBy: DashboardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Dashboard]!
  dashboardsConnection(where: DashboardWhereInput, orderBy: DashboardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DashboardConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  chart(where: ChartSubscriptionWhereInput): ChartSubscriptionPayload
  dashboard(where: DashboardSubscriptionWhereInput): DashboardSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  dashboard: Dashboard
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  dashboard: DashboardCreateOneWithoutUserInput
}

input UserCreateOneWithoutDashboardInput {
  create: UserCreateWithoutDashboardInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutDashboardInput {
  id: ID
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  dashboard: DashboardUpdateOneWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
}

input UserUpdateOneRequiredWithoutDashboardInput {
  create: UserCreateWithoutDashboardInput
  update: UserUpdateWithoutDashboardDataInput
  upsert: UserUpsertWithoutDashboardInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutDashboardDataInput {
  name: String
}

input UserUpsertWithoutDashboardInput {
  update: UserUpdateWithoutDashboardDataInput!
  create: UserCreateWithoutDashboardInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  dashboard: DashboardWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    