'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">notus-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-6d215bd26d0f8be046beb0565650a740"' : 'data-target="#xs-components-links-module-AppModule-6d215bd26d0f8be046beb0565650a740"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6d215bd26d0f8be046beb0565650a740"' :
                                            'id="xs-components-links-module-AppModule-6d215bd26d0f8be046beb0565650a740"' }>
                                            <li class="link">
                                                <a href="components/AdminComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminNavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminNavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthNavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthNavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardBarChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardBarChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardLineChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardLineChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardPageVisitsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardPageVisitsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardSettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardSettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardSocialTrafficComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardSocialTrafficComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardStatsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardStatsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterAdminComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterAdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterSmallComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterSmallComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderStatsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderStatsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IndexComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IndexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IndexDropdownComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IndexDropdownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IndexNavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IndexNavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LandingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LandingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapExampleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapExampleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationDropdownComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationDropdownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagesDropdownComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagesDropdownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableDropdownComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableDropdownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TablesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TablesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserDropdownComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserDropdownComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});