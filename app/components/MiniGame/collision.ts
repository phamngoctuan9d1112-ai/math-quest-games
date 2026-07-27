export const MAP_WIDTH = 1632;

export const MAP_HEIGHT = 918;
export function canMove(

    x:number,

    y:number,

    size:number=48
    

){

    return !collisions.some(c=>{

        return (

            x + size > c.x &&

            x < c.x + c.width &&

            y + size > c.y &&

            y < c.y + c.height

        );

    });

}
export const collisions = [
    {
        "x": 147,
        "y": 72,
        "width": 468,
        "height": 191
    },
    {
        "x": 3,
        "y": 6,
        "width": 141,
        "height": 255
    },
    {
        "x": 145,
        "y": 4,
        "width": 463,
        "height": 65
    },
    {
        "x": 1,
        "y": 268,
        "width": 230,
        "height": 445
    },
    {
        "x": 414,
        "y": 331,
        "width": 230,
        "height": 302
    },
    {
        "x": 645,
        "y": 333,
        "width": 105,
        "height": 302
    },
    {
        "x": 752,
        "y": 383,
        "width": 148,
        "height": 240
    },
    {
        "x": 902,
        "y": 481,
        "width": 0,
        "height": 0
    },
    {
        "x": 903,
        "y": 399,
        "width": 21,
        "height": 220
    },
    {
        "x": 232,
        "y": 635,
        "width": 247,
        "height": 78
    },
    {
        "x": 232,
        "y": 425,
        "width": 181,
        "height": 206
    },
    {
        "x": 374,
        "y": 413,
        "width": 38,
        "height": 11
    },
    {
        "x": 236,
        "y": 407,
        "width": 25,
        "height": 16
    },
    {
        "x": 234,
        "y": 277,
        "width": 36,
        "height": 51
    },
    {
        "x": 235,
        "y": 330,
        "width": 54,
        "height": 25
    },
    {
        "x": 451,
        "y": 315,
        "width": 230,
        "height": 15
    },
    {
        "x": 689,
        "y": 313,
        "width": 30,
        "height": 17
    },
    {
        "x": 752,
        "y": 347,
        "width": 26,
        "height": 32
    },
    {
        "x": 781,
        "y": 366,
        "width": 33,
        "height": 12
    },
    {
        "x": 1,
        "y": 766,
        "width": 28,
        "height": 486
    },
    {
        "x": 30,
        "y": 778,
        "width": 229,
        "height": 253
    },
    {
        "x": 260,
        "y": 775,
        "width": 85,
        "height": 269
    },
    {
        "x": 347,
        "y": 784,
        "width": 92,
        "height": 496
    },
    {
        "x": 442,
        "y": 786,
        "width": 77,
        "height": 460
    },
    {
        "x": 564,
        "y": 707,
        "width": 125,
        "height": 499
    },
    {
        "x": 518,
        "y": 781,
        "width": 45,
        "height": 466
    },
    {
        "x": 551,
        "y": 714,
        "width": 11,
        "height": 66
    },
    {
        "x": 548,
        "y": 777,
        "width": 0,
        "height": 0
    },
    {
        "x": 537,
        "y": 757,
        "width": 12,
        "height": 18
    },
    {
        "x": 326,
        "y": 1231,
        "width": 21,
        "height": 80
    },
    {
        "x": 310,
        "y": 1286,
        "width": 15,
        "height": 26
    },
    {
        "x": 350,
        "y": 1281,
        "width": 49,
        "height": 31
    },
    {
        "x": 402,
        "y": 1282,
        "width": 16,
        "height": 14
    },
    {
        "x": 422,
        "y": 1281,
        "width": 2,
        "height": 10
    },
    {
        "x": 403,
        "y": 1298,
        "width": 3,
        "height": 3
    },
    {
        "x": 442,
        "y": 1247,
        "width": 8,
        "height": 20
    },
    {
        "x": 503,
        "y": 1249,
        "width": 90,
        "height": 362
    },
    {
        "x": 428,
        "y": 1332,
        "width": 74,
        "height": 259
    },
    {
        "x": 447,
        "y": 1591,
        "width": 55,
        "height": 20
    },
    {
        "x": 463,
        "y": 1318,
        "width": 38,
        "height": 13
    },
    {
        "x": 481,
        "y": 1304,
        "width": 21,
        "height": 12
    },
    {
        "x": 492,
        "y": 1292,
        "width": 10,
        "height": 10
    },
    {
        "x": 292,
        "y": 1355,
        "width": 77,
        "height": 269
    },
    {
        "x": 274,
        "y": 1432,
        "width": 18,
        "height": 218
    },
    {
        "x": 281,
        "y": 1423,
        "width": 10,
        "height": 7
    },
    {
        "x": 288,
        "y": 1413,
        "width": 0,
        "height": 0
    },
    {
        "x": 285,
        "y": 1414,
        "width": 1,
        "height": 0
    },
    {
        "x": 286,
        "y": 1417,
        "width": 0,
        "height": 0
    },
    {
        "x": 1,
        "y": 1257,
        "width": 36,
        "height": 366
    },
    {
        "x": 0,
        "y": 1625,
        "width": 276,
        "height": 121
    },
    {
        "x": 40,
        "y": 1474,
        "width": 231,
        "height": 147
    },
    {
        "x": 39,
        "y": 1419,
        "width": 24,
        "height": 51
    },
    {
        "x": 66,
        "y": 1434,
        "width": 9,
        "height": 36
    },
    {
        "x": 77,
        "y": 1453,
        "width": 16,
        "height": 20
    },
    {
        "x": 99,
        "y": 1459,
        "width": 15,
        "height": 13
    },
    {
        "x": 120,
        "y": 1464,
        "width": 0,
        "height": 0
    },
    {
        "x": 122,
        "y": 1466,
        "width": 8,
        "height": 2
    },
    {
        "x": 148,
        "y": 1468,
        "width": 13,
        "height": 2
    },
    {
        "x": 182,
        "y": 1466,
        "width": 81,
        "height": 0
    },
    {
        "x": 228,
        "y": 1453,
        "width": 38,
        "height": 3
    },
    {
        "x": 238,
        "y": 1459,
        "width": 30,
        "height": 0
    },
    {
        "x": 34,
        "y": 1131,
        "width": 15,
        "height": 26
    },
    {
        "x": 31,
        "y": 1161,
        "width": 9,
        "height": 16
    },
    {
        "x": 30,
        "y": 1034,
        "width": 52,
        "height": 73
    },
    {
        "x": 86,
        "y": 1033,
        "width": 42,
        "height": 23
    },
    {
        "x": 84,
        "y": 1058,
        "width": 21,
        "height": 15
    },
    {
        "x": 86,
        "y": 1074,
        "width": 13,
        "height": 14
    },
    {
        "x": 32,
        "y": 1108,
        "width": 42,
        "height": 12
    },
    {
        "x": 34,
        "y": 1120,
        "width": 24,
        "height": 8
    },
    {
        "x": 197,
        "y": 1034,
        "width": 96,
        "height": 29
    },
    {
        "x": 299,
        "y": 1047,
        "width": 44,
        "height": 25
    },
    {
        "x": 324,
        "y": 1123,
        "width": 21,
        "height": 50
    },
    {
        "x": 267,
        "y": 1129,
        "width": 14,
        "height": 60
    },
    {
        "x": 277,
        "y": 1094,
        "width": 20,
        "height": 23
    },
    {
        "x": 85,
        "y": 1247,
        "width": 119,
        "height": 54
    },
    {
        "x": 111,
        "y": 1228,
        "width": 84,
        "height": 17
    },
    {
        "x": 120,
        "y": 1304,
        "width": 44,
        "height": 62
    },
    {
        "x": 90,
        "y": 1343,
        "width": 38,
        "height": 32
    },
    {
        "x": 53,
        "y": 1229,
        "width": 30,
        "height": 18
    },
    {
        "x": 97,
        "y": 1237,
        "width": 9,
        "height": 7
    },
    {
        "x": 219,
        "y": 1264,
        "width": 0,
        "height": 0
    },
    {
        "x": 205,
        "y": 1251,
        "width": 14,
        "height": 15
    },
    {
        "x": 207,
        "y": 1270,
        "width": 6,
        "height": 13
    },
    {
        "x": 71,
        "y": 1272,
        "width": 12,
        "height": 19
    },
    {
        "x": 565,
        "y": 1206,
        "width": 162,
        "height": 95
    },
    {
        "x": 596,
        "y": 1308,
        "width": 175,
        "height": 217
    },
    {
        "x": 277,
        "y": 1667,
        "width": 766,
        "height": 79
    },
    {
        "x": 1169,
        "y": 1651,
        "width": 1020,
        "height": 94
    },
    {
        "x": 2285,
        "y": 1351,
        "width": 631,
        "height": 394
    },
    {
        "x": 2193,
        "y": 1651,
        "width": 90,
        "height": 91
    },
    {
        "x": 2252,
        "y": 1621,
        "width": 27,
        "height": 25
    },
    {
        "x": 1765,
        "y": 1540,
        "width": 403,
        "height": 26
    },
    {
        "x": 2109,
        "y": 1272,
        "width": 107,
        "height": 259
    },
    {
        "x": 2171,
        "y": 1539,
        "width": 11,
        "height": 7
    },
    {
        "x": 2194,
        "y": 1538,
        "width": 7,
        "height": 7
    },
    {
        "x": 2187,
        "y": 1548,
        "width": 1,
        "height": 1
    },
    {
        "x": 2196,
        "y": 1547,
        "width": 0,
        "height": 0
    },
    {
        "x": 2177,
        "y": 1551,
        "width": 0,
        "height": 0
    },
    {
        "x": 2168,
        "y": 1552,
        "width": 0,
        "height": 0
    },
    {
        "x": 2168,
        "y": 1550,
        "width": 9,
        "height": 4
    },
    {
        "x": 2203,
        "y": 1534,
        "width": 7,
        "height": 4
    },
    {
        "x": 1687,
        "y": 1210,
        "width": 418,
        "height": 322
    },
    {
        "x": 1605,
        "y": 1356,
        "width": 78,
        "height": 210
    },
    {
        "x": 1688,
        "y": 1540,
        "width": 72,
        "height": 28
    },
    {
        "x": 1155,
        "y": 1366,
        "width": 194,
        "height": 229
    },
    {
        "x": 1261,
        "y": 1342,
        "width": 342,
        "height": 31
    },
    {
        "x": 1361,
        "y": 1220,
        "width": 322,
        "height": 115
    },
    {
        "x": 1350,
        "y": 1375,
        "width": 84,
        "height": 83
    },
    {
        "x": 1434,
        "y": 1405,
        "width": 35,
        "height": 42
    },
    {
        "x": 1471,
        "y": 1417,
        "width": 46,
        "height": 59
    },
    {
        "x": 1520,
        "y": 1430,
        "width": 16,
        "height": 36
    },
    {
        "x": 1357,
        "y": 1532,
        "width": 107,
        "height": 64
    },
    {
        "x": 1467,
        "y": 1522,
        "width": 37,
        "height": 62
    },
    {
        "x": 1509,
        "y": 1525,
        "width": 16,
        "height": 45
    },
    {
        "x": 1352,
        "y": 1463,
        "width": 79,
        "height": 24
    },
    {
        "x": 1431,
        "y": 1487,
        "width": 0,
        "height": 0
    },
    {
        "x": 1200,
        "y": 1193,
        "width": 120,
        "height": 64
    },
    {
        "x": 1215,
        "y": 1260,
        "width": 107,
        "height": 35
    },
    {
        "x": 1339,
        "y": 1138,
        "width": 11,
        "height": 66
    },
    {
        "x": 1352,
        "y": 1154,
        "width": 11,
        "height": 47
    },
    {
        "x": 1365,
        "y": 1166,
        "width": 9,
        "height": 25
    },
    {
        "x": 1299,
        "y": 1159,
        "width": 37,
        "height": 30
    },
    {
        "x": 1327,
        "y": 1191,
        "width": 10,
        "height": 13
    },
    {
        "x": 1228,
        "y": 1174,
        "width": 66,
        "height": 14
    },
    {
        "x": 1319,
        "y": 1146,
        "width": 16,
        "height": 11
    },
    {
        "x": 1247,
        "y": 1163,
        "width": 48,
        "height": 9
    },
    {
        "x": 1213,
        "y": 1179,
        "width": 9,
        "height": 9
    },
    {
        "x": 1165,
        "y": 1211,
        "width": 9,
        "height": 66
    },
    {
        "x": 1479,
        "y": 1133,
        "width": 10,
        "height": 37
    },
    {
        "x": 1543,
        "y": 1143,
        "width": 38,
        "height": 76
    },
    {
        "x": 1444,
        "y": 1189,
        "width": 97,
        "height": 28
    },
    {
        "x": 1628,
        "y": 1134,
        "width": 75,
        "height": 75
    },
    {
        "x": 1581,
        "y": 1173,
        "width": 17,
        "height": 44
    },
    {
        "x": 1601,
        "y": 1190,
        "width": 17,
        "height": 25
    },
    {
        "x": 1623,
        "y": 1205,
        "width": 3,
        "height": 8
    },
    {
        "x": 1735,
        "y": 1134,
        "width": 92,
        "height": 73
    },
    {
        "x": 1833,
        "y": 1174,
        "width": 31,
        "height": 32
    },
    {
        "x": 1867,
        "y": 1187,
        "width": 50,
        "height": 19
    },
    {
        "x": 2917,
        "y": 1355,
        "width": 144,
        "height": 291
    },
    {
        "x": 2588,
        "y": 1188,
        "width": 474,
        "height": 163
    },
    {
        "x": 2544,
        "y": 1303,
        "width": 41,
        "height": 46
    },
    {
        "x": 2314,
        "y": 1116,
        "width": 155,
        "height": 148
    },
    {
        "x": 2465,
        "y": 1085,
        "width": 63,
        "height": 126
    },
    {
        "x": 2490,
        "y": 1228,
        "width": 30,
        "height": 28
    },
    {
        "x": 2525,
        "y": 1064,
        "width": 51,
        "height": 105
    },
    {
        "x": 2723,
        "y": 1093,
        "width": 337,
        "height": 89
    },
    {
        "x": 2579,
        "y": 1083,
        "width": 141,
        "height": 43
    },
    {
        "x": 2153,
        "y": 1188,
        "width": 61,
        "height": 79
    },
    {
        "x": 2176,
        "y": 976,
        "width": 54,
        "height": 207
    },
    {
        "x": 2232,
        "y": 998,
        "width": 94,
        "height": 29
    },
    {
        "x": 2323,
        "y": 1027,
        "width": 127,
        "height": 41
    },
    {
        "x": 2375,
        "y": 1071,
        "width": 86,
        "height": 43
    },
    {
        "x": 2234,
        "y": 1124,
        "width": 26,
        "height": 36
    },
    {
        "x": 2230,
        "y": 1175,
        "width": 9,
        "height": 32
    },
    {
        "x": 2341,
        "y": 674,
        "width": 200,
        "height": 182
    },
    {
        "x": 2543,
        "y": 689,
        "width": 27,
        "height": 181
    },
    {
        "x": 2572,
        "y": 702,
        "width": 33,
        "height": 181
    },
    {
        "x": 2612,
        "y": 715,
        "width": 20,
        "height": 182
    },
    {
        "x": 2638,
        "y": 721,
        "width": 29,
        "height": 179
    },
    {
        "x": 2669,
        "y": 732,
        "width": 16,
        "height": 165
    },
    {
        "x": 2690,
        "y": 744,
        "width": 20,
        "height": 157
    },
    {
        "x": 2714,
        "y": 758,
        "width": 24,
        "height": 151
    },
    {
        "x": 2741,
        "y": 771,
        "width": 169,
        "height": 137
    },
    {
        "x": 2913,
        "y": 773,
        "width": 63,
        "height": 138
    },
    {
        "x": 2982,
        "y": 766,
        "width": 78,
        "height": 143
    },
    {
        "x": 3027,
        "y": 748,
        "width": 33,
        "height": 12
    },
    {
        "x": 2897,
        "y": 424,
        "width": 35,
        "height": 153
    },
    {
        "x": 3001,
        "y": 456,
        "width": 58,
        "height": 285
    },
    {
        "x": 2137,
        "y": 287,
        "width": 337,
        "height": 381
    },
    {
        "x": 2026,
        "y": 717,
        "width": 310,
        "height": 257
    },
    {
        "x": 1883,
        "y": 952,
        "width": 141,
        "height": 198
    },
    {
        "x": 2027,
        "y": 976,
        "width": 146,
        "height": 175
    },
    {
        "x": 2043,
        "y": 1154,
        "width": 20,
        "height": 52
    },
    {
        "x": 2015,
        "y": 1192,
        "width": 24,
        "height": 15
    },
    {
        "x": 1437,
        "y": 868,
        "width": 329,
        "height": 159
    },
    {
        "x": 1508,
        "y": 1028,
        "width": 89,
        "height": 30
    },
    {
        "x": 1656,
        "y": 1031,
        "width": 63,
        "height": 18
    },
    {
        "x": 1737,
        "y": 1038,
        "width": 29,
        "height": 21
    },
    {
        "x": 1746,
        "y": 1027,
        "width": 20,
        "height": 10
    },
    {
        "x": 1772,
        "y": 1045,
        "width": 37,
        "height": 24
    },
    {
        "x": 1824,
        "y": 1004,
        "width": 27,
        "height": 69
    },
    {
        "x": 1767,
        "y": 955,
        "width": 115,
        "height": 45
    },
    {
        "x": 1902,
        "y": 855,
        "width": 44,
        "height": 95
    },
    {
        "x": 1877,
        "y": 939,
        "width": 24,
        "height": 9
    },
    {
        "x": 1953,
        "y": 887,
        "width": 67,
        "height": 61
    },
    {
        "x": 1990,
        "y": 860,
        "width": 34,
        "height": 23
    },
    {
        "x": 1845,
        "y": 648,
        "width": 179,
        "height": 135
    },
    {
        "x": 1814,
        "y": 668,
        "width": 29,
        "height": 63
    },
    {
        "x": 1758,
        "y": 695,
        "width": 52,
        "height": 35
    },
    {
        "x": 1913,
        "y": 567,
        "width": 73,
        "height": 77
    },
    {
        "x": 1987,
        "y": 548,
        "width": 49,
        "height": 95
    },
    {
        "x": 2025,
        "y": 646,
        "width": 67,
        "height": 65
    },
    {
        "x": 1822,
        "y": 541,
        "width": 76,
        "height": 48
    },
    {
        "x": 1851,
        "y": 592,
        "width": 57,
        "height": 51
    },
    {
        "x": 1164,
        "y": 86,
        "width": 54,
        "height": 20
    },
    {
        "x": 1222,
        "y": 107,
        "width": 57,
        "height": 15
    },
    {
        "x": 1279,
        "y": 127,
        "width": 46,
        "height": 20
    },
    {
        "x": 1148,
        "y": 21,
        "width": 411,
        "height": 73
    },
    {
        "x": 1222,
        "y": 96,
        "width": 405,
        "height": 25
    },
    {
        "x": 1335,
        "y": 124,
        "width": 277,
        "height": 50
    },
    {
        "x": 1449,
        "y": 180,
        "width": 71,
        "height": 23
    },
    {
        "x": 1520,
        "y": 180,
        "width": 51,
        "height": 15
    },
    {
        "x": 1584,
        "y": 179,
        "width": 76,
        "height": 8
    },
    {
        "x": 1613,
        "y": 125,
        "width": 160,
        "height": 50
    },
    {
        "x": 1508,
        "y": 253,
        "width": 353,
        "height": 194
    },
    {
        "x": 1645,
        "y": 449,
        "width": 80,
        "height": 15
    },
    {
        "x": 725,
        "y": 2,
        "width": 423,
        "height": 139
    },
    {
        "x": 687,
        "y": 5,
        "width": 37,
        "height": 244
    },
    {
        "x": 779,
        "y": 143,
        "width": 290,
        "height": 39
    },
    {
        "x": 820,
        "y": 186,
        "width": 246,
        "height": 52
    },
    {
        "x": 826,
        "y": 238,
        "width": 110,
        "height": 54
    },
    {
        "x": 872,
        "y": 295,
        "width": 65,
        "height": 25
    },
    {
        "x": 729,
        "y": 226,
        "width": 22,
        "height": 35
    },
    {
        "x": 798,
        "y": 255,
        "width": 27,
        "height": 19
    },
    {
        "x": 751,
        "y": 242,
        "width": 9,
        "height": 27
    },
    {
        "x": 777,
        "y": 186,
        "width": 15,
        "height": 45
    },
    {
        "x": 813,
        "y": 188,
        "width": 6,
        "height": 36
    },
    {
        "x": 974,
        "y": 238,
        "width": 151,
        "height": 38
    },
    {
        "x": 979,
        "y": 277,
        "width": 124,
        "height": 14
    },
    {
        "x": 993,
        "y": 294,
        "width": 53,
        "height": 31
    },
    {
        "x": 1052,
        "y": 292,
        "width": 30,
        "height": 22
    },
    {
        "x": 1139,
        "y": 116,
        "width": 30,
        "height": 28
    },
    {
        "x": 1194,
        "y": 133,
        "width": 14,
        "height": 15
    },
    {
        "x": 1221,
        "y": 117,
        "width": 0,
        "height": 0
    },
    {
        "x": 1210,
        "y": 108,
        "width": 10,
        "height": 9
    },
    {
        "x": 1266,
        "y": 124,
        "width": 12,
        "height": 11
    },
    {
        "x": 1316,
        "y": 150,
        "width": 15,
        "height": 16
    },
    {
        "x": 1289,
        "y": 176,
        "width": 60,
        "height": 15
    },
    {
        "x": 1286,
        "y": 194,
        "width": 10,
        "height": 17
    },
    {
        "x": 1286,
        "y": 152,
        "width": 11,
        "height": 21
    },
    {
        "x": 1288,
        "y": 298,
        "width": 100,
        "height": 92
    },
    {
        "x": 1006,
        "y": 435,
        "width": 113,
        "height": 82
    },
    {
        "x": 1123,
        "y": 450,
        "width": 376,
        "height": 132
    },
    {
        "x": 1015,
        "y": 517,
        "width": 106,
        "height": 59
    },
    {
        "x": 1023,
        "y": 579,
        "width": 97,
        "height": 17
    },
    {
        "x": 926,
        "y": 429,
        "width": 14,
        "height": 56
    },
    {
        "x": 925,
        "y": 487,
        "width": 4,
        "height": 74
    },
    {
        "x": 928,
        "y": 491,
        "width": 3,
        "height": 97
    },
    {
        "x": 1222,
        "y": 437,
        "width": 283,
        "height": 12
    },
    {
        "x": 1501,
        "y": 435,
        "width": 0,
        "height": 0
    },
    {
        "x": 1289,
        "y": 424,
        "width": 217,
        "height": 8
    },
    {
        "x": 1338,
        "y": 408,
        "width": 167,
        "height": 12
    },
    {
        "x": 1381,
        "y": 393,
        "width": 124,
        "height": 13
    },
    {
        "x": 1410,
        "y": 371,
        "width": 94,
        "height": 19
    },
    {
        "x": 1435,
        "y": 354,
        "width": 69,
        "height": 13
    },
    {
        "x": 1458,
        "y": 336,
        "width": 45,
        "height": 16
    },
    {
        "x": 1477,
        "y": 319,
        "width": 27,
        "height": 16
    },
    {
        "x": 1486,
        "y": 306,
        "width": 18,
        "height": 4
    },
    {
        "x": 1485,
        "y": 232,
        "width": 17,
        "height": 84
    },
    {
        "x": 1500,
        "y": 451,
        "width": 204,
        "height": 145
    },
    {
        "x": 1865,
        "y": 263,
        "width": 138,
        "height": 216
    },
    {
        "x": 2006,
        "y": 278,
        "width": 129,
        "height": 271
    },
    {
        "x": 1771,
        "y": 5,
        "width": 985,
        "height": 212
    },
    {
        "x": 2759,
        "y": 3,
        "width": 302,
        "height": 218
    },
    {
        "x": 2554,
        "y": 301,
        "width": 443,
        "height": 314
    },
    {
        "x": 2999,
        "y": 297,
        "width": 58,
        "height": 155
    },
    {
        "x": 776,
        "y": 1321,
        "width": 55,
        "height": 290
    },
    {
        "x": 602,
        "y": 1526,
        "width": 170,
        "height": 40
    },
    {
        "x": 599,
        "y": 1566,
        "width": 27,
        "height": 18
    },
    {
        "x": 835,
        "y": 1504,
        "width": 210,
        "height": 95
    },
    {
        "x": 833,
        "y": 1391,
        "width": 218,
        "height": 108
    },
    {
        "x": 1137,
        "y": 1472,
        "width": 17,
        "height": 54
    },
    {
        "x": 1141,
        "y": 1527,
        "width": 14,
        "height": 74
    },
    {
        "x": 1039,
        "y": 1199,
        "width": 16,
        "height": 68
    },
    {
        "x": 950,
        "y": 1228,
        "width": 79,
        "height": 80
    },
    {
        "x": 692,
        "y": 1070,
        "width": 224,
        "height": 169
    },
    {
        "x": 845,
        "y": 1239,
        "width": 101,
        "height": 55
    },
    {
        "x": 863,
        "y": 1297,
        "width": 81,
        "height": 28
    },
    {
        "x": 739,
        "y": 1275,
        "width": 15,
        "height": 31
    },
    {
        "x": 729,
        "y": 1265,
        "width": 7,
        "height": 31
    },
    {
        "x": 787,
        "y": 1240,
        "width": 6,
        "height": 35
    },
    {
        "x": 704,
        "y": 736,
        "width": 158,
        "height": 289
    },
    {
        "x": 693,
        "y": 1028,
        "width": 43,
        "height": 20
    },
    {
        "x": 694,
        "y": 1050,
        "width": 22,
        "height": 14
    },
    {
        "x": 744,
        "y": 1044,
        "width": 18,
        "height": 7
    },
    {
        "x": 743,
        "y": 1036,
        "width": 26,
        "height": 9
    },
    {
        "x": 690,
        "y": 721,
        "width": 12,
        "height": 304
    },
    {
        "x": 763,
        "y": 682,
        "width": 117,
        "height": 55
    },
    {
        "x": 760,
        "y": 733,
        "width": 0,
        "height": 0
    },
    {
        "x": 706,
        "y": 714,
        "width": 56,
        "height": 19
    },
    {
        "x": 887,
        "y": 707,
        "width": 227,
        "height": 177
    },
    {
        "x": 874,
        "y": 882,
        "width": 126,
        "height": 84
    },
    {
        "x": 871,
        "y": 973,
        "width": 103,
        "height": 25
    },
    {
        "x": 864,
        "y": 996,
        "width": 19,
        "height": 29
    },
    {
        "x": 863,
        "y": 740,
        "width": 20,
        "height": 137
    },
    {
        "x": 863,
        "y": 881,
        "width": 9,
        "height": 87
    },
    {
        "x": 954,
        "y": 691,
        "width": 175,
        "height": 14
    },
    {
        "x": 1070,
        "y": 670,
        "width": 59,
        "height": 18
    },
    {
        "x": 1113,
        "y": 651,
        "width": 20,
        "height": 19
    },
    {
        "x": 1116,
        "y": 707,
        "width": 14,
        "height": 34
    },
    {
        "x": 1216,
        "y": 642,
        "width": 25,
        "height": 16
    },
    {
        "x": 1223,
        "y": 659,
        "width": 241,
        "height": 163
    },
    {
        "x": 1315,
        "y": 658,
        "width": 1,
        "height": 0
    },
    {
        "x": 1261,
        "y": 643,
        "width": 60,
        "height": 13
    },
    {
        "x": 1466,
        "y": 669,
        "width": 156,
        "height": 192
    },
    {
        "x": 1513,
        "y": 655,
        "width": 99,
        "height": 10
    },
    {
        "x": 1229,
        "y": 824,
        "width": 112,
        "height": 89
    },
    {
        "x": 1474,
        "y": 1042,
        "width": 31,
        "height": 37
    },
    {
        "x": 1432,
        "y": 973,
        "width": 0,
        "height": 0
    },
    {
        "x": 1430,
        "y": 981,
        "width": 0,
        "height": 0
    },
    {
        "x": 1418,
        "y": 925,
        "width": 17,
        "height": 55
    },
    {
        "x": 1419,
        "y": 825,
        "width": 42,
        "height": 33
    },
    {
        "x": 1709,
        "y": 483,
        "width": 111,
        "height": 101
    }
];