/**
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export {Protocol} from 'devtools-protocol';
export * from 'puppeteer-core/internal/common/Device.js';
export * from 'puppeteer-core/internal/common/Errors.js';
export * from 'puppeteer-core/internal/common/PredefinedNetworkConditions.js';
export * from 'puppeteer-core/internal/common/Puppeteer.js';
/**
 * @deprecated Use the query handler API defined on {@link Puppeteer}
 */
export * from 'puppeteer-core/internal/common/QueryHandler.js';
export * from 'puppeteer-core/internal/node/BrowserFetcher.js';
export {LaunchOptions} from 'puppeteer-core/internal/node/LaunchOptions.js';

import {PuppeteerNode} from 'puppeteer-core/internal/node/PuppeteerNode.js';
import {getConfiguration} from './getConfiguration.js';

const configuration = getConfiguration();

/**
 * @public
 */
const puppeteer = new PuppeteerNode({
  isPuppeteerCore: false,
  configuration,
});

export const {
  connect,
  createBrowserFetcher,
  defaultArgs,
  executablePath,
  launch,
} = puppeteer;

export default puppeteer;
