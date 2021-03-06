/**
 * Copyright 2020 Goldman Sachs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { observable, action, computed } from 'mobx';
import { hashArray, hashObject } from 'Utilities/HashUtil';
import { Hashable } from 'MetaModelUtility';
import { HASH_STRUCTURE } from 'MetaModelConst';

export class ConfigurationProperty implements Hashable {
  @observable name: string;
  @observable.ref value: unknown;

  constructor(name: string, value: unknown) {
    this.name = name;
    this.value = value;
  }

  @action setValue(value: unknown): void { this.value = value }

  @computed get hashCode(): string {
    return hashArray([
      HASH_STRUCTURE.CONFIGURATION_PROPERTY,
      this.name,
      hashObject(this.value)
    ]);
  }
}
