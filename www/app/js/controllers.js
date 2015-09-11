'use strict';

angular.module('xenon.controllers', []).
    controller('LoginCtrl', function ($scope, $rootScope) {
        $rootScope.isLoginPage = true;
        $rootScope.isLightLoginPage = false;
        $rootScope.isLockscreenPage = false;
        $rootScope.isMainPage = false;


    }).

    controller('MyPreferenceCtrl', function ($scope, $rootScope, $lptServices) {
        $rootScope.isLoginPage = false;
        $rootScope.isLightLoginPage = false;
        $rootScope.isLockscreenPage = false;
<<<<<<< HEAD
        $rootScope.isMainPage = true;
=======
        $rootScope.isMainPage = false;
>>>>>>> origin/master

        $scope.userInfo = $lptServices.getUserInfo();
        $scope.regionList = $lptServices.getRegionList();
        $scope.marketList = $lptServices.getMarketList();
        $scope.timeZones = $lptServices.getTimeZones();

        $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
            $("#mypref [bs-duallistbox]").bootstrapDualListbox({
                preserveSelectionOnMove: 'moved',
                moveOnSelect: true,
                selectorMinimalHeight: 30
            });
        });


    }).

    controller('ReportBrowserCtrl', function ($scope, $rootScope, $interval, $lptServices) {
        $rootScope.isLoginPage = false;
        $rootScope.isLightLoginPage = false;
        $rootScope.isLockscreenPage = false;
        $rootScope.isMainPage = false;

        $scope.gridItems = [];

        $scope.filter = {
            status : ["Complete", "Failed", "Running"]
            };


        $lptServices.getUserReportsPerRegion().then(function (result) {
            //$scope.resize();

            $('#jtree').jstree({
                'core': {
                    'data': result.data
                },
                "plugins": [
                    "search", "types", "wholerow"
                ],
                "ui": {
                    "select_limit": 1,
                }
            });
        });


        $('#jtree').on("changed.jstree", function (e, data) {
            console.log("The selected nodes are:");
            console.log(data);
            console.log(e);

            $lptServices.getReportsByUser(data.selected).then(function (result) {
                //$scope.refreshGrid(result.data.reports.report);
                $scope.gridItems = result.data.reports.report;
            });
        });

        $scope.treeSearch = function () {
            $("#jtree").jstree(true).search($scope.textSearch);

            // Scroll to the first search item
            var el = $('#jtree .jstree-search')[0];
            if (el) {
                var pos = el.offsetTop;
                $("#jtree").scrollTop(pos);
            }
        }

    }).


    controller('HomeCtrl', function ($scope, $rootScope, $lptServices) {
        $rootScope.isLoginPage = false;
        $rootScope.isLightLoginPage = false;
        $rootScope.isLockscreenPage = false;
        $rootScope.isMainPage = false;

<<<<<<< HEAD
        $scope.news = $lptServices.getListOfNews();

=======
>>>>>>> origin/master
        $scope.getDate = function () {
            return new Date();
        }


        $scope.slides = [];
        $scope.currentDate = "";

<<<<<<< HEAD
        $scope.getCssColor = function(area) {
            if (area == -9999) {
                return "red";
            }
            return "";
        }


=======
>>>>>>> origin/master

        $scope.refresh = function () {
            $scope.slides = [
                'static/chart1.png',
                'static/chart2.png',
                'static/chart3.png',
                'static/chart4.png',
                'static/chart5.png',
                'static/chart6.png',
                'static/chart7.png',
                'static/chart8.png',
                'static/chart9.png',
                'static/chart10.png',
                'static/chart11.png',
                'static/chart12.png',
                'static/chart13.png',
                'static/chart14.png',
                'static/chart15.png',
            ];
            $scope.currentDate = $scope.getDate();
        }


        $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
            $(".slider")
                .slick({
                    dots: true,
                    infinite: false,
                    speed: 300,
                    slidesToShow: 4,
                    slidesToScroll: 5,
                    width: '250px',
                    height: '250px',
                    autoplay: true,
                    autplaySpeed: 2000
                });
            console.log("Finished!");
        });
    }).

