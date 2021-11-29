import { css } from 'lit';

const topcoatStyles = css`
    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    .button-bar {
        display: table;
        table-layout: fixed;
        white-space: nowrap;
        margin: 0;
        padding: 0;
    }

    .button-bar__item {
        display: table-cell;
        width: auto;
        border-radius: 0;
    }

    .button-bar__item > input {
        position: absolute;
        overflow: hidden;
        padding: 0;
        border: 0;
        opacity: 0.001;
        z-index: 1;
        vertical-align: top;
        outline: none;
    }

    .button-bar__button {
        border-radius: inherit;
    }

    .button-bar__item:disabled {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    .button,
    .topcoat-button,
    .topcoat-button--quiet,
    .topcoat-button--large,
    .topcoat-button--large--quiet,
    .topcoat-button--cta,
    .topcoat-button--large--cta,
    .topcoat-button-bar__button,
    .topcoat-button-bar__button--large {
        position: relative;
        display: inline-block;
        vertical-align: top;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        text-decoration: none;
    }

    .button--quiet {
        background: transparent;
        border: 1px solid transparent;
        box-shadow: none;
    }

    .button--disabled,
    .topcoat-button:disabled,
    .topcoat-button--quiet:disabled,
    .topcoat-button--large:disabled,
    .topcoat-button--large--quiet:disabled,
    .topcoat-button--cta:disabled,
    .topcoat-button--large--cta:disabled,
    .topcoat-button-bar__button:disabled,
    .topcoat-button-bar__button--large:disabled {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    .topcoat-button,
    .topcoat-button--quiet,
    .topcoat-button--large,
    .topcoat-button--large--quiet,
    .topcoat-button--cta,
    .topcoat-button--large--cta,
    .topcoat-button-bar__button,
    .topcoat-button-bar__button--large {
        padding: 0 0.563rem;
        font-size: 12px;
        line-height: 1.313rem;
        letter-spacing: 0;
        color: #454545;
        text-shadow: 0 1px #fff;
        vertical-align: top;
        background-color: #e5e9e8;
        box-shadow: inset 0 1px #fff;
        border: 1px solid #9daca9;
        border-radius: 4px;
    }

    .topcoat-button:hover,
    .topcoat-button--quiet:hover,
    .topcoat-button--large:hover,
    .topcoat-button--large--quiet:hover,
    .topcoat-button-bar__button:hover,
    .topcoat-button-bar__button--large:hover {
        background-color: #eff1f1;
    }

    .topcoat-button:focus,
    .topcoat-button--quiet:focus,
    .topcoat-button--quiet:hover:focus,
    .topcoat-button--large:focus,
    .topcoat-button--large--quiet:focus,
    .topcoat-button--large--quiet:hover:focus,
    .topcoat-button--cta:focus,
    .topcoat-button--large--cta:focus,
    .topcoat-button-bar__button:focus,
    .topcoat-button-bar__button--large:focus {
        border: 1px solid #0036ff;
        box-shadow: inset 0 1px rgba(255, 255, 255, 0.36), 0 0 0 2px #6fb5f1;
        outline: 0;
    }

    .topcoat-button:active,
    .topcoat-button--large:active,
    .topcoat-button-bar__button:active,
    .topcoat-button-bar__button--large:active,
    :checked + .topcoat-button-bar__button {
        border: 1px solid #9daca9;
        background-color: #d2d6d6;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.1);
    }

    .topcoat-button--quiet {
        background: transparent;
        border: 1px solid transparent;
        box-shadow: none;
    }

    .topcoat-button--quiet:hover,
    .topcoat-button--large--quiet:hover {
        text-shadow: 0 1px #fff;
        border: 1px solid #9daca9;
        box-shadow: inset 0 1px #fff;
    }

    .topcoat-button--quiet:active,
    .topcoat-button--quiet:focus:active,
    .topcoat-button--large--quiet:active,
    .topcoat-button--large--quiet:focus:active {
        color: #454545;
        text-shadow: 0 1px #fff;
        background-color: #d2d6d6;
        border: 1px solid #9daca9;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.1);
    }

    .topcoat-button--large,
    .topcoat-button--large--quiet,
    .topcoat-button-bar__button--large {
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 1.688rem;
        padding: 0 0.875rem;
    }

    .topcoat-button--large--quiet {
        background: transparent;
        border: 1px solid transparent;
        box-shadow: none;
    }

    .topcoat-button--cta,
    .topcoat-button--large--cta {
        border: 1px solid #134f7f;
        background-color: #288edf;
        box-shadow: inset 0 1px rgba(255, 255, 255, 0.36);
        color: #fff;
        font-weight: 500;
        text-shadow: 0 -1px rgba(0, 0, 0, 0.36);
    }

    .topcoat-button--cta:hover,
    .topcoat-button--large--cta:hover {
        background-color: #4ca1e4;
    }

    .topcoat-button--cta:active,
    .topcoat-button--large--cta:active {
        background-color: #1e7dc8;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.12);
    }

    .topcoat-button--large--cta {
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 1.688rem;
        padding: 0 0.875rem;
    }

    .button-bar,
    .topcoat-button-bar {
        display: table;
        table-layout: fixed;
        white-space: nowrap;
        margin: 0;
        padding: 0;
    }

    .button-bar__item,
    .topcoat-button-bar__item {
        display: table-cell;
        width: auto;
        border-radius: 0;
    }

    .button-bar__item > input,
    .topcoat-button-bar__item > input {
        position: absolute;
        overflow: hidden;
        padding: 0;
        border: 0;
        opacity: 0.001;
        z-index: 1;
        vertical-align: top;
        outline: none;
    }

    .button-bar__button {
        border-radius: inherit;
    }

    .button-bar__item:disabled {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    /* topdoc
  name: Button Bar
  description: Component of grouped buttons
  modifiers:
    :disabled: Disabled state
  markup:
    <div class="topcoat-button-bar">
      <div class="topcoat-button-bar__item">
        <button class="topcoat-button-bar__button">One</button>
      </div>
      <div class="topcoat-button-bar__item">
        <button class="topcoat-button-bar__button">Two</button>
      </div>
      <div class="topcoat-button-bar__item">
        <button class="topcoat-button-bar__button">Three</button>
      </div>
    </div>
  examples:
    mobile button bar: http://codepen.io/Topcoat/pen/kdKyg
  tags:
    - desktop
    - light
    - dark
    - mobile
    - button
    - group
    - bar
*/

    .topcoat-button-bar > .topcoat-button-bar__item:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    .topcoat-button-bar > .topcoat-button-bar__item:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    .topcoat-button-bar__item:first-child > .topcoat-button-bar__button,
    .topcoat-button-bar__item:first-child > .topcoat-button-bar__button--large {
        border-right: none;
    }

    .topcoat-button-bar__item:last-child > .topcoat-button-bar__button,
    .topcoat-button-bar__item:last-child > .topcoat-button-bar__button--large {
        border-left: none;
    }

    .topcoat-button-bar__button {
        border-radius: inherit;
    }

    .topcoat-button-bar__button:focus,
    .topcoat-button-bar__button--large:focus {
        z-index: 1;
    }

    /* topdoc
  name: Large Button Bar
  description: A button bar, only larger
  modifiers:
    :disabled: Disabled state
  markup:
    <div class="topcoat-button-bar">
      <div class="topcoat-button-bar__item">
        <button class="topcoat-button-bar__button--large">One</button>
      </div>
      <div class="topcoat-button-bar__item">
        <button class="topcoat-button-bar__button--large">Two</button>
      </div>
      <div class="topcoat-button-bar__item">
        <button class="topcoat-button-bar__button--large">Three</button>
      </div>
    </div>
  tags:
    - desktop
    - light
    - dark
    - mobile
    - button
    - group
    - bar
    - large
*/

    .topcoat-button-bar__button--large {
        border-radius: inherit;
    }

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    .button {
        position: relative;
        display: inline-block;
        vertical-align: top;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        text-decoration: none;
    }

    .button--quiet {
        background: transparent;
        border: 1px solid transparent;
        box-shadow: none;
    }

    .button--disabled {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    .button,
    .topcoat-button,
    .topcoat-button--quiet,
    .topcoat-button--large,
    .topcoat-button--large--quiet,
    .topcoat-button--cta,
    .topcoat-button--large--cta {
        position: relative;
        display: inline-block;
        vertical-align: top;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        text-decoration: none;
    }

    .button--quiet {
        background: transparent;
        border: 1px solid transparent;
        box-shadow: none;
    }

    .button--disabled,
    .topcoat-button:disabled,
    .topcoat-button--quiet:disabled,
    .topcoat-button--large:disabled,
    .topcoat-button--large--quiet:disabled,
    .topcoat-button--cta:disabled,
    .topcoat-button--large--cta:disabled {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    /* topdoc
  name: Button
  description: A simple button
  modifiers:
    :active: Active state
    :disabled: Disabled state
    :hover: Hover state
    :focus: Focused
  markup:
    <button class="topcoat-button">Button</button>
    <button class="topcoat-button" disabled>Button</button>
  examples:
    mobile button: http://codepen.io/Topcoat/pen/DpKtf
  tags:
    - desktop
    - light
    - mobile
    - button
*/

    .topcoat-button,
    .topcoat-button--quiet,
    .topcoat-button--large,
    .topcoat-button--large--quiet,
    .topcoat-button--cta,
    .topcoat-button--large--cta {
        padding: 0 0.563rem;
        font-size: 12px;
        line-height: 1.313rem;
        letter-spacing: 0;
        color: #454545;
        text-shadow: 0 1px #fff;
        vertical-align: top;
        background-color: #e5e9e8;
        box-shadow: inset 0 1px #fff;
        border: 1px solid #9daca9;
        border-radius: 4px;
    }

    .topcoat-button:hover,
    .topcoat-button--quiet:hover,
    .topcoat-button--large:hover,
    .topcoat-button--large--quiet:hover {
        background-color: #eff1f1;
    }

    .topcoat-button:focus,
    .topcoat-button--quiet:focus,
    .topcoat-button--quiet:hover:focus,
    .topcoat-button--large:focus,
    .topcoat-button--large--quiet:focus,
    .topcoat-button--large--quiet:hover:focus,
    .topcoat-button--cta:focus,
    .topcoat-button--large--cta:focus {
        border: 1px solid #0036ff;
        box-shadow: inset 0 1px rgba(255, 255, 255, 0.36), 0 0 0 2px #6fb5f1;
        outline: 0;
    }

    .topcoat-button:active,
    .topcoat-button--large:active {
        border: 1px solid #9daca9;
        background-color: #d2d6d6;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.1);
    }

    /* topdoc
  name: Quiet Button
  description: A simple, yet quiet button
  modifiers:
    :active: Quiet button active state
    :disabled: Disabled state
    :hover: Hover state
    :focus: Focused
  markup:
    <button class="topcoat-button--quiet">Button</button>
    <button class="topcoat-button--quiet" disabled>Button</button>
  tags:
    - desktop
    - light
    - mobile
    - button
    - quiet
*/

    .topcoat-button--quiet {
        background: transparent;
        border: 1px solid transparent;
        box-shadow: none;
    }

    .topcoat-button--quiet:hover,
    .topcoat-button--large--quiet:hover {
        text-shadow: 0 1px #fff;
        border: 1px solid #9daca9;
        box-shadow: inset 0 1px #fff;
    }

    .topcoat-button--quiet:active,
    .topcoat-button--quiet:focus:active,
    .topcoat-button--large--quiet:active,
    .topcoat-button--large--quiet:focus:active {
        color: #454545;
        text-shadow: 0 1px #fff;
        background-color: #d2d6d6;
        border: 1px solid #9daca9;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.1);
    }

    /* topdoc
  name: Large Button
  description: A big ol button
  modifiers:
    :active: Active state
    :disabled: Disabled state
    :hover: Hover state
    :focus: Focused
  markup:
    <button class="topcoat-button--large" >Button</button>
    <button class="topcoat-button--large" disabled>Button</button>
  tags:
    - desktop
    - light
    - mobile
    - button
    - large
*/

    .topcoat-button--large,
    .topcoat-button--large--quiet {
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 1.688rem;
        padding: 0 0.875rem;
    }

    /* topdoc
  name: Large Quiet Button
  description: A large, yet quiet button
  modifiers:
    :active: Active state
    :disabled: Disabled state
    :hover: Hover state
    :focus: Focused
  markup:
    <button class="topcoat-button--large--quiet" >Button</button>
    <button class="topcoat-button--large--quiet" disabled>Button</button>
  tags:
    - desktop
    - light
    - mobile
    - button
    - large
    - quiet
*/

    .topcoat-button--large--quiet {
        background: transparent;
        border: 1px solid transparent;
        box-shadow: none;
    }

    /* topdoc
  name: Call To Action Button
  description: A CALL TO ARMS, er, ACTION!
  modifiers:
    :active: Active state
    :disabled: Disabled state
    :hover: Hover state
    :focus: Focused
  markup:
    <button class="topcoat-button--cta" >Button</button>
    <button class="topcoat-button--cta" disabled>Button</button>
  tags:
    - desktop
    - light
    - mobile
    - button
    - call to action
*/

    .topcoat-button--cta,
    .topcoat-button--large--cta {
        border: 1px solid #134f7f;
        background-color: #288edf;
        box-shadow: inset 0 1px rgba(255, 255, 255, 0.36);
        color: #fff;
        font-weight: 500;
        text-shadow: 0 -1px rgba(0, 0, 0, 0.36);
    }

    .topcoat-button--cta:hover,
    .topcoat-button--large--cta:hover {
        background-color: #4ca1e4;
    }

    .topcoat-button--cta:active,
    .topcoat-button--large--cta:active {
        background-color: #1e7dc8;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.12);
    }

    /* topdoc
  name: Large Call To Action Button
  description: Like call to action, but bigger
  modifiers:
    :active: Active state
    :disabled: Disabled state
    :hover: Hover state
    :focus: Focused
  markup:
    <button class="topcoat-button--large--cta" >Button</button>
    <button class="topcoat-button--large--cta" disabled>Button</button>
  tags:
    - desktop
    - light
    - mobile
    - button
    - large
    - call to action
*/

    .topcoat-button--large--cta {
        font-size: 0.875rem;
        font-weight: 600;
        line-height: 1.688rem;
        padding: 0 0.875rem;
    }

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    input[type='checkbox'] {
        position: absolute;
        overflow: hidden;
        padding: 0;
        border: 0;
        opacity: 0.001;
        z-index: 1;
        vertical-align: top;
        outline: none;
    }

    .checkbox {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        position: relative;
        display: inline-block;
        vertical-align: top;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .checkbox__label {
        position: relative;
        display: inline-block;
        vertical-align: top;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .checkbox--disabled {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    .checkbox:before,
    .checkbox:after {
        content: '';
        position: absolute;
    }

    .checkbox:before {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
    }

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    input[type='checkbox'] {
        position: absolute;
        overflow: hidden;
        padding: 0;
        border: 0;
        opacity: 0.001;
        z-index: 1;
        vertical-align: top;
        outline: none;
    }

    .checkbox,
    .topcoat-checkbox__checkmark {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        position: relative;
        display: inline-block;
        vertical-align: top;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .checkbox__label,
    .topcoat-checkbox {
        position: relative;
        display: inline-block;
        vertical-align: top;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .checkbox--disabled,
    input[type='checkbox']:disabled + .topcoat-checkbox__checkmark {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    .checkbox:before,
    .checkbox:after,
    .topcoat-checkbox__checkmark:before,
    .topcoat-checkbox__checkmark:after {
        content: '';
        position: absolute;
    }

    .checkbox:before,
    .topcoat-checkbox__checkmark:before {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
    }

    /* topdoc
  name: Checkbox
  description: Default skin for Topcoat checkbox
  modifiers:
    :focus: Focus state
    :disabled: Disabled state
  markup:
    <label class="topcoat-checkbox">
      <input type="checkbox">
      <div class="topcoat-checkbox__checkmark"></div>
      Default
    </label>
    <br>
    <br>
    <label class="topcoat-checkbox">
      <input type="checkbox" disabled>
      <div class="topcoat-checkbox__checkmark"></div>
      Disabled
    </label>
  examples:
    mobile checkbox: http://codepen.io/Topcoat/pen/piHcs
  tags:
    - desktop
    - light
    - mobile
    - checkbox
*/

    .topcoat-checkbox__checkmark {
        height: 1rem;
    }

    input[type='checkbox'] {
        height: 1rem;
        width: 1rem;
        margin-top: 0;
        margin-right: -1rem;
        margin-bottom: -1rem;
        margin-left: 0;
    }

    input[type='checkbox']:checked + .topcoat-checkbox__checkmark:after {
        opacity: 1;
    }

    .topcoat-checkbox {
        line-height: 1rem;
    }

    .topcoat-checkbox__checkmark:before {
        width: 1rem;
        height: 1rem;
        background: #e5e9e8;
        border: 1px solid #9daca9;
        border-radius: 3px;
        box-shadow: inset 0 1px #fff;
    }

    .topcoat-checkbox__checkmark {
        width: 1rem;
        height: 1rem;
    }

    .topcoat-checkbox__checkmark:after {
        top: 2px;
        left: 1px;
        opacity: 0;
        width: 14px;
        height: 4px;
        background: transparent;
        border: 7px solid #454545;
        border-width: 3px;
        border-top: none;
        border-right: none;
        border-radius: 1px;
        -webkit-transform: rotate(-50deg);
        -ms-transform: rotate(-50deg);
        transform: rotate(-50deg);
    }

    input[type='checkbox']:focus + .topcoat-checkbox__checkmark:before {
        border: 1px solid #0036ff;
        box-shadow: inset 0 1px rgba(255, 255, 255, 0.36), 0 0 0 2px #6fb5f1;
    }

    input[type='checkbox']:active + .topcoat-checkbox__checkmark:before {
        border: 1px solid #9daca9;
        background-color: #d2d6d6;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.1);
    }

    input[type='checkbox']:disabled:active
        + .topcoat-checkbox__checkmark:before {
        border: 1px solid #9daca9;
        background: #e5e9e8;
        box-shadow: inset 0 1px #fff;
    }

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    .button,
    .topcoat-icon-button,
    .topcoat-icon-button--quiet,
    .topcoat-icon-button--large,
    .topcoat-icon-button--large--quiet {
        position: relative;
        display: inline-block;
        vertical-align: top;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        text-decoration: none;
    }

    .button--quiet {
        background: transparent;
        border: 1px solid transparent;
        box-shadow: none;
    }

    .button--disabled,
    .topcoat-icon-button:disabled,
    .topcoat-icon-button--quiet:disabled,
    .topcoat-icon-button--large:disabled,
    .topcoat-icon-button--large--quiet:disabled {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    /* topdoc
  name: Icon Button
  description: Like button, but it has an icon.
  modifiers:
    :active: Active state
    :disabled: Disabled state
    :hover: Hover state
    :focus: Focused
  markup:
    <button class="topcoat-icon-button">
      <span class="topcoat-icon" style="background-color:#A5A7A7;"></span>
    </button>
    <button class="topcoat-icon-button" disabled>
      <span class="topcoat-icon" style="background-color:#A5A7A7;"></span>
    </button>
  tags:
    - desktop
    - light
    - mobile
    - button
    - icon
*/

    .topcoat-icon-button,
    .topcoat-icon-button--quiet,
    .topcoat-icon-button--large,
    .topcoat-icon-button--large--quiet {
        padding: 0 0.25rem;
        line-height: 1.313rem;
        letter-spacing: 0;
        color: #454545;
        text-shadow: 0 1px #fff;
        vertical-align: baseline;
        background-color: #e5e9e8;
        box-shadow: inset 0 1px #fff;
        border: 1px solid #9daca9;
        border-radius: 4px;
    }

    .topcoat-icon-button:hover,
    .topcoat-icon-button--quiet:hover,
    .topcoat-icon-button--large:hover,
    .topcoat-icon-button--large--quiet:hover {
        background-color: #eff1f1;
    }

    .topcoat-icon-button:focus,
    .topcoat-icon-button--quiet:focus,
    .topcoat-icon-button--quiet:hover:focus,
    .topcoat-icon-button--large:focus,
    .topcoat-icon-button--large--quiet:focus,
    .topcoat-icon-button--large--quiet:hover:focus {
        border: 1px solid #0036ff;
        box-shadow: inset 0 1px rgba(255, 255, 255, 0.36), 0 0 0 2px #6fb5f1;
        outline: 0;
    }

    .topcoat-icon-button:active,
    .topcoat-icon-button--large:active {
        border: 1px solid #9daca9;
        background-color: #d2d6d6;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.1);
    }

    /* topdoc
  name: Quiet Icon Button
  description: Like quiet button, but it has an icon.
  modifiers:
    :active: Active state
    :disabled: Disabled state
    :hover: Hover state
    :focus: Focused
  markup:
    <button class="topcoat-icon-button--quiet">
      <span class="topcoat-icon" style="background-color:#A5A7A7;"></span>
    </button>
    <button class="topcoat-icon-button--quiet" disabled>
      <span class="topcoat-icon" style="background-color:#A5A7A7;"></span>
    </button>
  tags:
    - desktop
    - light
    - mobile
    - button
    - icon
    - quiet
*/

    .topcoat-icon-button--quiet {
        background: transparent;
        border: 1px solid transparent;
        box-shadow: none;
    }

    .topcoat-icon-button--quiet:hover,
    .topcoat-icon-button--large--quiet:hover {
        text-shadow: 0 1px #fff;
        border: 1px solid #9daca9;
        box-shadow: inset 0 1px #fff;
    }

    .topcoat-icon-button--quiet:active,
    .topcoat-icon-button--quiet:focus:active,
    .topcoat-icon-button--large--quiet:active,
    .topcoat-icon-button--large--quiet:focus:active {
        color: #454545;
        text-shadow: 0 1px #fff;
        background-color: #d2d6d6;
        border: 1px solid #9daca9;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.1);
    }

    /* topdoc
  name: Large Icon Button
  description: Like large button, but it has an icon.
  modifiers:
    :active: Active state
    :disabled: Disabled state
    :hover: Hover state
    :focus: Focused
  markup:
    <button class="topcoat-icon-button--large">
      <span class="topcoat-icon--large" style="background-color:#A5A7A7;"></span>
    </button>
    <button class="topcoat-icon-button--large" disabled>
      <span class="topcoat-icon--large" style="background-color:#A5A7A7;"></span>
    </button>
  tags:
    - desktop
    - light
    - mobile
    - button
    - icon
    - large
*/

    .topcoat-icon-button--large,
    .topcoat-icon-button--large--quiet {
        width: 1.688rem;
        height: 1.688rem;
        line-height: 1.688rem;
    }

    /* topdoc
  name: Large Quiet Icon Button
  description: Like large button, but it has an icon and this one is quiet.
  modifiers:
    :active: Active state
    :disabled: Disabled state
    :hover: Hover state
  markup:
    <button class="topcoat-icon-button--large--quiet">
      <span class="topcoat-icon--large" style="background-color:#A5A7A7;"></span>
    </button>
    <button class="topcoat-icon-button--large--quiet" disabled>
      <span class="topcoat-icon--large" style="background-color:#A5A7A7;"></span>
    </button>
  tags:
    - desktop
    - light
    - mobile
    - button
    - icon
    - large
    - quiet
*/

    .topcoat-icon-button--large--quiet {
        background: transparent;
        border: 1px solid transparent;
        box-shadow: none;
    }

    .topcoat-icon,
    .topcoat-icon--large {
        position: relative;
        display: inline-block;
        vertical-align: top;
        overflow: hidden;
        width: 0.81406rem;
        height: 0.81406rem;
        vertical-align: middle;
        top: -1px;
    }

    .topcoat-icon--large {
        width: 1.06344rem;
        height: 1.06344rem;
        top: -2px;
    }

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    .input {
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        vertical-align: top;
        outline: none;
    }

    .input:disabled {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    .list {
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }

    .list__header {
        margin: 0;
    }

    .list__container {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }

    .list__item {
        margin: 0;
        padding: 0;
    }

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    .navigation-bar {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        white-space: nowrap;
        overflow: hidden;
        word-spacing: 0;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .navigation-bar__item {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        position: relative;
        display: inline-block;
        vertical-align: top;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
    }

    .navigation-bar__title {
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    /*
Copyright 2012 Adobe Systems Inc.;
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    .notification {
        position: relative;
        display: inline-block;
        vertical-align: top;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        text-decoration: none;
    }

    /*
Copyright 2012 Adobe Systems Inc.;
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    .notification,
    .topcoat-notification {
        position: relative;
        display: inline-block;
        vertical-align: top;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        text-decoration: none;
    }

    /* topdoc
  name: Notification
  description: Notification badge
  markup:
    <span class="topcoat-notification">1</span>
  tags:
    - desktop
    - light
    - mobile
    - notification
*/

    .topcoat-notification {
        padding: 0.15em 0.5em 0.2em;
        border-radius: 2px;
        background-color: #ec514e;
        color: #fff;
    }

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    input[type='radio'] {
        position: absolute;
        overflow: hidden;
        padding: 0;
        border: 0;
        opacity: 0.001;
        z-index: 1;
        vertical-align: top;
        outline: none;
    }

    .radio-button {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        position: relative;
        display: inline-block;
        vertical-align: top;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .radio-button__label {
        position: relative;
        display: inline-block;
        vertical-align: top;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .radio-button:before,
    .radio-button:after {
        content: '';
        position: absolute;
        border-radius: 100%;
    }

    .radio-button:after {
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .radio-button:before {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
    }

    .radio-button--disabled {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    input[type='radio'] {
        position: absolute;
        overflow: hidden;
        padding: 0;
        border: 0;
        opacity: 0.001;
        z-index: 1;
        vertical-align: top;
        outline: none;
    }

    .radio-button,
    .topcoat-radio-button__checkmark {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        position: relative;
        display: inline-block;
        vertical-align: top;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .radio-button__label,
    .topcoat-radio-button {
        position: relative;
        display: inline-block;
        vertical-align: top;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .radio-button:before,
    .radio-button:after,
    .topcoat-radio-button__checkmark:before,
    .topcoat-radio-button__checkmark:after {
        content: '';
        position: absolute;
        border-radius: 100%;
    }

    .radio-button:after,
    .topcoat-radio-button__checkmark:after {
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .radio-button:before,
    .topcoat-radio-button__checkmark:before {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
    }

    .radio-button--disabled,
    input[type='radio']:disabled + .topcoat-radio-button__checkmark {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    /* topdoc
  name: Radio Button
  description: A button that can play music, but usually just plays ads.
  modifiers:
  markup:
    <!-- NO LABEL -->
    <label class="topcoat-radio-button">
      <input type="radio" name="topcoat">
      <div class="topcoat-radio-button__checkmark"></div>
    </label>
    <br>
    <br>
    <!-- LEFT LABEL -->
    <label class="topcoat-radio-button">
      Left label
      <input type="radio" name="topcoat">
      <div class="topcoat-radio-button__checkmark"></div>
    </label>
    <br>
    <br>
    <!-- RIGHT LABEL -->
    <label class="topcoat-radio-button">
      <input type="radio" name="topcoat">
      <div class="topcoat-radio-button__checkmark"></div>
      Right label
    </label>
    <br>
    <br>
    <!-- DISABLED -->
    <label class="topcoat-radio-button">
      <input type="radio" name="topcoat" Disabled>
      <div class="topcoat-radio-button__checkmark"></div>
      Disabled
    </label>
  examples:
    Mobile Radio Button: http://codepen.io/Topcoat/pen/HDcJj
  tags:
    - desktop
    - light
    - mobile
    - Radio
*/

    input[type='radio'] {
        height: 1.063rem;
        width: 1.063rem;
        margin-top: 0;
        margin-right: -1.063rem;
        margin-bottom: -1.063rem;
        margin-left: 0;
    }

    input[type='radio']:checked + .topcoat-radio-button__checkmark:after {
        opacity: 1;
    }

    .topcoat-radio-button {
        color: #454545;
        line-height: 1.063rem;
    }

    .topcoat-radio-button__checkmark:before {
        width: 1.063rem;
        height: 1.063rem;
        background: #e5e9e8;
        border: 1px solid #9daca9;
        box-shadow: inset 0 1px #fff;
    }

    .topcoat-radio-button__checkmark {
        position: relative;
        width: 1.063rem;
        height: 1.063rem;
    }

    .topcoat-radio-button__checkmark:after {
        opacity: 0;
        width: 0.313rem;
        height: 0.313rem;
        background: #454545;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px rgba(255, 255, 255, 0.5);
        -webkit-transform: none;
        -ms-transform: none;
        transform: none;
        top: 0.313rem;
        left: 0.313rem;
    }

    input[type='radio']:focus + .topcoat-radio-button__checkmark:before {
        border: 1px solid #0036ff;
        box-shadow: inset 0 1px rgba(255, 255, 255, 0.36), 0 0 0 2px #6fb5f1;
    }

    input[type='radio']:active + .topcoat-radio-button__checkmark:before {
        border: 1px solid #9daca9;
        background-color: #d2d6d6;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.1);
    }

    input[type='radio']:disabled:active
        + .topcoat-radio-button__checkmark:before {
        border: 1px solid #9daca9;
        background: #e5e9e8;
        box-shadow: inset 0 1px #fff;
    }

    /*
Copyright 2012 Adobe Systems Inc.;
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

    /*
Copyright 2012 Adobe Systems Inc.;
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

    .range {
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        vertical-align: top;
        outline: none;
        -webkit-appearance: none;
    }

    .range__thumb {
        cursor: pointer;
    }

    .range__thumb--webkit {
        cursor: pointer;
        -webkit-appearance: none;
    }

    .range:disabled {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    /*
Copyright 2012 Adobe Systems Inc.;
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

    /*
Copyright 2012 Adobe Systems Inc.;
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

    .range,
    .topcoat-range {
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        vertical-align: top;
        outline: none;
        -webkit-appearance: none;
    }

    .range__thumb,
    .topcoat-range::-moz-range-thumb {
        cursor: pointer;
    }

    .range__thumb--webkit,
    .topcoat-range::-webkit-slider-thumb {
        cursor: pointer;
        -webkit-appearance: none;
    }

    .range:disabled,
    .topcoat-range:disabled {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    /* topdoc
  name: Range
  description: Range input
  modifiers:
    :active: Active state
    :disabled: Disabled state
    :hover: Hover state
    :focus: Focused
  markup:
    <input type="range" class="topcoat-range">
    <input type="range" class="topcoat-range" disabled>
  examples:
    mobile range: http://codepen.io/Topcoat/pen/BskEn
  tags:
    - desktop
    - mobile
    - range
*/

    .topcoat-range {
        border-radius: 4px;
        border: 1px solid #9daca9;
        background-color: #d6dcdb;
        height: 0.5rem;
        border-radius: 15px;
    }

    .topcoat-range::-moz-range-track {
        border-radius: 4px;
        border: 1px solid #9daca9;
        background-color: #d6dcdb;
        height: 0.5rem;
        border-radius: 15px;
    }

    .topcoat-range::-webkit-slider-thumb {
        height: 1.313rem;
        width: 0.75rem;
        background-color: #e5e9e8;
        border: 1px solid #9daca9;
        border-radius: 4px;
        box-shadow: inset 0 1px #fff;
    }

    .topcoat-range::-moz-range-thumb {
        height: 1.313rem;
        width: 0.75rem;
        background-color: #e5e9e8;
        border: 1px solid #9daca9;
        border-radius: 4px;
        box-shadow: inset 0 1px #fff;
    }

    .topcoat-range:focus::-webkit-slider-thumb {
        border: 1px solid #0036ff;
        box-shadow: inset 0 1px rgba(255, 255, 255, 0.36), 0 0 0 2px #6fb5f1;
    }

    .topcoat-range:focus::-moz-range-thumb {
        border: 1px solid #0036ff;
        box-shadow: inset 0 1px rgba(255, 255, 255, 0.36), 0 0 0 2px #6fb5f1;
    }

    .topcoat-range:active::-webkit-slider-thumb {
        border: 1px solid #9daca9;
        box-shadow: inset 0 1px #fff;
    }

    .topcoat-range:active::-moz-range-thumb {
        border: 1px solid #9daca9;
        box-shadow: inset 0 1px #fff;
    }

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    .search-input {
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        vertical-align: top;
        outline: none;
        -webkit-appearance: none;
    }

    input[type='search']::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }

    .search-input:disabled {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    .search-input,
    .topcoat-search-input,
    .topcoat-search-input--large {
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        vertical-align: top;
        outline: none;
        -webkit-appearance: none;
    }

    input[type='search']::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }

    .search-input:disabled,
    .topcoat-search-input:disabled,
    .topcoat-search-input--large:disabled {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    /* topdoc
  name: Search Input
  description: A text input designed for searching.
  modifiers:
    :disabled: Disabled state
  markup:
    <input type="search" value="" placeholder="search" class="topcoat-search-input">
    <input type="search" value="" placeholder="search" class="topcoat-search-input" disabled>
  tags:
    - desktop
    - light
    - mobile
    - text
    - input
    - search
    - form
*/

    .topcoat-search-input,
    .topcoat-search-input--large {
        line-height: 1.313rem;
        height: 1.313rem;
        font-size: 12px;
        border: 1px solid #9daca9;
        background-color: #fff;
        box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.23);
        color: #454545;
        padding: 0 0 0 1.3rem;
        border-radius: 15px;
        background-image: url('../img/search.svg');
        background-position: 1rem center;
        background-repeat: no-repeat;
        background-size: 12px;
    }

    .topcoat-search-input:focus,
    .topcoat-search-input--large:focus {
        background-color: #fff;
        color: #454545;
        border: 1px solid #0036ff;
        box-shadow: inset 0 1px 0 rgba(0, 0, 0, 0.23), 0 0 0 2px #6fb5f1;
    }

    .topcoat-search-input::-webkit-search-cancel-button,
    .topcoat-search-input::-webkit-search-decoration,
    .topcoat-search-input--large::-webkit-search-cancel-button,
    .topcoat-search-input--large::-webkit-search-decoration {
        margin-right: 5px;
    }

    .topcoat-search-input:focus::-webkit-input-placeholder,
    .topcoat-search-input:focus::-webkit-input-placeholder {
        color: #c6c8c8;
    }

    .topcoat-search-input:disabled::-webkit-input-placeholder {
        color: #454545;
    }

    .topcoat-search-input:disabled::-moz-placeholder {
        color: #454545;
    }

    .topcoat-search-input:disabled:-ms-input-placeholder {
        color: #454545;
    }

    /* topdoc
  name: Large Search Input
  description: A large text input designed for searching.
  modifiers:
    :disabled: Disabled state
  markup:
    <input type="search" value="" placeholder="search" class="topcoat-search-input--large">
    <input type="search" value="" placeholder="search" class="topcoat-search-input--large" disabled>
  tags:
    - desktop
    - light
    - mobile
    - text
    - input
    - search
    - form
    - large
*/

    .topcoat-search-input--large {
        line-height: 1.688rem;
        height: 1.688rem;
        font-size: 0.875rem;
        font-weight: 400;
        padding: 0 0 0 1.8rem;
        border-radius: 25px;
        background-position: 1.2rem center;
        background-size: 0.875rem;
    }

    .topcoat-search-input--large:disabled {
        color: #454545;
    }

    .topcoat-search-input--large:disabled::-webkit-input-placeholder {
        color: #454545;
    }

    .topcoat-search-input--large:disabled::-moz-placeholder {
        color: #454545;
    }

    .topcoat-search-input--large:disabled:-ms-input-placeholder {
        color: #454545;
    }

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    .switch {
        position: relative;
        display: inline-block;
        vertical-align: top;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
    }

    .switch__input {
        position: absolute;
        overflow: hidden;
        padding: 0;
        border: 0;
        opacity: 0.001;
        z-index: 1;
        vertical-align: top;
        outline: none;
    }

    .switch__toggle {
        position: relative;
        display: inline-block;
        vertical-align: top;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .switch__toggle:before,
    .switch__toggle:after {
        content: '';
        position: absolute;
        z-index: -1;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
    }

    .switch--disabled {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    .switch,
    .topcoat-switch {
        position: relative;
        display: inline-block;
        vertical-align: top;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
    }

    .switch__input,
    .topcoat-switch__input {
        position: absolute;
        overflow: hidden;
        padding: 0;
        border: 0;
        opacity: 0.001;
        z-index: 1;
        vertical-align: top;
        outline: none;
    }

    .switch__toggle,
    .topcoat-switch__toggle {
        position: relative;
        display: inline-block;
        vertical-align: top;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .switch__toggle:before,
    .switch__toggle:after,
    .topcoat-switch__toggle:before,
    .topcoat-switch__toggle:after {
        content: '';
        position: absolute;
        z-index: -1;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
    }

    .switch--disabled,
    .topcoat-switch__input:disabled + .topcoat-switch__toggle {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    /* topdoc
  name: Switch
  description: Default skin for Topcoat switch
  modifiers:
    :focus: Focus state
    :disabled: Disabled state
  markup:
    <label class="topcoat-switch">
      <input type="checkbox" class="topcoat-switch__input">
      <div class="topcoat-switch__toggle"></div>
    </label>
    <br>
    <br>
    <label class="topcoat-switch">
      <input type="checkbox" class="topcoat-switch__input" checked>
      <div class="topcoat-switch__toggle"></div>
    </label>
    <br>
    <br>
    <label class="topcoat-switch">
      <input type="checkbox" class="topcoat-switch__input" disabled>
      <div class="topcoat-switch__toggle"></div>
    </label>
  examples:
    mobile switch: http://codepen.io/Topcoat/pen/upxds
  tags:
    - desktop
    - light
    - mobile
    - switch
*/

    .topcoat-switch {
        font-size: 12px;
        padding: 0 0.563rem;
        border-radius: 4px;
        border: 1px solid #9daca9;
        overflow: hidden;
        width: 3.5rem;
    }

    .topcoat-switch__toggle:before,
    .topcoat-switch__toggle:after {
        top: -1px;
        width: 2.6rem;
    }

    .topcoat-switch__toggle:before {
        content: 'ON';
        color: #288edf;
        background-color: #e5f1fb;
        right: 0.8rem;
        padding-left: 0.75rem;
    }

    .topcoat-switch__toggle {
        line-height: 1.313rem;
        height: 1.313rem;
        width: 1rem;
        border-radius: 4px;
        color: #454545;
        text-shadow: 0 1px #fff;
        background-color: #e5e9e8;
        border: 1px solid #9daca9;
        margin-left: -0.6rem;
        margin-bottom: -1px;
        margin-top: -1px;
        box-shadow: inset 0 1px #fff;
        -webkit-transition: margin-left 0.05s ease-in-out;
        transition: margin-left 0.05s ease-in-out;
    }

    .topcoat-switch__toggle:after {
        content: 'OFF';
        background-color: #d2d6d6;
        left: 0.8rem;
        padding-left: 0.6rem;
    }

    .topcoat-switch__input:checked + .topcoat-switch__toggle {
        margin-left: 1.85rem;
    }

    .topcoat-switch__input:active + .topcoat-switch__toggle {
        border: 1px solid #9daca9;
        box-shadow: inset 0 1px #fff;
    }

    .topcoat-switch__input:focus + .topcoat-switch__toggle {
        border: 1px solid #0036ff;
        box-shadow: 0 0 0 2px #6fb5f1;
    }

    .topcoat-switch__input:disabled + .topcoat-switch__toggle:after,
    .topcoat-switch__input:disabled + .topcoat-switch__toggle:before {
        background: transparent;
    }

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    .button,
    .topcoat-tab-bar__button {
        position: relative;
        display: inline-block;
        vertical-align: top;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        text-decoration: none;
    }

    .button--quiet {
        background: transparent;
        border: 1px solid transparent;
        box-shadow: none;
    }

    .button--disabled,
    .topcoat-tab-bar__button:disabled {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    .button-bar,
    .topcoat-tab-bar {
        display: table;
        table-layout: fixed;
        white-space: nowrap;
        margin: 0;
        padding: 0;
    }

    .button-bar__item,
    .topcoat-tab-bar__item {
        display: table-cell;
        width: auto;
        border-radius: 0;
    }

    .button-bar__item > input,
    .topcoat-tab-bar__item > input {
        position: absolute;
        overflow: hidden;
        padding: 0;
        border: 0;
        opacity: 0.001;
        z-index: 1;
        vertical-align: top;
        outline: none;
    }

    .button-bar__button {
        border-radius: inherit;
    }

    .button-bar__item:disabled {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    /* topdoc
  name: Tab Bar
  description: Component of tab buttons
  modifiers:
    :disabled: Disabled state
  markup:
    <div class="topcoat-tab-bar">
      <label class="topcoat-tab-bar__item">
        <input type="radio" name="tab-bar">
        <button class="topcoat-tab-bar__button">One</button>
      </label>
      <label class="topcoat-tab-bar__item">
        <input type="radio" name="tab-bar">
        <button class="topcoat-tab-bar__button">Two</button>
      </label>
      <label class="topcoat-tab-bar__item">
        <input type="radio" name="tab-bar">
        <button class="topcoat-tab-bar__button">Three</button>
      </label>
    </div>
  examples:
    mobile tab bar: http://codepen.io/Topcoat/pen/rJICF
  tags:
    - desktop
    - light
    - dark
    - mobile
    - tab
    - group
    - bar
*/

    .topcoat-tab-bar__button {
        padding: 0 0.563rem;
        height: 1.313rem;
        line-height: 1.313rem;
        letter-spacing: 0;
        color: #454545;
        text-shadow: 0 1px #fff;
        vertical-align: top;
        background-color: #e5e9e8;
        box-shadow: inset 0 1px #fff;
        border-top: 1px solid #9daca9;
    }

    .topcoat-tab-bar__button:active,
    .topcoat-tab-bar__button--large:active,
    :checked + .topcoat-tab-bar__button {
        color: #288edf;
        background-color: #e5f1fb;
        box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.1);
    }

    .topcoat-tab-bar__button:focus,
    .topcoat-tab-bar__button--large:focus {
        z-index: 1;
        box-shadow: inset 0 1px rgba(255, 255, 255, 0.36), 0 0 0 2px #6fb5f1;
        outline: 0;
    }

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    .input,
    .topcoat-text-input,
    .topcoat-text-input--large {
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        vertical-align: top;
        outline: none;
    }

    .input:disabled,
    .topcoat-text-input:disabled,
    .topcoat-text-input--large:disabled {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    /* topdoc
  name: Text input
  description: Topdoc text input
  modifiers:
    :disabled: Disabled state
    :focus: Focused
    :invalid: Hover state
  markup:
    <input type="text" class="topcoat-text-input" placeholder="text" value="">
    <br>
    <br>
    <input type="text" class="topcoat-text-input" placeholder="text" value="" disabled>
    <br>
    <br>
    <input type="text" class="topcoat-text-input" placeholder="text" value="fail" pattern="not-fail">
  tags:
    - desktop
    - mobile
    - text
    - input
*/

    .topcoat-text-input,
    .topcoat-text-input--large {
        line-height: 1.313rem;
        font-size: 12px;
        letter-spacing: 0;
        padding: 0 0.563rem;
        border: 1px solid #9daca9;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.1);
        color: #454545;
        vertical-align: top;
    }

    .topcoat-text-input:focus,
    .topcoat-text-input--large:focus {
        background-color: #fff;
        color: #454545;
        border: 1px solid #0036ff;
        box-shadow: 0 0 0 2px #6fb5f1;
    }

    .topcoat-text-input:disabled::-webkit-input-placeholder {
        color: #454545;
    }

    .topcoat-text-input:disabled::-moz-placeholder {
        color: #454545;
    }

    .topcoat-text-input:disabled:-ms-input-placeholder {
        color: #454545;
    }

    .topcoat-text-input:invalid {
        border: 1px solid #ec514e;
    }

    /* topdoc
  name: Large Text Input
  description: A bigger input, still for text.
  modifiers:
    :disabled: Disabled state
    :focus: Focused
    :invalid: Hover state
  markup:
    <input type="text" class="topcoat-text-input--large" value="" placeholder="text">
    <br>
    <br>
    <input type="text" class="topcoat-text-input--large" value="" placeholder="text" disabled>
    <br>
    <br>
    <input type="text" class="topcoat-text-input--large" placeholder="text" value="fail" pattern="not-fail">
  tags:
    - desktop
    - light
    - mobile
    - form
    - input
    - large
*/

    .topcoat-text-input--large {
        line-height: 1.688rem;
        font-size: 0.875rem;
    }

    .topcoat-text-input--large:disabled {
        color: #454545;
    }

    .topcoat-text-input--large:disabled::-webkit-input-placeholder {
        color: #454545;
    }

    .topcoat-text-input--large:disabled::-moz-placeholder {
        color: #454545;
    }

    .topcoat-text-input--large:disabled:-ms-input-placeholder {
        color: #454545;
    }

    .topcoat-text-input--large:invalid {
        border: 1px solid #ec514e;
    }

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    .textarea {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        vertical-align: top;
        resize: none;
        outline: none;
    }

    .textarea:disabled {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    /**
*
* Copyright 2012 Adobe Systems Inc.;
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*/

    .textarea,
    .topcoat-textarea,
    .topcoat-textarea--large {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        vertical-align: top;
        resize: none;
        outline: none;
    }

    .textarea:disabled,
    .topcoat-textarea:disabled,
    .topcoat-textarea--large:disabled {
        opacity: 0.3;
        cursor: default;
        pointer-events: none;
    }

    /* topdoc
  name: Textarea
  description: A whole area, just for text.
  modifiers:
    :disabled: Disabled state
  markup:
    <textarea class="topcoat-textarea" rows="6" cols="36" placeholder="Textarea"></textarea>
    <br>
    <br>
    <textarea class="topcoat-textarea" rows="6" cols="36" placeholder="Textarea" disabled></textarea>
  tags:
    - desktop
    - light
    - mobile
    - form
    - input
    - textarea
*/

    .topcoat-textarea,
    .topcoat-textarea--large {
        padding: 1rem;
        font-size: 1rem;
        font-weight: 400;
        border-radius: 4px;
        line-height: 1.313rem;
        border: 1px solid #9daca9;
        background-color: #fff;
        box-shadow: inset 0 1px rgba(0, 0, 0, 0.1);
        color: #454545;
        letter-spacing: 0;
    }

    .topcoat-textarea:focus,
    .topcoat-textarea--large:focus {
        background-color: #fff;
        color: #454545;
        border: 1px solid #0036ff;
        box-shadow: 0 0 0 2px #6fb5f1;
    }

    .topcoat-textarea:disabled::-webkit-input-placeholder {
        color: #454545;
    }

    .topcoat-textarea:disabled::-moz-placeholder {
        color: #454545;
    }

    .topcoat-textarea:disabled:-ms-input-placeholder {
        color: #454545;
    }

    /* topdoc
  name: Large Textarea
  description: A whole area, just for text; now available in large.
  modifiers:
    :disabled: Disabled state
  markup:
    <textarea class="topcoat-textarea--large" rows="6" cols="36" placeholder="Textarea"></textarea>
    <br>
    <br>
    <textarea class="topcoat-textarea--large" rows="6" cols="36" placeholder="Textarea" disabled></textarea>
  tags:
    - desktop
    - light
    - mobile
    - form
    - input
    - textarea
*/

    .topcoat-textarea--large {
        font-size: 1.3rem;
        line-height: 1.688rem;
    }

    .topcoat-textarea--large:disabled {
        color: #454545;
    }

    .topcoat-textarea--large:disabled::-webkit-input-placeholder {
        color: #454545;
    }

    .topcoat-textarea--large:disabled::-moz-placeholder {
        color: #454545;
    }

    .topcoat-textarea--large:disabled:-ms-input-placeholder {
        color: #454545;
    }

    @font-face {
        font-family: 'Source Sans';
        src: url('../font/SourceSansPro-Regular.otf');
    }

    @font-face {
        font-family: 'Source Sans';
        src: url('../font/SourceSansPro-Light.otf');
        font-weight: 200;
    }

    @font-face {
        font-family: 'Source Sans';
        src: url('../font/SourceSansPro-Semibold.otf');
        font-weight: 600;
    }

    body {
        margin: 0;
        padding: 0;
        background: #dfe2e2;
        color: #000;
        font: 16px 'Source Sans', helvetica, arial, sans-serif;
        font-weight: 400;
    }

    :focus {
        outline-color: transparent;
        outline-style: none;
    }

    .topcoat-icon--menu-stack {
        background: url('../img/hamburger_dark.svg') no-repeat;
        background-size: cover;
    }

    .quarter {
        width: 25%;
    }

    .half {
        width: 50%;
    }

    .three-quarters {
        width: 75%;
    }

    .third {
        width: 33.333%;
    }

    .two-thirds {
        width: 66.666%;
    }

    .full {
        width: 100%;
    }

    .left {
        text-align: left;
    }

    .center {
        text-align: center;
    }

    .right {
        text-align: right;
    }

    .reset-ui {
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-clip: padding-box;
        position: relative;
        display: inline-block;
        vertical-align: top;
        padding: 0;
        margin: 0;
        font: inherit;
        color: inherit;
        background: transparent;
        border: none;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    /* This file should include color and image variables corresponding to the dark theme */

    /* ---------- colors ---------- */

    /* ---------- darken ---------- */

    /* ---------- lighten ---------- */

    /* ---------- alphas ---------- */

    /* ---------- thickness ---------- */

    /* ---------- shadows ---------- */

    /* Icons */

    /* Navigation Bar */

    /* Text Input */

    /* List */

    /* Overlay */

    /* Progress bar */

    /* Checkbox */

    /* Range input */

    /* Radio Button */

    /* Tab bar */

    /* Switch */

    /* Icon Button */

    /* Navigation bar */

    /* List */

    /* Search Input */

    /* Textarea */

    /* Checkbox */

    /* Radio */

    /* Range input */

    /* Search Input */

    /* Switch */

    /* This file should include color and image variables corresponding to the light theme */

    /* ---------- colors ---------- */

    /* ---------- darken ---------- */

    /* ---------- lighten ---------- */

    /* ---------- alphas ---------- */

    /* ---------- thickness ---------- */

    /* ---------- shadows ---------- */

    /* Secondary colors (based on colors above)

Everything below this line should be calculated using the variables above. This area is for people that want to totally customize everything. Have fun, bros!

*/

    /* Icons */

    /* Navigation Bar */

    /* Text Input */

    /* List */

    /* Overlay */

    /* Progress bar */

    /* Checkbox */

    /* Range input */

    /* Radio Button */

    /* Tab bar */

    /* Switch */

    /* Containers */

    /* Icon Button */

    /* Navigation bar */

    /* List */

    /* Search Input */

    /* Text Area */

    /* Checkbox */

    /* Radio */

    /* Range input */

    /* Search Input */

    /* Switch */

    /* Call To Action */

    /* Text Input */

    /* Radio input */

    /* Overlay */

    /* Textarea */

    /* Progress bar container */

    /* Progress bar progress */

    /* Switch */

    /* Notification */

    /* Search */
`;

export default topcoatStyles;
