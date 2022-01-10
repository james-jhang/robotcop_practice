import "./robot-model";
import * as moment from 'moment';
import { Suite, Test, Keyword } from "./robot-model";
moment().format();

function robotTimetoDate(time: string) {
    return moment(time, 'YYYYMMDD HH:mm:ss.SSS').toDate();
}

export const suite = new Suite({
    id: "s1",
    name: "DCT-20545 Enhancement in creating Items to support DC Power",
    longname: "DCT-20545 Enhancement in creating Items to support DC Power",
    source: "C:\\Users\\Lab1321\\Desktop\\Projects\\Intelligent_Timeout\\intelligent_timeout_test_set\\Regression Test\\Assets\\Item Detail\\DCT-20545 Enhancement in creating Items to support DC Power.robot",
    passed: true,
    status: "PASS",
    starttime: robotTimetoDate('20220104 17:53:14.719'),
    endtime: robotTimetoDate('20220104 17:54:18.999'),
    elapsedtime: 64280,
    teardown: new Keyword({
        id: "s1-k2",
        name: "common.Logoff",
        source: "C:\\Users\\Lab1321\\Desktop\\Projects\\Intelligent_Timeout\\intelligent_timeout_test_set\\Regression Test\\Assets\\Item Detail\\DCT-20545 Enhancement in creating Items to support DC Power.robot",
        passed: true,
        status: "PASS",
        starttime: robotTimetoDate("20220104 17:54:16.051"),
        endtime: robotTimetoDate("20220104 17:54:18.998"),
        elapsedtime: 2947,
        args: [],
        kwname: "Logoff",
        libname: "common",
        type: "teardown",
    }),
    setup: new Keyword({
        id: "s1-k1",
        name: "assets.On The Items List Page",
        source: "C:\\Users\\Lab1321\\Desktop\\Projects\\Intelligent_Timeout\\intelligent_timeout_test_set\\Regression Test\\Assets\\Item Detail\\DCT-20545 Enhancement in creating Items to support DC Power.robot",
        passed: true,
        status: "PASS",
        starttime: robotTimetoDate("20220104 17:53:15.823"),
        endtime: robotTimetoDate("20220104 17:53:36.910"),
        elapsedtime: 21087,
        args: [],
        kwname: "On The Items List Page",
        libname: "assets",
        type: "setup",
    }),
    tests: [
        new Test({
            id: "s1-t1",
            name: "Phase Type can be changed to Direct Current for device",
            longname: "DCT-20545 Enhancement in creating Items to support DC Power.Phase Type can be changed to Direct Current for device",
            source: "C:\\Users\\Lab1321\\Desktop\\Projects\\Intelligent_Timeout\\intelligent_timeout_test_set\\Regression Test\\Assets\\Item Detail\\DCT-20545 Enhancement in creating Items to support DC Power.robot",
            passed: true,
            status: "PASS",
            starttime: robotTimetoDate("20220104 17:53:36.911"),
            endtime: robotTimetoDate("20220104 17:54:16.049"),
            elapsedtime: 39138,
            tags: [
                "DCT-20545",
                "TMD-16175"
            ],
            setup: new Keyword({
                id: "s1-t1-k1",
                name: "BuiltIn.Run Keywords",
                source: "C:\\Users\\Lab1321\\Desktop\\Projects\\Intelligent_Timeout\\intelligent_timeout_test_set\\Regression Test\\Assets\\Item Detail\\DCT-20545 Enhancement in creating Items to support DC Power.robot",
                passed: true,
                status: "PASS",
                starttime: robotTimetoDate("20220104 17:53:36.914"),
                endtime: robotTimetoDate("20220104 17:53:49.586"),
                elapsedtime: 12672,
                args: [
                    "Items List::Open Item With Edit Mode",
                    "${deviceItem}",
                    "AND",
                    "Item Detail::Click Power Supply Ports Sub-tab"
                ],
                "kwname": "Run Keywords",
                "libname": "BuiltIn",
                "type": "setup",
                keywords: [
                    new Keyword({
                        id: "s1-t1-k1-k1",
                        name: "assets.Items List::Open Item With Edit Mode",
                        source: "C:\\Users\\Lab1321\\Desktop\\Projects\\Intelligent_Timeout\\intelligent_timeout_test_set\\Regression Test\\Assets\\Item Detail\\DCT-20545 Enhancement in creating Items to support DC Power.robot",
                        passed: true,
                        status: "PASS",
                        starttime: robotTimetoDate("20220104 17:53:36.916"),
                        endtime: robotTimetoDate("20220104 17:53:47.815"),
                        elapsedtime: 10899,
                        args: [
                            "${deviceItem}"
                        ],
                        kwname: "Items List::Open Item With Edit Mode",
                        libname: "assets",
                        type: "kw",
                    }), new Keyword({
                        id: "s1-t1-k1-k2",
                        name: "assets.Item Detail::Click Power Supply Ports Sub-tab",
                        source: "C:\\Users\\Lab1321\\Desktop\\Projects\\Intelligent_Timeout\\intelligent_timeout_test_set\\Regression Test\\Assets\\Item Detail\\DCT-20545 Enhancement in creating Items to support DC Power.robot",
                        passed: true,
                        status: "PASS",
                        starttime: robotTimetoDate("20220104 17:53:47.817"),
                        endtime: robotTimetoDate("20220104 17:53:49.585"),
                        elapsedtime: 1768,
                        args: [],
                        kwname: "Item Detail::Click Power Supply Ports Sub-tab",
                        libname: "assets",
                        type: "kw",
                    })
                ]
            }),
            teardown: new Keyword({
                id: "s1-t1-k4",
                name: "BuiltIn.Run Keywords",
                source: "C:\\Users\\Lab1321\\Desktop\\Projects\\Intelligent_Timeout\\intelligent_timeout_test_set\\Regression Test\\Assets\\Item Detail\\DCT-20545 Enhancement in creating Items to support DC Power.robot",
                passed: true,
                status: "PASS",
                starttime: robotTimetoDate("20220104 17:54:05.967"),
                endtime: robotTimetoDate("20220104 17:54:16.048"),
                elapsedtime: 10081,
                args: [
                    "Revert Phase Type And Connector",
                    "AND",
                    "Items List::Close Tab",
                    "${deviceItem}"
                ],
                kwname: "Run Keywords",
                libname: "BuiltIn",
                type: "teardown",
            }),
            keywords: [
                new Keyword({
                    id: "s1-t1-k2",
                    name: "Edit Phase Type To Direct Current",
                    source: "C:\\Users\\Lab1321\\Desktop\\Projects\\Intelligent_Timeout\\intelligent_timeout_test_set\\Regression Test\\Assets\\Item Detail\\DCT-20545 Enhancement in creating Items to support DC Power.robot",
                    passed: true,
                    status: "PASS",
                    starttime: robotTimetoDate("20220104 17:53:49.587"),
                    endtime: robotTimetoDate("20220104 17:54:05.212"),
                    elapsedtime: 15625,
                    args: [],
                    kwname: "Edit Phase Type To Direct Current",
                    libname: "",
                    type: "kw",
                    keywords: [
                        new Keyword({
                            id: "s1-t1-k2-k1",
                            name: "Change Port Phase Type And Connector To",
                            source: "C:\\Users\\Lab1321\\Desktop\\Projects\\Intelligent_Timeout\\intelligent_timeout_test_set\\Regression Test\\Assets\\Item Detail\\DCT-20545 Enhancement in creating Items to support DC Power.robot",
                            passed: true,
                            status: "PASS",
                            starttime: robotTimetoDate("20220104 17:53:49.587"),
                            endtime: robotTimetoDate("20220104 17:54:05.212"),
                            elapsedtime: 15625,
                            args: [
                                "PS1",
                                "Direct Current",
                                "Hardwired"
                            ],
                            kwname: "Change Port Phase Type And Connector To",
                            libname: "",
                            type: "kw",
                        })
                    ]
                }),
                new Keyword({
                    id: "s1-t1-k3",
                    name: "Port Phase Type Should Be Direct Current",
                    source: "C:\\Users\\Lab1321\\Desktop\\Projects\\Intelligent_Timeout\\intelligent_timeout_test_set\\Regression Test\\Assets\\Item Detail\\DCT-20545 Enhancement in creating Items to support DC Power.robot",
                    passed: true,
                    status: "PASS",
                    starttime: robotTimetoDate("20220104 17:54:05.213"),
                    endtime: robotTimetoDate("20220104 17:54:05.965"),
                    elapsedtime: 752,
                    args: [
                        "portName=PS1"
                    ],
                    kwname: "Port Phase Type Should Be Direct Current",
                    libname: "",
                    type: "kw",
                    keywords: [
                        new Keyword({
                            id: "s1-t1-k3-k1",
                            name: "assets.Item Detail::Power Supply Ports::Scroll Grid Vertically Until Content Is Visible",
                            source: "C:\\Users\\Lab1321\\Desktop\\Projects\\Intelligent_Timeout\\intelligent_timeout_test_set\\Regression Test\\Assets\\Item Detail\\DCT-20545 Enhancement in creating Items to support DC Power.robot",
                            passed: true,
                            status: "PASS",
                            starttime: robotTimetoDate("20220104 17:54:05.214"),
                            endtime: robotTimetoDate("20220104 17:54:05.368"),
                            elapsedtime: 154,
                            args: [
                                "Port Name",
                                "${portName}"
                            ],
                            kwname: "Item Detail::Power Supply Ports::Scroll Grid Vertically Until Content Is Visible",
                            libname: "assets",
                            type: "kw",
                        }),
                        new Keyword({
                            id: "s1-t1-k3-k2",
                            name: "assets.Item Detail::Power Supply Ports::Get Port Information",
                            source: "C:\\Users\\Lab1321\\Desktop\\Projects\\Intelligent_Timeout\\intelligent_timeout_test_set\\Regression Test\\Assets\\Item Detail\\DCT-20545 Enhancement in creating Items to support DC Power.robot",
                            passed: true,
                            status: "PASS",
                            starttime: robotTimetoDate("20220104 17:54:05.369"),
                            endtime: robotTimetoDate("20220104 17:54:05.962"),
                            elapsedtime: 593,
                            args: [
                                "${portName}"
                            ],
                            kwname: "Item Detail::Power Supply Ports::Get Port Information",
                            libname: "assets",
                            type: "kw",
                        }),
                        new Keyword({
                            id: "s1-t1-k3-k3",
                            name: "BuiltIn.Should Be Equal",
                            source: "C:\\Users\\Lab1321\\Desktop\\Projects\\Intelligent_Timeout\\intelligent_timeout_test_set\\Regression Test\\Assets\\Item Detail\\DCT-20545 Enhancement in creating Items to support DC Power.robot",
                            passed: true,
                            status: "PASS",
                            starttime: robotTimetoDate("20220104 17:54:05.963"),
                            endtime: robotTimetoDate("20220104 17:54:05.965"),
                            elapsedtime: 2,
                            args: [
                                "'Direct Current'",
                                "'${powerSupplyPortInfo['Phase Type']}'",
                                "msg=Phase Type of power supply port \"${portName}\" should be Direct Current"
                            ],
                            kwname: "Should Be Equal",
                            libname: "BuiltIn",
                            type: "kw",
                        })
                    ]
                }),
            ]
        })
    ]
})