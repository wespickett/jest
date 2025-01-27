/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Resolver from './resolver';

export type {AsyncResolver, SyncResolver} from './defaultResolver';
export type {
  FindNodeModuleConfig,
  ResolveModuleConfig,
  ResolverObject as JestResolver,
} from './resolver';
export * from './utils';

export default Resolver;
