/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AsessmentsRouteImport } from './routes/_asessments/route'
import { Route as IndexImport } from './routes/index'
import { Route as AsessmentsResillianceImport } from './routes/_asessments/resilliance'
import { Route as AsessmentsPurposeImport } from './routes/_asessments/purpose'
import { Route as AsessmentsInterdependenceImport } from './routes/_asessments/interdependence'
import { Route as AsessmentsEmotionalIntelligenceImport } from './routes/_asessments/emotional-intelligence'
import { Route as AsessmentsChangeImport } from './routes/_asessments/change'

// Create/Update Routes

const AsessmentsRouteRoute = AsessmentsRouteImport.update({
  id: '/_asessments',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AsessmentsResillianceRoute = AsessmentsResillianceImport.update({
  id: '/resilliance',
  path: '/resilliance',
  getParentRoute: () => AsessmentsRouteRoute,
} as any)

const AsessmentsPurposeRoute = AsessmentsPurposeImport.update({
  id: '/purpose',
  path: '/purpose',
  getParentRoute: () => AsessmentsRouteRoute,
} as any)

const AsessmentsInterdependenceRoute = AsessmentsInterdependenceImport.update({
  id: '/interdependence',
  path: '/interdependence',
  getParentRoute: () => AsessmentsRouteRoute,
} as any)

const AsessmentsEmotionalIntelligenceRoute =
  AsessmentsEmotionalIntelligenceImport.update({
    id: '/emotional-intelligence',
    path: '/emotional-intelligence',
    getParentRoute: () => AsessmentsRouteRoute,
  } as any)

const AsessmentsChangeRoute = AsessmentsChangeImport.update({
  id: '/change',
  path: '/change',
  getParentRoute: () => AsessmentsRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_asessments': {
      id: '/_asessments'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AsessmentsRouteImport
      parentRoute: typeof rootRoute
    }
    '/_asessments/change': {
      id: '/_asessments/change'
      path: '/change'
      fullPath: '/change'
      preLoaderRoute: typeof AsessmentsChangeImport
      parentRoute: typeof AsessmentsRouteImport
    }
    '/_asessments/emotional-intelligence': {
      id: '/_asessments/emotional-intelligence'
      path: '/emotional-intelligence'
      fullPath: '/emotional-intelligence'
      preLoaderRoute: typeof AsessmentsEmotionalIntelligenceImport
      parentRoute: typeof AsessmentsRouteImport
    }
    '/_asessments/interdependence': {
      id: '/_asessments/interdependence'
      path: '/interdependence'
      fullPath: '/interdependence'
      preLoaderRoute: typeof AsessmentsInterdependenceImport
      parentRoute: typeof AsessmentsRouteImport
    }
    '/_asessments/purpose': {
      id: '/_asessments/purpose'
      path: '/purpose'
      fullPath: '/purpose'
      preLoaderRoute: typeof AsessmentsPurposeImport
      parentRoute: typeof AsessmentsRouteImport
    }
    '/_asessments/resilliance': {
      id: '/_asessments/resilliance'
      path: '/resilliance'
      fullPath: '/resilliance'
      preLoaderRoute: typeof AsessmentsResillianceImport
      parentRoute: typeof AsessmentsRouteImport
    }
  }
}

// Create and export the route tree

interface AsessmentsRouteRouteChildren {
  AsessmentsChangeRoute: typeof AsessmentsChangeRoute
  AsessmentsEmotionalIntelligenceRoute: typeof AsessmentsEmotionalIntelligenceRoute
  AsessmentsInterdependenceRoute: typeof AsessmentsInterdependenceRoute
  AsessmentsPurposeRoute: typeof AsessmentsPurposeRoute
  AsessmentsResillianceRoute: typeof AsessmentsResillianceRoute
}

const AsessmentsRouteRouteChildren: AsessmentsRouteRouteChildren = {
  AsessmentsChangeRoute: AsessmentsChangeRoute,
  AsessmentsEmotionalIntelligenceRoute: AsessmentsEmotionalIntelligenceRoute,
  AsessmentsInterdependenceRoute: AsessmentsInterdependenceRoute,
  AsessmentsPurposeRoute: AsessmentsPurposeRoute,
  AsessmentsResillianceRoute: AsessmentsResillianceRoute,
}

const AsessmentsRouteRouteWithChildren = AsessmentsRouteRoute._addFileChildren(
  AsessmentsRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof AsessmentsRouteRouteWithChildren
  '/change': typeof AsessmentsChangeRoute
  '/emotional-intelligence': typeof AsessmentsEmotionalIntelligenceRoute
  '/interdependence': typeof AsessmentsInterdependenceRoute
  '/purpose': typeof AsessmentsPurposeRoute
  '/resilliance': typeof AsessmentsResillianceRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof AsessmentsRouteRouteWithChildren
  '/change': typeof AsessmentsChangeRoute
  '/emotional-intelligence': typeof AsessmentsEmotionalIntelligenceRoute
  '/interdependence': typeof AsessmentsInterdependenceRoute
  '/purpose': typeof AsessmentsPurposeRoute
  '/resilliance': typeof AsessmentsResillianceRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_asessments': typeof AsessmentsRouteRouteWithChildren
  '/_asessments/change': typeof AsessmentsChangeRoute
  '/_asessments/emotional-intelligence': typeof AsessmentsEmotionalIntelligenceRoute
  '/_asessments/interdependence': typeof AsessmentsInterdependenceRoute
  '/_asessments/purpose': typeof AsessmentsPurposeRoute
  '/_asessments/resilliance': typeof AsessmentsResillianceRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/change'
    | '/emotional-intelligence'
    | '/interdependence'
    | '/purpose'
    | '/resilliance'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/change'
    | '/emotional-intelligence'
    | '/interdependence'
    | '/purpose'
    | '/resilliance'
  id:
    | '__root__'
    | '/'
    | '/_asessments'
    | '/_asessments/change'
    | '/_asessments/emotional-intelligence'
    | '/_asessments/interdependence'
    | '/_asessments/purpose'
    | '/_asessments/resilliance'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AsessmentsRouteRoute: typeof AsessmentsRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AsessmentsRouteRoute: AsessmentsRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_asessments"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_asessments": {
      "filePath": "_asessments/route.tsx",
      "children": [
        "/_asessments/change",
        "/_asessments/emotional-intelligence",
        "/_asessments/interdependence",
        "/_asessments/purpose",
        "/_asessments/resilliance"
      ]
    },
    "/_asessments/change": {
      "filePath": "_asessments/change.tsx",
      "parent": "/_asessments"
    },
    "/_asessments/emotional-intelligence": {
      "filePath": "_asessments/emotional-intelligence.tsx",
      "parent": "/_asessments"
    },
    "/_asessments/interdependence": {
      "filePath": "_asessments/interdependence.tsx",
      "parent": "/_asessments"
    },
    "/_asessments/purpose": {
      "filePath": "_asessments/purpose.tsx",
      "parent": "/_asessments"
    },
    "/_asessments/resilliance": {
      "filePath": "_asessments/resilliance.tsx",
      "parent": "/_asessments"
    }
  }
}
ROUTE_MANIFEST_END */
