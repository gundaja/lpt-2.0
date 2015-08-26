'use strict';

angular.module('xenon.services', []).
    service('$lptServices', function ($http) {
        this.getUserInfo = function () {
            return {
                "firstName": "Jayson",
                "lastName": "Gundayao",
                "mobileNumber": "9255961383",
                "maxNo": "5",
                "currentDiskUsage": "0",
                "maxDiskUsage": "100",
                "purgeLimit": "20",
                "accessLevel": "USER",
                "status": "Active",
                "emailAddress": "Jayson.Gundayao@vzw.com",
                "regionId": "Central Texas",
                "marketId": "TX Austin"
            }
        },

        this.getEUTranCellList = function() {
            return [1,2,3,4,5,6,6,7,8];
        }

        this.getRegionList = function () {
            return ["S. California", "N. California", "KS"];
        },

        this.getMarketList = function () {
            return ["AK Alaska", "CA Bakersfield", "CA Central LA", "CA Downtown LA Newhall", "CA North San Diego",
                    "CA Pleasanton 1", "CA Pleasanton 2", "CA Riverside", "CA San Francisco", "CA West LA"]
        },
        this.getTimeZones = function () {
            return ["Hawaiian", "Alaskan", "Pacific", "Mountain", "Central", "Eastern"]
        },

        this.getUserReportsPerRegion = function () {
            return $http.get('static/report.json', {cache: true}).then(function (result) {
                return result;
            });
        },

        this.getReportsByUser = function (userid) {
            var url = 'static/user_report.json';
            if (userid != "zbmoin") {
                url = 'static/user_report1.json';
            }

            return $http.get(url, {cache: true}).then(function (result) {
                return result;
            });
        },

        this.getEnodeByUser = function (userid) {
            var url = 'static/enodeb.json';

            return $http.get(url, {cache: true}).then(function (result) {
                return result;
            });
        },

        this.getAlerts = function () {
            return [{
                "name": "Alert 1223",
                "description": "eNodeB:038001 has TP <3",
                "link": "",
                "highlightFlag": "N"
            },
                {
                    "name": "Alert 1111",
                    "description": "eNodeB:038002 has TP <2",
                    "link": "",
                    "highlightFlag": "N"
                },
                {
                    "name": "Alert 2222",
                    "description": "eNodeB:038221 has TP <1",
                    "link": "",
                    "highlightFlag": "N"
                },
                {
                    "name": "Alert 333",
                    "description": "eNodeB:038021 has TP <.09",
                    "link": "",
                    "highlightFlag": "N"
                },
            ]
        },

        this.getReportLevels = function () {
            return ["MME Pool", "MME", "MME Service", "MME Service Member", "MME Cabinet", "MME Shelf"];
        },

        this.getCellGroups = function () {
            return ["Pleasanton_test", "SF_Test", "HQ_LPSA_CUPERTINO_CA", "HQ_LPSA_PALO_ALTO_CA",
                "HQ_DUM_700_SF_Financial_District"];
        },

        this.getAllMmePools = function () {
            return [{value: "15", text: "Central Texas[64132]"},
                {value: "13", text: "Houston/Gulf Coast[64120]"},
                {value: "6", text: "Mountain[64010]"},
                {value: "18", text: "New England[64056]"},
                {value: "2", text: "New York Metro[64078]"},
                {value: "10", text: "Ohio/Pennsylvania[64240]"},
                {value: "12", text: "Philadelphia Tri-State[64096]"},
                {value: "9", text: "South Central[64180]"},
                {value: "1", text: "Southwest[64020]"},
                {value: "25", text: "Upstate New York[640S70]"},
                {value: "3", text: "Washington/Baltimore/Virginia[64106]"}
            ];
        },
            
        this.getContentList = function() {
            return [
                { value:"301", text: "HQ eNodeB KPIs"},
                { value:"20", text: "eNodeB VoLTE FOA KPIs"},
                { value:"23", text: "eNodeB Irisview VoLTE QOS"},
                { value:"24", text: "eNodeB Irisview VoLTE SIP"},
                { value:"36", text: "eNodeB Irisview RTP Audio Gap"},
                { value:"25", text: "eNodeB Venue Performance"},
                { value:"1", text: "eNodeB Perf"},
                { value:"17", text: "eNodeB Engineering Detail"},
                { value:"18", text: "EuTranCell Engineering Detail"},
                { value:"16", text: "eNodeB CQI Perf"},
                { value:"7", text: "eNodeB_Mobility_Report"},
                { value:"8", text: "eNodeB_Integrity_Report"},
                { value:"9", text: "eNodeB Retainability Report"},
                { value:"10", text: "eNodeB Accessibility Perf"},
                { value:"11", text: "eNodeB VSWR Report"},
                { value:"12", text: "eNodeB Capacity Licenses ConnUsers"},
                { value:"14", text: "eNodeB Geographic Info"},
                { value:"2", text: "eNodeB Handover Perf"},
                { value:"5", text: "eNodeB PUSCH Interference Report"},
                { value:"21", text: "eNodeB PUCCH Interference Report"},
                { value:"22", text: "eNodeB Total Rec Interference Report"},
                { value:"19", text: "eNodeB Radio Interfernce by PRB"},
                { value:"4", text: "eNodeB IP Protocol Layer Perf"},
                { value:"3", text: "enodeB Ethernetlink Performance"},
                { value:"6", text: "eNodeB Backhaul Tranport KPIs"},
                { value:"50", text: "eNodeB Transport Detail"},
                { value:"26", text: "eNodeB Configuration Parameters"},
                { value:"28", text: "eNodeB Power Supply Parameters"},
                { value:"29", text: "eNodeB Carrier Aggregation Perf"},
                { value:"33", text: "eNodeB CA Reconfig Parameters"},
                { value:"30", text: "eNodeB eMBMS Performance"},
                { value:"80", text: "SpiderCloud Sector Carrier Perf"},
                { value:"83", text: "SpiderCloud SN Perf"},
                { value:"82", text: "SpiderCloud VOLTE Perf"},
                { value:"81", text: "SpiderCloud HARQ BLER Perf"},
            ]
        },
            this.getReportTypes = function() {
                return [
                    {value:"1", text:"15 Min Totals"},
                    {value:"2", text:"Hourly Totals"},
                    {value:"3", text:"Daily Totals"},
                    {value:"13", text:"Agg Totals"},
                    {value:"47", text:"Monthly Totals"},
                    {value:"31", text:"Hourly Agg Totals"},
                    {value:"32", text:"15 Min Agg Totals"},
                    {value:"14", text:"MMEPOOL_DataVol_BH"},
                    {value:"20", text:"MMEPOOL_RRC_Att_BH"},
                    {value:"6", text:"MME_AttachAtt_BH"},
                    {value:"7", text:"SGW_SessionAtt_BH"},
                    {value:"12", text:"Market_InitErabEstbAtt_BH"},
                    {value:"37", text:"MMEPool_QCI1_Atts_BH"},
                    {value:"43", text:"MMEPool_VoLTE_MOU_BH"},
                    {value:"9", text:"Market_SessionTime_BH"},
                    {value:"22", text:"eNB_PDCP_DL_DataVol_BH"},
                    {value:"11", text:"eNodeB_InitErabEstbAtt_BH"},
                    {value:"5", text:"eNodeB_SessionTime_BH"},
                    {value:"35", text:"eNodeB_QCI1_Atts_BH"},
                    {value:"41", text:"eNodeB_VoLTE_MOU_BH"},
                    {value:"10", text:"euCell_InitErabEstbAtt_BH"},
                    {value:"8", text:"euCell_SessionTime_BH"},
                    {value:"16", text:"euCell_PDCP_DL_DataVol_BH"},
                    {value:"39", text:"euCell_VoLTE_MOU_BH"},
                    {value:"33", text:"euCell_QCI1_Atts_BH"},
                    {value:"15", text:"Agg MMEPOOL_DataVol_BH"},
                    {value:"21", text:"Agg MMEPOOL_RRC_Att_BH"},
                    {value:"29", text:"Agg MME_AttachAtt_BH"},
                    {value:"30", text:"Agg SGW_SessionAtt_BH"},
                    {value:"38", text:"Agg MMEPool_QCI1_Atts_BH"},
                    {value:"44", text:"Agg MMEPool_VoLTE_MOU_BH"},
                    {value:"27", text:"Agg Market_InitErabEstbAtt_BH"},
                    {value:"28", text:"Agg Market_SessionTime_BH"},
                    {value:"23", text:"Agg eNB_PDCP_DL_DataVol_BH"},
                    {value:"24", text:"Agg eNodeB_InitErabEstbAtt_BH"},
                    {value:"17", text:"Agg eNodeB_SessionTime_BH"},
                    {value:"36", text:"Agg eNodeB_QCI1_Atts_BH"},
                    {value:"42", text:"Agg eNodeB_VoLTE_MOU_BH"},
                    {value:"26", text:"Agg euCell_InitErabEstbAtt_BH"},
                    {value:"25", text:"Agg euCell_PDCP_DL_DataVol_BH"},
                    {value:"18", text:"Agg euCell_SessionTime_BH"},
                    {value:"45", text:"cg_InitErabEstabAtt_BH"},
                    {value:"46", text:"cg_PDCP_DL_DataVol_BH"},
                    {value:"48", text:"Agg cg_InitErabEstabAtt_BH"},
                    {value:"49", text:"Agg cg_PDCP_DL_DataVol_BH"},
                    {value:"34", text:"Agg euCell_QCI1_Atts_BH"},
                    {value:"40", text:"Agg euCell_VoLTE_MOU_BH"},
                ]
            }

        this.getEnodeBList = function() {
            return [
                {value: "-1", text: "All"},
                {value: "3575", text: "052452_ADAMS"},
                {value: "96303", text: "052969_ADAMS_B"},
                {value: "131175", text: "352969_ADAMS_B_F2"},
                {value: "131159", text: "352452_ADAMS_F2"},
                {value: "5535", text: "052218_AGNES"},
                {value: "137723", text: "352218_AGNES_F2"},
                {value: "6031", text: "052637_ALBERS_STREET"},
                {value: "145449", text: "352637_ALBERS_STREET_F2"},
                {value: "5187", text: "052429_ARLINGTON"},
                {value: "167315", text: "052967_ARLINGTON_B"},
                {value: "184661", text: "352967_ARLINGTON_B_F2"},
                {value: "184659", text: "352429_ARLINGTON_F2"},
                {value: "18835", text: "052466_BALDWIN_HILLS_MC"},
                {value: "2876531", text: "052183_BEACHY"},
                {value: "2876541", text: "352183_BEACHY"},
                {value: "34017", text: "052525_BENELAND_MC"},
                {value: "7507", text: "052110_BEVERLY_CONN"},
                {value: "80683", text: "052958_BEVERLY_CONN_B"},
                {value: "134487", text: "352958_BEVERLY_CONN_B_F2"},
                {value: "134547", text: "352110_BEVERLY_CONN_F2"},
                {value: "149865", text: "052438_BEVERLY_DR"},
                {value: "171449", text: "352438_BEVERLY_DR_F2"},
                {value: "149869", text: "052124_BEVERLY_HILLS"},
                {value: "1254531", text: "352124_BEVERLY_HILLS_F2"},
                {value: "149875", text: "052094_BEVERLY_HILLS_H"},
                {value: "2195921", text: "352094_BEVERLY_HILLS_HOTEL_F2"},
                {value: "6665", text: "052442_BEVERLY_VISTA"},
                {value: "1774913", text: "352442_BEVERLY_VISTA_F2"},
                {value: "3359", text: "052482_BEVERLY_WESTERN"},
                {value: "94389", text: "052984_BEVERLY_WESTERN_B"},
                {value: "156077", text: "352984_BEVERLY_WESTERN_B_F2"},
                {value: "156073", text: "352482_BEVERLY_WESTERN_F2"},
                {value: "149867", text: "052253_BEVERWIL"},
                {value: "2250771", text: "352253_BEVERWIL_F2"},
                {value: "74089", text: "052545_BH_AIRPORT"},
                {value: "1257639", text: "352545_BH_AIRPORT_F2"},
                {value: "3355", text: "052289_BONHAM"},
                {value: "2208761", text: "352289_BONHAM_F2"},
                {value: "33337", text: "052291_BOZZIO"},
                {value: "2527", text: "052089_BRAND"},
                {value: "77093", text: "052956_BRAND_B"},
                {value: "119837", text: "352956_BRAND_B_F2"},
                {value: "119839", text: "352089_BRAND_F2"},
                {value: "2653", text: "052093_BRANFORD"},
                {value: "120835", text: "352093_BRANFORD_F2"},
                {value: "6165", text: "052527_BRAZIL_ST"},
                {value: "101203", text: "052983_BRAZIL_ST_B"},
                {value: "125225", text: "352983_BRAZIL_ST_B_F2"},
                {value: "125219", text: "352527_BRAZIL_ST_F2"},
                {value: "3871", text: "052403_BUCKINGHAM"},
                {value: "5813", text: "052204_BURBANK"},
                {value: "117461", text: "052511_BURBANK_AIRPORT_DAS"},
                {value: "75415", text: "052954_BURBANK_B"},
                {value: "151733", text: "352954_BURBANK_B_F2"},
                {value: "151735", text: "352204_BURBANK_F2"},
                {value: "3367", text: "052628_CAHUENGA_PASS"},
                {value: "16927", text: "052587_CAMUS"},
                {value: "1758521", text: "352587_CAMUS_F2"},
                {value: "3357", text: "052138_CAPITOL_RECORDS"},
                {value: "83365", text: "052966_CAPITOL_RECORDS_B"},
                {value: "125665", text: "352966_CAPITOL_RECORDS_B_F2"},
                {value: "125649", text: "352138_CAPITOL_RECORDS_F2"},
                {value: "3505", text: "052436_CASTLE_HTS"},
                {value: "125487", text: "352436_CASTLE_HTS_F2"},
                {value: "2899", text: "052108_CBS"},
                {value: "94109", text: "052979_CBS_B"},
                {value: "121765", text: "352979_CBS_B_F2"},
                {value: "121761", text: "352108_CBS_F2"},
                {value: "6399", text: "052249_CC_PARK"},
                {value: "94413", text: "052980_CC_PARK_B"},
                {value: "132371", text: "352980_CC_PARK_B_F2"},
                {value: "132369", text: "352249_CC_PARK_F2"},
                {value: "23257", text: "052534_CEDROS"},
                {value: "3353", text: "052549_CHANDLER_BLVD"},
                {value: "6296771", text: "352549_CHANDLER_BLVD_F2"},
                {value: "3695", text: "052448_CHEVIOT_HILLS"},
                {value: "130691", text: "352993_CHEVIOT_HILLS_B_F2"},
                {value: "130693", text: "352448_CHEVIOT_HILLS_F2"},
                {value: "180747", text: "052658_CHEWY"},
                {value: "3625", text: "052464_CLOVERDALE"},
                {value: "125311", text: "352464_CLOVERDALE_F2"},
                {value: "126673", text: "052303_COBAIN"},
                {value: "194529", text: "352303_COBAIN_F2"},
                {value: "149871", text: "052553_COLDWATER"},
                {value: "14171", text: "052512_COLFAX"},
                {value: "6485", text: "052504_COSMIC_WAY"},
                {value: "101217", text: "052970_COSMIC_WAY_B"},
                {value: "215653", text: "352970_COSMIC_WAY_B_F2"},
                {value: "215641", text: "352504_COSMIC_WAY_F2"},
                {value: "4189", text: "052306_CRANER"},
                {value: "97275", text: "052975_CRANER_B"},
                {value: "126731", text: "352975_CRANER_B_F2"},
                {value: "126297", text: "352306_CRANER_F2"},
                {value: "3799", text: "052454_CRENSHAW"},
                {value: "80173", text: "052959_CRENSHAW_B"},
                {value: "120757", text: "352959_CRENSHAW_B_F2"},
                {value: "120745", text: "352454_CRENSHAW_F2"},
                {value: "48661", text: "052028_CRESCENT_HGTS"},
                {value: "1106547", text: "352028_CRESCENT_HGTS_F2"},
                {value: "168095", text: "052388_CUMPSTON"},
                {value: "1374223", text: "352388_CUMPSTON_F2"},
                {value: "16941", text: "052588_DALI"},
                {value: "162227", text: "352588_DALI_F2"},
                {value: "90541", text: "052514_DAS_CEDARS_SINAI"},
                {value: "3983", text: "052246_DELANO"},
                {value: "122035", text: "352246_DELANO_F2"},
                {value: "4121", text: "052052_DENSMORE"},
                {value: "140153", text: "352052_DENSMORE_F2"}
                ];
            },

            this.getMmeSgwPgwList = function() {
                return ["MMEAZUSCA21MME_L_EC_01", "MMEAZUSCA21MME_L_EC_02", "MMEONTRCAOYMME_L_EC_01",
                    "MMEONTRCAOYMME_L_EC_02", "MMEVISTCA65MME_L_EC_01", "SGWAZUSCA2191A_L_EC_SGWp_02",
                    "SGWAZUSCA2191A_L_EC_SGWp_03", "SGWAZUSCA2191A_L_EC_SGWp_11", "SGWAZUSCA2191A_L_EC_SGWs_01",
                    "SGWAZUSCA2191A_L_EC_SGWs_05", "SGWAZUSCA2191A_L_EC_SGWs_12", "SGWLSAOCAGX91A_L_EC_SGWp_01",
                    "SGWLSAOCAGX91A_L_EC_SGWs_02", "SGWONTRCAOY91A_L_EC_SGWp_04", "SGWONTRCAOY91A_L_EC_SGWs_05",
                    "SGWONTRCAOY91A_L_EC_SGWx_01", "SGWVISTCA6591A_L_EC_SGWp_05", "SGWVISTCA6591A_L_EC_SGWp_12",
                    "SGWVISTCA6591A_L_EC_SGWs_03", "SGWVISTCA6591A_L_EC_SGWs_04", "SGWVISTCA6591A_L_EC_SGWs_11",
                    "SGWVISTCA6591A_L_EC_SGWx_01", "SGWVISTCA6591A_L_EC_SGWx_02", "PGWAZUSCA21PNC_L_CI_PGW_00",
                    "PGWAZUSCA21PNC_PGW", "PGWAZUSCA21PND_L_CI_PGW_00", "PGWAZUSCA21PNR_DXGW", "PGWAZUSCA21PNR_L_CI_DXGW_00",
                    "PGWAZUSCA21PNS_L_CI_DXGW_00", "PGWLSAOCAGXPND_PGW", "PGWLSAOCAGXPNS_XGW", "PGWONTRCAOYPNC_PGW",
                    "PGWONTRCAOYPND_PGW", "PGWONTRCAOYPND_PGW_ICSR", "PGWONTRCAOYPNR_DXGW", "PGWVISTCA65PNC_L_CI_PGW_00",
                    "PGWVISTCA65PND_L_CI_PGW_00", "PGWVISTCA65PND_PGW", "PGWVISTCA65PNR_L_CI_DXGW_00", "PGWVISTCA65PNS_ICSR",
                    "PGWVISTCA65PNS_L_CI_DXGW_00"]
            },

            this.getListOfNews = function () {
                return [
                    {
                        "area": -9999,
                        "areaName": null,
                        "class": "bus.home.NewsModel",
                        "highlightFlag": "N",
                        "news": [
                            "If you encounter any issues with IE please clear your browser",
                            "6/8/2015 - WAR file backed out to previous release (prior to 6/4),",
                            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                            "Irisview Export Info:",
                            "*Irisview exports are delayed by 4 - 6 hours to maintain data integrity and are imported at the ENB level.",
                            "*Irisview pegs can only be reported at the ENB level or higher."]
                    },
                    {
                        "area": 160,
                        "areaName": "Alaska",
                        "class": "bus.home.NewsModel",
                        "highlightFlag": "N",
                        "news": []
                    }, {
                        "area": 5,
                        "areaName": "Carolinas/Tennessee",
                        "class": "bus.home.NewsModel",
                        "highlightFlag": "Y",
                        "news": []
                    }, {
                        "area": 4,
                        "areaName": "Florida",
                        "class": "bus.home.NewsModel",
                        "highlightFlag": "Y",
                        "news": ["Test.", "Test"]
                    }, {
                        "area": 6,
                        "areaName": "Georgia/Alabama",
                        "class": "bus.home.NewsModel",
                        "highlightFlag": "N",
                        "news": []
                    }, {
                        "area": 7,
                        "areaName": "Great Plains",
                        "class": "bus.home.NewsModel",
                        "highlightFlag": "N",
                        "news": []
                    }, {
                        "area": 8,
                        "areaName": "Illinois/Wisconsin",
                        "class": "bus.home.NewsModel",
                        "highlightFlag": "N",
                        "news": []
                    }, {
                        "area": 21,
                        "areaName": "Kansas/Missouri",
                        "class": "bus.home.NewsModel",
                        "highlightFlag": "N",
                        "news": []
                    }, {
                        "area": 9,
                        "areaName": "Michigan/Indiana/Kentucky",
                        "class": "bus.home.NewsModel",
                        "highlightFlag": "N",
                        "news": []
                    }, {
                        "area": 44,
                        "areaName": "MidWest IL/WI LRA",
                        "class": "bus.home.NewsModel",
                        "highlightFlag": "N",
                        "news": []
                    }, {
                        "area": 2,
                        "areaName": "N. California",
                        "class": "bus.home.NewsModel",
                        "highlightFlag": "N",
                        "news": ["This is line1.", "This is line2.", "This is line3."]
                    }, {
                        "area": 1,
                        "areaName": "Pacific Northwest",
                        "class": "bus.home.NewsModel",
                        "highlightFlag": "N",
                        "news": ["This is line1.", "This is line2.", "This is line3."]
                    }, {
                        "area": 3,
                        "areaName": "S. California",
                        "class": "bus.home.NewsModel",
                        "highlightFlag": "N",
                        "news": []
                    }, {
                        "area": 42,
                        "areaName": null,
                        "class": "bus.home.NewsModel",
                        "highlightFlag": "N",
                        "news": []
                    }]
            }
    }).


    // Populate the main menu items
    service('$menuItems', function () {
        this.menuItems = [];

        var $menuItemsRef = this;

        var menuItemObj = {
            parent: null,

            title: '',
            link: '', // starting with "./" will refer to parent link concatenation
            state: '', // will be generated from link automatically where "/" (forward slashes) are replaced with "."
            icon: '',

            isActive: false,
            label: null,

            menuItems: [],

            setLabel: function (label, color, hideWhenCollapsed) {
                if (typeof hideWhenCollapsed == 'undefined')
                    hideWhenCollapsed = true;

                this.label = {
                    text: label,
                    classname: color,
                    collapsedHide: hideWhenCollapsed
                };

                return this;
            },

            addItem: function (title, link, icon) {
                var parent = this,
                    item = angular.extend(angular.copy(menuItemObj), {
                        parent: parent,

                        title: title,
                        link: link,
                        icon: icon
                    });

                if (item.link) {
                    if (item.link.match(/^\./))
                        item.link = parent.link + item.link.substring(1, link.length);

                    if (item.link.match(/^-/))
                        item.link = parent.link + '-' + item.link.substring(2, link.length);

                    item.state = $menuItemsRef.toStatePath(item.link);
                }

                this.menuItems.push(item);

                return item;
            }
        };

        this.addItem = function (title, link, icon) {
            var item = angular.extend(angular.copy(menuItemObj), {
                title: title,
                link: link,
                state: this.toStatePath(link),
                icon: icon
            });

            this.menuItems.push(item);

            return item;
        };

        this.getAll = function () {
            return this.menuItems;
        };

        this.prepareSidebarMenu = function () {
            var dashboard = this.addItem('Dashboard', '/app/dashboard', 'linecons-cog');
            var layouts = this.addItem('Layout & Skins', '/app/layout-and-skins', 'linecons-desktop');
            var ui_elements = this.addItem('UI Elements', '/app/ui', 'linecons-note');
            var widgets = this.addItem('Widgets', '/app/widgets', 'linecons-star');
            var mailbox = this.addItem('Mailbox', '/app/mailbox', 'linecons-mail').setLabel('5', 'secondary', false);
            var tables = this.addItem('Tables', '/app/tables', 'linecons-database');
            var forms = this.addItem('Forms', '/app/forms', 'linecons-params');
            var extra = this.addItem('Extra', '/app/extra', 'linecons-beaker').setLabel('New Items', 'purple');
            var charts = this.addItem('Charts', '/app/charts', 'linecons-globe');
            var menu_lvls = this.addItem('Menu Levels', '', 'linecons-cloud');


            // Subitems of Dashboard
            dashboard.addItem('Dashboard 1', '-/variant-1'); // "-/" will append parents link
            dashboard.addItem('Dashboard 2', '-/variant-2');
            dashboard.addItem('Dashboard 3', '-/variant-3');
            dashboard.addItem('Dashboard 4', '-/variant-4');
            dashboard.addItem('Update Hightlights', '/app/update-highlights').setLabel('v1.3', 'pink');


            // Subitems of UI Elements
            ui_elements.addItem('Panels', '-/panels');
            ui_elements.addItem('Buttons', '-/buttons');
            ui_elements.addItem('Tabs & Accordions', '-/tabs-accordions');
            ui_elements.addItem('Modals', '-/modals');
            ui_elements.addItem('Breadcrumbs', '-/breadcrumbs');
            ui_elements.addItem('Blockquotes', '-/blockquotes');
            ui_elements.addItem('Progress Bars', '-/progress-bars');
            ui_elements.addItem('Navbars', '-/navbars');
            ui_elements.addItem('Alerts', '-/alerts');
            ui_elements.addItem('Pagination', '-/pagination');
            ui_elements.addItem('Typography', '-/typography');
            ui_elements.addItem('Other Elements', '-/other-elements');


            // Subitems of Mailbox
            mailbox.addItem('Inbox', '-/inbox');
            mailbox.addItem('Compose Message', '-/compose');
            mailbox.addItem('View Message', '-/message');


            // Subitems of Tables
            tables.addItem('Basic Tables', '-/basic');
            tables.addItem('Responsive Tables', '-/responsive');
            tables.addItem('Data Tables', '-/datatables');

            tables.addItem('Member Account', '-/account');


            // Subitems of Forms
            forms.addItem('Native Elements', '-/native');
            forms.addItem('Advanced Plugins', '-/advanced');
            forms.addItem('Form Wizard', '-/wizard');
            forms.addItem('Form Validation', '-/validation');
            forms.addItem('Input Masks', '-/input-masks');
            forms.addItem('File Upload', '-/file-upload');
            forms.addItem('Editors', '-/wysiwyg');
            forms.addItem('Sliders', '-/sliders');


            // Subitems of Extra
            var extra_icons = extra.addItem('Icons', '-/icons');
            var extra_maps = extra.addItem('Maps', '-/maps');
            var members = extra.addItem('Members', '-/members').setLabel('New', 'warning');
            extra.addItem('Gallery', '-/gallery');
            extra.addItem('Calendar', '-/calendar');
            extra.addItem('Profile', '-/profile');
            extra.addItem('Login', '/login');
            extra.addItem('Lockscreen', '/lockscreen');
            extra.addItem('Login Light', '/login-light');
            extra.addItem('Timeline', '-/timeline');
            extra.addItem('Timeline Centered', '-/timeline-centered');
            extra.addItem('Notes', '-/notes');
            extra.addItem('Image Crop', '-/image-crop');
            extra.addItem('Portlets', '-/portlets');
            extra.addItem('Blank Page', '-/blank-page');
            extra.addItem('Search', '-/search');
            extra.addItem('Invoice', '-/invoice');
            extra.addItem('404 Page', '-/page-404');
            extra.addItem('Tocify', '-/tocify');
            extra.addItem('Loading Progress', '-/loading-progress');
            //extra.addItem('Page Loading Overlay', 		'-/page-loading-overlay'); NOT SUPPORTED IN ANGULAR
            extra.addItem('Notifications', '-/notifications');
            extra.addItem('Nestable Lists', '-/nestable-lists');
            extra.addItem('Scrollable', '-/scrollable');

            // Submenu of Extra/Icons
            extra_icons.addItem('Font Awesome', '-/font-awesome');
            extra_icons.addItem('Linecons', '-/linecons');
            extra_icons.addItem('Elusive', '-/elusive');
            extra_icons.addItem('Meteocons', '-/meteocons');

            // Submenu of Extra/Maps
            extra_maps.addItem('Google Maps', '-/google');
            extra_maps.addItem('Advanced Map', '-/advanced');
            extra_maps.addItem('Vector Map', '-/vector');

            // Submenu of Members
            members.addItem('Members List', '-/list');
            members.addItem('Add Member', '-/add');


            // Subitems of Charts
            charts.addItem('Chart Variants', '-/variants');
            charts.addItem('Range Selector', '-/range-selector');
            charts.addItem('Sparklines', '-/sparklines');
            charts.addItem('Map Charts', '-/map-charts');
            charts.addItem('Circular Gauges', '-/gauges');
            charts.addItem('Bar Gauges', '-/bar-gauges');


            // Subitems of Menu Levels
            var menu_lvl1 = menu_lvls.addItem('Menu Item 1.1');  // has to be referenced to add sub menu elements
            menu_lvls.addItem('Menu Item 1.2');
            menu_lvls.addItem('Menu Item 1.3');

            // Sub Level 2
            menu_lvl1.addItem('Menu Item 2.1');
            var menu_lvl2 = menu_lvl1.addItem('Menu Item 2.2'); // has to be referenced to add sub menu elements
            menu_lvl1.addItem('Menu Item 2.3');

            // Sub Level 3
            menu_lvl2.addItem('Menu Item 3.1');
            menu_lvl2.addItem('Menu Item 3.2');


            return this;
        };

        this.prepareHorizontalMenu = function () {
            var report = this.addItem('Reports', '/app/reports', '');
            var custom_report = this.addItem('Custom Reporting', '/app/custom-reports', '');
            var scheduling = this.addItem('Scheduling', '/app/scheduling', '');

            // Subitems of Report
            report.addItem('Structure Ad Hoc', '-/struc-adhoc');
            report.addItem('Structure Ad Hoc (Mobile)', '-/struc-adhoc-m');
            report.addItem('Report Browser', '-/report-browser');
            report.addItem('Hist Scan Trend', '-/struc-adhoc');


            // Subitems of Custom Report
            custom_report.addItem('Formula Editor', '-/struc-adhoc');
            custom_report.addItem('Report Builder', '-/struc-adhoc');

            // Subitems of Scheduling
            scheduling.addItem('Report Scheduler', '-/struc-adhoc');
            scheduling.addItem('My Scheduled Reports', '-/struc-adhoc');
            scheduling.addItem('View Other Scheduled Reports', '-/struc-adhoc');


            var layouts = this.addItem('Sidebar', '/app/layout-and-skins', 'linecons-desktop');


            return this;
        }

        this.instantiate = function () {
            return angular.copy(this);
        }

        this.toStatePath = function (path) {
            return path.replace(/\//g, '.').replace(/^\./, '');
        };

        this.setActive = function (path) {
            this.iterateCheck(this.menuItems, this.toStatePath(path));
        };

        this.setActiveParent = function (item) {
            item.isActive = true;
            item.isOpen = true;

            if (item.parent)
                this.setActiveParent(item.parent);
        };

        this.iterateCheck = function (menuItems, currentState) {
            angular.forEach(menuItems, function (item) {
                if (item.state == currentState) {
                    item.isActive = true;

                    if (item.parent != null)
                        $menuItemsRef.setActiveParent(item.parent);
                }
                else {
                    item.isActive = false;
                    item.isOpen = false;

                    if (item.menuItems.length) {
                        $menuItemsRef.iterateCheck(item.menuItems, currentState);
                    }
                }
            });
        }
    }
);