<<<<<<< HEAD
    controller('StrucAdhocCntrl', function ($scope, $rootScope, $lptServices) {
        $rootScope.isLoginPage = false;
        $rootScope.isLightLoginPage = false;
        $rootScope.isLockscreenPage = false;
        $rootScope.isMainPage = false;
        $scope.sah = {};

        $scope.isCollapsed = true;

        $scope.regions = $lptServices.getRegionList();
        $scope.mmePools = $lptServices.getAllMmePools();
        $scope.markets = $lptServices.getMarketList();
        $scope.reportLevels = $lptServices.getReportLevels();
        $scope.mmeSgwPgwList = $lptServices.getMmeSgwPgwList();
        $scope.cellGroups = $lptServices.getCellGroups();
        $scope.eNodeBs = $lptServices.getEnodeBList();
        $scope.reportTypes = $lptServices.getReportTypes();
        $scope.contents = $lptServices.getContentList();

        $scope.eutrancells = $lptServices.getEUTranCellList();

        $scope.sah.region = [$scope.regions[0]];
        $scope.sah.market = [$scope.markets[1]];
        $scope.eutrancells = [1,2,3,4,5,6,7,8,9];
        $scope.sah.eutrancell = $scope.eutrancells;

        $scope.carriers = [1,2,3,4,5,6,7,8,9];
        $scope.sah.carrier = $scope.eutrancells;


        $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
            console.log("here..");
            $("#sah-eutrancell").select2({
                placeholder: 'Select EUTranCell',
                allowClear: true
            }).on('select2-open', function () {
                // Adding Custom Scrollbar
                //$(this).data('select2').results.addClass('overflow-hidden').perfectScrollbar();
            });


            $("#sah-reportlevel").selectBoxIt({
                showFirstOption: false,
                "native": true
            });

            $("#sah-reportType").selectBoxIt({
                showFirstOption: true,
                "native": true
            });



            $("#sah-carrier").select2({
                placeholder: 'Select EUTranCell',
                allowClear: true
            }).on('select2-open', function () {
                // Adding Custom Scrollbar
                //$(this).data('select2').results.addClass('overflow-hidden').perfectScrollbar();
            });

            $("#ms-region").select2({
                placeholder: 'Select region',
                allowClear: true
            }).on('select2-open', function () {
                // Adding Custom Scrollbar
                $(this).data('select2').results.addClass('overflow-hidden').perfectScrollbar();
            });

            $("#ms-market").select2({
                placeholder: 'Select market',
                allowClear: true
            }).on('select2-open', function () {
                // Adding Custom Scrollbar
                $(this).data('select2').results.addClass('overflow-hidden').perfectScrollbar();
            });


            $("#sah-mmePool").select2({
                placeholder: 'Select MME Pool',
                allowClear: true
            }).on('select2-open', function () {
                // Adding Custom Scrollbar
                $(this).data('select2').results.addClass('overflow-hidden').perfectScrollbar();
            });

            $("#sah-cellGroup").select2({
                placeholder: 'Select cellgroup',
                allowClear: true
            }).on('select2-open', function () {
                // Adding Custom Scrollbar
                $(this).data('select2').results.addClass('overflow-hidden').perfectScrollbar();
            });


            $('#endDate')
                .datepicker({
                    format: 'mm/dd/yyyy',
                    setDate: new Date(),
                    todayBtn: true,
                    clearBtn: false,
                    todayHighlight: true,
                    sideBySide: true
                })
                .on('changeDate', function(e) {
                    $(this).datepicker('hide');
                    // Revalidate the date field
                    $('#eventForm').formValidation('revalidateField', 'date');
                    console.log($scope.sah.endDate);
                });

        });

        $("#sah-panel").show();
    }).

=======
>>>>>>> origin/master

    controller('MemberAccountCtrl', function ($scope, $rootScope) {
        $rootScope.isLoginPage = false;
        $rootScope.isLightLoginPage = false;
        $rootScope.isLockscreenPage = false;
        $rootScope.isMainPage = false;

    }).

    controller('LoginLightCtrl', function ($scope, $rootScope) {
        $rootScope.isLoginPage = true;
        $rootScope.isLightLoginPage = true;
        $rootScope.isLockscreenPage = false;
        $rootScope.isMainPage = false;
    }).
    controller('LockscreenCtrl', function ($scope, $rootScope) {
        $rootScope.isLoginPage = false;
        $rootScope.isLightLoginPage = false;
        $rootScope.isLockscreenPage = true;
        $rootScope.isMainPage = false;
    }).
    controller('MainCtrl', function ($scope, $rootScope, $location, $layout, $layoutToggles, $pageLoadingBar, Fullscreen) {
        $rootScope.isLoginPage = false;
        $rootScope.isLightLoginPage = false;
        $rootScope.isLockscreenPage = false;
        $rootScope.isMainPage = true;

<<<<<<< HEAD
=======

//        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
//            console.log('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);
//        });
//        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
//            console.log('$stateChangeError - fired when an error occurs during transition.');
//            console.log(arguments);
//        });
//        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
//            console.log('$stateChangeSuccess to ' + toState.name + '- fired once the state transition is complete.');
//        });
//// $rootScope.$on('$viewContentLoading',function(event, viewConfig){
////   // runs on individual scopes, so putting it in "run" doesn't work.
////   console.log('$viewContentLoading - view begins loading - dom not rendered',viewConfig);
//// });
//        $rootScope.$on('$viewContentLoaded', function (event) {
//            console.log('$viewContentLoaded - fired after dom rendered', event);
//        });
//        $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
//            console.log('$stateNotFound ' + unfoundState.to + '  - fired when a state cannot be found by its name.');
//            console.log(unfoundState, fromState, fromParams);
//        });

>>>>>>> origin/master
        $rootScope.layoutOptions = {
            horizontalMenu: {
                isVisible: true,
                isFixed: true,
                minimal: true,
                clickToExpand: false,
<<<<<<< HEAD
                isMenuOpenMobile: false
            },
            sidebar: {
                isVisible: false,
=======

                isMenuOpenMobile: false
            },
            sidebar: {
                isVisible: true,
>>>>>>> origin/master
                isCollapsed: true,
                toggleOthers: true,
                isFixed: true,
                isRight: false,
<<<<<<< HEAD
                isMenuOpenMobile: false,
=======

                isMenuOpenMobile: false,

>>>>>>> origin/master
                // Added in v1.3
                userProfile: true
            },
            chat: {
                isOpen: false,
            },
            settingsPane: {
                isOpen: false,
                useAnimation: true
            },
            container: {
                isBoxed: false
            },
            skins: {
                sidebarMenu: '',
                horizontalMenu: '',
                userInfoNavbar: ''
            },
            pageTitles: true,
            userInfoNavVisible: false
        };

<<<<<<< HEAD
        //$layout.loadOptionsFromCookies(); // remove this line if you don't want to support cookies that remember layout changes
=======
        $layout.loadOptionsFromCookies(); // remove this line if you don't want to support cookies that remember layout changes

>>>>>>> origin/master

        $scope.updatePsScrollbars = function () {
            var $scrollbars = jQuery(".ps-scrollbar:visible");

            $scrollbars.each(function (i, el) {
                if (typeof jQuery(el).data('perfectScrollbar') == 'undefined') {
                    jQuery(el).perfectScrollbar();
                }
                else {
                    jQuery(el).perfectScrollbar('update');
                }
            })
        };


        // Define Public Vars
        public_vars.$body = jQuery("body");


        // Init Layout Toggles
        $layoutToggles.initToggles();


        // Other methods
        $scope.setFocusOnSearchField = function () {
            public_vars.$body.find('.search-form input[name="s"]').focus();

            setTimeout(function () {
                public_vars.$body.find('.search-form input[name="s"]').focus()
            }, 100);
        };


        // Watch changes to replace checkboxes
        $scope.$watch(function () {
            cbr_replace();
        });

        // Watch sidebar status to remove the psScrollbar
        $rootScope.$watch('layoutOptions.sidebar.isCollapsed', function (newValue, oldValue) {
            if (newValue != oldValue) {
                if (newValue == true) {
                    public_vars.$sidebarMenu.find('.sidebar-menu-inner').perfectScrollbar('destroy')
                }
                else {
                    public_vars.$sidebarMenu.find('.sidebar-menu-inner').perfectScrollbar({wheelPropagation: public_vars.wheelPropagation});
                }
            }
        });


        // Page Loading Progress (remove/comment this line to disable it)
        $pageLoadingBar.init();

        $scope.showLoadingBar = showLoadingBar;
        $scope.hideLoadingBar = hideLoadingBar;


        // Set Scroll to 0 When page is changed
        $rootScope.$on('$stateChangeStart', function () {
            var obj = {pos: jQuery(window).scrollTop()};

            TweenLite.to(obj, .25, {
                pos: 0, ease: Power4.easeOut, onUpdate: function () {
                    $(window).scrollTop(obj.pos);
                }
            });
        });


        // Full screen feature added in v1.3
        $scope.isFullscreenSupported = Fullscreen.isSupported();
        $scope.isFullscreen = Fullscreen.isEnabled() ? true : false;

        $scope.goFullscreen = function () {
            if (Fullscreen.isEnabled())
                Fullscreen.cancel();
            else
                Fullscreen.all();

            $scope.isFullscreen = Fullscreen.isEnabled() ? true : false;
        }

    }).
    controller('SidebarMenuCtrl', function ($scope, $rootScope, $menuItems, $timeout, $location, $state, $layout) {

        // Menu Items
        var $sidebarMenuItems = $menuItems.instantiate();

        $scope.menuItems = $sidebarMenuItems.prepareSidebarMenu().getAll();

        // Set Active Menu Item
        $sidebarMenuItems.setActive($location.path());

        $rootScope.$on('$stateChangeSuccess', function () {
            $sidebarMenuItems.setActive($state.current.name);
        });

        // Trigger menu setup
        public_vars.$sidebarMenu = public_vars.$body.find('.sidebar-menu');
        $timeout(setup_sidebar_menu, 1);

        ps_init(); // perfect scrollbar for sidebar
    }).
    controller('HorizontalMenuCtrl', function ($scope, $rootScope, $menuItems, $timeout, $location, $state, $lptServices) {
        var $horizontalMenuItems = $menuItems.instantiate();

        $scope.menuItems = $horizontalMenuItems.prepareHorizontalMenu().getAll();

        // Set Active Menu Item
        $horizontalMenuItems.setActive($location.path());

        $rootScope.$on('$stateChangeSuccess', function () {
            $horizontalMenuItems.setActive($state.current.name);

            $(".navbar.horizontal-menu .navbar-nav .hover").removeClass('hover'); // Close Submenus when item is selected
        });

        $scope.alertItems = $lptServices.getAlerts();

        // Trigger menu setup
        $timeout(setup_horizontal_menu, 1);
    }).
    controller('SettingsPaneCtrl', function ($rootScope) {
        // Define Settings Pane Public Variable
        public_vars.$settingsPane = public_vars.$body.find('.settings-pane');
        public_vars.$settingsPaneIn = public_vars.$settingsPane.find('.settings-pane-inner');
    }).

<<<<<<< HEAD
=======

>>>>>>> origin/master
    // TODO: Remove this
    controller('ChatCtrl', function ($scope, $element) {
        var $chat = jQuery($element),
            $chat_conv = $chat.find('.chat-conversation');

        $chat.find('.chat-inner').perfectScrollbar(); // perfect scrollbar for chat container

<<<<<<< HEAD
=======

>>>>>>> origin/master
        // Chat Conversation Window (sample)
        $chat.on('click', '.chat-group a', function (ev) {
            ev.preventDefault();

            $chat_conv.toggleClass('is-open');

            if ($chat_conv.is(':visible')) {
                $chat.find('.chat-inner').perfectScrollbar('update');
                $chat_conv.find('textarea').autosize();
            }
        });

        $chat_conv.on('click', '.conversation-close', function (ev) {
            ev.preventDefault();

            $chat_conv.removeClass('is-open');
        });
    }).


    // TODO: Remove this
    controller('UIModalsCtrl', function ($scope, $rootScope, $modal, $sce) {
        // Open Simple Modal
        $scope.openModal = function (modal_id, modal_size, modal_backdrop) {
            $rootScope.currentModal = $modal.open({
                templateUrl: modal_id,
                size: modal_size,
                backdrop: typeof modal_backdrop == 'undefined' ? true : modal_backdrop
            });
        };

        // Loading AJAX Content
        $scope.openAjaxModal = function (modal_id, url_location) {
            $rootScope.currentModal = $modal.open({
                templateUrl: modal_id,
                resolve: {
                    ajaxContent: function ($http) {
                        return $http.get(url_location).then(function (response) {
                            $rootScope.modalContent = $sce.trustAsHtml(response.data);
                        }, function (response) {
                            $rootScope.modalContent = $sce.trustAsHtml('<div class="label label-danger">Cannot load ajax content! Please check the given url.</div>');
                        });
                    }
                }
            });

            $rootScope.modalContent = $sce.trustAsHtml('Modal content is loading...');
        }
    }).


    controller('PaginationDemoCtrl', function ($scope) {
        $scope.totalItems = 64;
        $scope.currentPage = 4;

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function () {
            console.log('Page changed to: ' + $scope.currentPage);
        };

        $scope.maxSize = 5;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;
    }).
    controller('LayoutVariantsCtrl', function ($scope, $layout, $cookies) {
        $scope.opts = {
            sidebarType: null,
            fixedSidebar: null,
            sidebarToggleOthers: null,
            sidebarVisible: null,
            sidebarPosition: null,

            horizontalVisible: null,
            fixedHorizontalMenu: null,
            horizontalOpenOnClick: null,
            minimalHorizontalMenu: null,

            sidebarProfile: null
        };

        $scope.sidebarTypes = [
            {
                value: ['sidebar.isCollapsed', false],
                text: 'Expanded',
                selected: $layout.is('sidebar.isCollapsed', false)
            },
            {
                value: ['sidebar.isCollapsed', true],
                text: 'Collapsed',
                selected: $layout.is('sidebar.isCollapsed', true)
            },
        ];

        $scope.fixedSidebar = [
            {value: ['sidebar.isFixed', true], text: 'Fixed', selected: $layout.is('sidebar.isFixed', true)},
            {value: ['sidebar.isFixed', false], text: 'Static', selected: $layout.is('sidebar.isFixed', false)},
        ];

        $scope.sidebarToggleOthers = [
            {value: ['sidebar.toggleOthers', true], text: 'Yes', selected: $layout.is('sidebar.toggleOthers', true)},
            {value: ['sidebar.toggleOthers', false], text: 'No', selected: $layout.is('sidebar.toggleOthers', false)},
        ];

        $scope.sidebarVisible = [
            {value: ['sidebar.isVisible', true], text: 'Visible', selected: $layout.is('sidebar.isVisible', true)},
            {value: ['sidebar.isVisible', false], text: 'Hidden', selected: $layout.is('sidebar.isVisible', false)},
        ];

        $scope.sidebarPosition = [
            {value: ['sidebar.isRight', false], text: 'Left', selected: $layout.is('sidebar.isRight', false)},
            {value: ['sidebar.isRight', true], text: 'Right', selected: $layout.is('sidebar.isRight', true)},
        ];

        $scope.horizontalVisible = [
            {
                value: ['horizontalMenu.isVisible', true],
                text: 'Visible',
                selected: $layout.is('horizontalMenu.isVisible', true)
            },
            {
                value: ['horizontalMenu.isVisible', false],
                text: 'Hidden',
                selected: $layout.is('horizontalMenu.isVisible', false)
            },
        ];

        $scope.fixedHorizontalMenu = [
            {
                value: ['horizontalMenu.isFixed', true],
                text: 'Fixed',
                selected: $layout.is('horizontalMenu.isFixed', true)
            },
            {
                value: ['horizontalMenu.isFixed', false],
                text: 'Static',
                selected: $layout.is('horizontalMenu.isFixed', false)
            },
        ];

        $scope.horizontalOpenOnClick = [
            {
                value: ['horizontalMenu.clickToExpand', false],
                text: 'No',
                selected: $layout.is('horizontalMenu.clickToExpand', false)
            },
            {
                value: ['horizontalMenu.clickToExpand', true],
                text: 'Yes',
                selected: $layout.is('horizontalMenu.clickToExpand', true)
            },
        ];

        $scope.minimalHorizontalMenu = [
            {
                value: ['horizontalMenu.minimal', false],
                text: 'No',
                selected: $layout.is('horizontalMenu.minimal', false)
            },
            {
                value: ['horizontalMenu.minimal', true],
                text: 'Yes',
                selected: $layout.is('horizontalMenu.minimal', true)
            },
        ];

        $scope.chatVisibility = [
            {value: ['chat.isOpen', false], text: 'No', selected: $layout.is('chat.isOpen', false)},
            {value: ['chat.isOpen', true], text: 'Yes', selected: $layout.is('chat.isOpen', true)},
        ];

        $scope.boxedContainer = [
            {value: ['container.isBoxed', false], text: 'No', selected: $layout.is('container.isBoxed', false)},
            {value: ['container.isBoxed', true], text: 'Yes', selected: $layout.is('container.isBoxed', true)},
        ];

        $scope.sidebarProfile = [
            {value: ['sidebar.userProfile', false], text: 'No', selected: $layout.is('sidebar.userProfile', false)},
            {value: ['sidebar.userProfile', true], text: 'Yes', selected: $layout.is('sidebar.userProfile', true)},
        ];

        $scope.resetOptions = function () {
            $layout.resetCookies();
            window.location.reload();
        };

        var setValue = function (val) {
            if (val != null) {
                val = eval(val);
                $layout.setOptions(val[0], val[1]);
            }
        };

        $scope.$watch('opts.sidebarType', setValue);
        $scope.$watch('opts.fixedSidebar', setValue);
        $scope.$watch('opts.sidebarToggleOthers', setValue);
        $scope.$watch('opts.sidebarVisible', setValue);
        $scope.$watch('opts.sidebarPosition', setValue);

        $scope.$watch('opts.horizontalVisible', setValue);
        $scope.$watch('opts.fixedHorizontalMenu', setValue);
        $scope.$watch('opts.horizontalOpenOnClick', setValue);
        $scope.$watch('opts.minimalHorizontalMenu', setValue);

        $scope.$watch('opts.chatVisibility', setValue);

        $scope.$watch('opts.boxedContainer', setValue);

        $scope.$watch('opts.sidebarProfile', setValue);
    }).
    controller('ThemeSkinsCtrl', function ($scope, $layout) {
        var $body = jQuery("body");

        $scope.opts = {
            sidebarSkin: $layout.get('skins.sidebarMenu'),
            horizontalMenuSkin: $layout.get('skins.horizontalMenu'),
            userInfoNavbarSkin: $layout.get('skins.userInfoNavbar')
        };

        $scope.skins = [
            {value: '', name: 'Default', palette: ['#2c2e2f', '#EEEEEE', '#FFFFFF', '#68b828', '#27292a', '#323435']},
            {value: 'aero', name: 'Aero', palette: ['#558C89', '#ECECEA', '#FFFFFF', '#5F9A97', '#558C89', '#255E5b']},
            {value: 'navy', name: 'Navy', palette: ['#2c3e50', '#a7bfd6', '#FFFFFF', '#34495e', '#2c3e50', '#ff4e50']},
            {
                value: 'facebook',
                name: 'Facebook',
                palette: ['#3b5998', '#8b9dc3', '#FFFFFF', '#4160a0', '#3b5998', '#8b9dc3']
            },
            {
                value: 'turquoise',
                name: 'Truquoise',
                palette: ['#16a085', '#96ead9', '#FFFFFF', '#1daf92', '#16a085', '#0f7e68']
            },
            {value: 'lime', name: 'Lime', palette: ['#8cc657', '#ffffff', '#FFFFFF', '#95cd62', '#8cc657', '#70a93c']},
            {
                value: 'green',
                name: 'Green',
                palette: ['#27ae60', '#a2f9c7', '#FFFFFF', '#2fbd6b', '#27ae60', '#1c954f']
            },
            {
                value: 'purple',
                name: 'Purple',
                palette: ['#795b95', '#c2afd4', '#FFFFFF', '#795b95', '#27ae60', '#5f3d7e']
            },
            {
                value: 'white',
                name: 'White',
                palette: ['#FFFFFF', '#666666', '#95cd62', '#EEEEEE', '#95cd62', '#555555']
            },
            {
                value: 'concrete',
                name: 'Concrete',
                palette: ['#a8aba2', '#666666', '#a40f37', '#b8bbb3', '#a40f37', '#323232']
            },
            {
                value: 'watermelon',
                name: 'Watermelon',
                palette: ['#b63131', '#f7b2b2', '#FFFFFF', '#c03737', '#b63131', '#32932e']
            },
            {
                value: 'lemonade',
                name: 'Lemonade',
                palette: ['#f5c150', '#ffeec9', '#FFFFFF', '#ffcf67', '#f5c150', '#d9a940']
            },
        ];

        $scope.$watch('opts.sidebarSkin', function (val) {
            if (val != null) {
                $layout.setOptions('skins.sidebarMenu', val);

                $body.attr('class', $body.attr('class').replace(/\sskin-[a-z]+/)).addClass('skin-' + val);
            }
        });

        $scope.$watch('opts.horizontalMenuSkin', function (val) {
            if (val != null) {
                $layout.setOptions('skins.horizontalMenu', val);

                $body.attr('class', $body.attr('class').replace(/\shorizontal-menu-skin-[a-z]+/)).addClass('horizontal-menu-skin-' + val);
            }
        });

        $scope.$watch('opts.userInfoNavbarSkin', function (val) {
            if (val != null) {
                $layout.setOptions('skins.userInfoNavbar', val);

                $body.attr('class', $body.attr('class').replace(/\suser-info-navbar-skin-[a-z]+/)).addClass('user-info-navbar-skin-' + val);
            }
        });
    }).

    //TODO: Remove this
    // Added in v1.3
    controller('FooterChatCtrl', function ($scope, $element) {
        $scope.isConversationVisible = false;

        $scope.toggleChatConversation = function () {
            $scope.isConversationVisible = !$scope.isConversationVisible;

            if ($scope.isConversationVisible) {
                setTimeout(function () {
                    var $el = $element.find('.ps-scrollbar');

                    if ($el.hasClass('ps-scroll-down')) {
                        $el.scrollTop($el.prop('scrollHeight'));
                    }

                    $el.perfectScrollbar({
                        wheelPropagation: false
                    });

                    $element.find('.form-control').focus();

                }, 300);
            }
        }
    });
