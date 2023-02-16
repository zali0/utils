var queueData = [
    {
        id: 5,
        name: "Queue 3",
        serviceRegions: [
            {
                id: 1
            }
        ]
    },
    {
        id: 2,
        name: "Queue 2",
        serviceRegions: [
            {
                id: 13
            }
        ]
    },
    {
        id: 1,
        name: "Queue 1",
        serviceRegions: [
            {
                id: 15
            }
        ]
    },
    {
        id: 4,
        name: "Queue 2",
        serviceRegions: [
            {
                id: 16
            }
        ]
    },
    {
        id: 3,
        name: "Queue 1",
        serviceRegions: [
            {
                id: 17
            }
        ]
    },
    {
        id: 6,
        name: "Queue 1",
        serviceRegions: [
            {
                id: 18
            }
        ]
    }
];
var personData = [
    {
        id: 1,
        topColor: "#bb9ac8",
        bottomColor: "#18e2fd",
        ageRange: 64,
        queueStartTime: "2022-04-21T11:45:02Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-04-21T11:54:02.000Z",
        serviceEndTime: "2022-04-21T11:56:02.000Z",
        queueEndTime: "2022-04-21T11:56:02.000Z"
    },
    {
        id: 2,
        topColor: "#f513ac",
        bottomColor: "#69efda",
        ageRange: 48,
        queueStartTime: "2023-01-03T01:59:34Z",
        accessoriesList: "Cap",
        serviceStartTime: "2023-01-03T02:01:34.000Z",
        serviceEndTime: "2023-01-03T02:02:34.000Z",
        queueEndTime: "2023-01-03T02:02:34.000Z"
    },
    {
        id: 3,
        topColor: "#d08725",
        bottomColor: "#759431",
        ageRange: 17,
        queueStartTime: "2022-11-10T21:17:39Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-11-10T21:22:39.000Z",
        serviceEndTime: "2022-11-10T21:27:39.000Z",
        queueEndTime: "2022-11-10T21:27:39.000Z"
    },
    {
        id: 4,
        topColor: "#483d4d",
        bottomColor: "#c3fc6f",
        ageRange: 33,
        queueStartTime: "2022-06-27T03:10:27Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-06-27T03:13:27.000Z",
        serviceEndTime: "2022-06-27T03:14:27.000Z",
        queueEndTime: "2022-06-27T03:14:27.000Z"
    },
    {
        id: 5,
        topColor: "#f22673",
        bottomColor: "#f296cf",
        ageRange: 17,
        queueStartTime: "2022-08-21T23:21:17Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-08-21T23:24:17.000Z",
        serviceEndTime: "2022-08-21T23:28:17.000Z",
        queueEndTime: "2022-08-21T23:28:17.000Z"
    },
    {
        id: 6,
        topColor: "#514b6d",
        bottomColor: "#0bed59",
        ageRange: 31,
        queueStartTime: "2022-04-24T16:41:55Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-04-24T16:44:55.000Z",
        serviceEndTime: "2022-04-24T16:49:55.000Z",
        queueEndTime: "2022-04-24T16:49:55.000Z"
    },
    {
        id: 7,
        topColor: "#6245d1",
        bottomColor: "#eb89df",
        ageRange: 56,
        queueStartTime: "2022-05-13T13:48:26Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-05-13T13:51:26.000Z",
        serviceEndTime: "2022-05-13T13:52:26.000Z",
        queueEndTime: "2022-05-13T13:52:26.000Z"
    },
    {
        id: 8,
        topColor: "#6f756e",
        bottomColor: "#1165f8",
        ageRange: 65,
        queueStartTime: "2022-07-07T08:48:24Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-07-07T08:51:24.000Z",
        serviceEndTime: "2022-07-07T08:56:24.000Z",
        queueEndTime: "2022-07-07T08:56:24.000Z"
    },
    {
        id: 9,
        topColor: "#789a7e",
        bottomColor: "#97a6f3",
        ageRange: 11,
        queueStartTime: "2022-09-27T21:00:08Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-09-27T21:01:08.000Z",
        serviceEndTime: "2022-09-27T21:04:08.000Z",
        queueEndTime: "2022-09-27T21:04:08.000Z"
    },
    {
        id: 10,
        topColor: "#b96824",
        bottomColor: "#68a85f",
        ageRange: 54,
        queueStartTime: "2022-03-30T07:44:32Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-03-30T07:47:32.000Z",
        serviceEndTime: "2022-03-30T07:48:32.000Z",
        queueEndTime: "2022-03-30T07:48:32.000Z"
    },
    {
        id: 11,
        topColor: "#45d2f9",
        bottomColor: "#6088d2",
        ageRange: 59,
        queueStartTime: "2022-11-01T08:00:53Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-11-01T08:09:53.000Z",
        serviceEndTime: "2022-11-01T08:12:53.000Z",
        queueEndTime: "2022-11-01T08:12:53.000Z"
    },
    {
        id: 12,
        topColor: "#923eea",
        bottomColor: "#093c0b",
        ageRange: 24,
        queueStartTime: "2022-08-13T21:48:06Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-08-13T21:50:06.000Z",
        serviceEndTime: "2022-08-13T21:53:06.000Z",
        queueEndTime: "2022-08-13T21:53:06.000Z"
    },
    {
        id: 13,
        topColor: "#57fd4d",
        bottomColor: "#9714fd",
        ageRange: 67,
        queueStartTime: "2022-02-24T15:30:26Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-02-24T15:34:26.000Z",
        serviceEndTime: "2022-02-24T15:39:26.000Z",
        queueEndTime: "2022-02-24T15:39:26.000Z"
    },
    {
        id: 14,
        topColor: "#54c34c",
        bottomColor: "#5bc17f",
        ageRange: 63,
        queueStartTime: "2022-04-01T23:26:46Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-04-01T23:28:46.000Z",
        serviceEndTime: "2022-04-01T23:33:46.000Z",
        queueEndTime: "2022-04-01T23:33:46.000Z"
    },
    {
        id: 15,
        topColor: "#223344",
        bottomColor: "#465b93",
        ageRange: 28,
        queueStartTime: "2022-07-27T15:08:50Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: null,
        serviceEndTime: null,
        queueEndTime: "2022-07-27T15:14:50.000Z"
    },
    {
        id: 16,
        topColor: "#e11d74",
        bottomColor: "#8a4d0b",
        ageRange: 9,
        queueStartTime: "2022-09-29T01:29:11Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-09-29T01:31:11.000Z",
        serviceEndTime: "2022-09-29T01:34:11.000Z",
        queueEndTime: "2022-09-29T01:34:11.000Z"
    },
    {
        id: 17,
        topColor: "#a4bfe2",
        bottomColor: "#b2930c",
        ageRange: 75,
        queueStartTime: "2022-05-04T04:30:15Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-05-04T04:32:15.000Z",
        serviceEndTime: "2022-05-04T04:36:15.000Z",
        queueEndTime: "2022-05-04T04:36:15.000Z"
    },
    {
        id: 18,
        topColor: "#39ef71",
        bottomColor: "#bea193",
        ageRange: 43,
        queueStartTime: "2022-07-21T20:13:49Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-07-21T20:16:49.000Z",
        serviceEndTime: "2022-07-21T20:18:49.000Z",
        queueEndTime: "2022-07-21T20:18:49.000Z"
    },
    {
        id: 19,
        topColor: "#a11e5b",
        bottomColor: "#3f498b",
        ageRange: 77,
        queueStartTime: "2022-12-02T05:50:19Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-12-02T05:55:19.000Z",
        serviceEndTime: "2022-12-02T05:58:19.000Z",
        queueEndTime: "2022-12-02T05:58:19.000Z"
    },
    {
        id: 20,
        topColor: "#508122",
        bottomColor: "#77e685",
        ageRange: 60,
        queueStartTime: "2022-06-11T03:48:51Z",
        accessoriesList: "Cap",
        serviceStartTime: null,
        serviceEndTime: null,
        queueEndTime: "2022-06-11T03:52:51.000Z"
    },
    {
        id: 21,
        topColor: "#356d7e",
        bottomColor: "#57c874",
        ageRange: 29,
        queueStartTime: "2022-10-20T09:26:34Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-10-20T09:36:34.000Z",
        serviceEndTime: "2022-10-20T09:41:34.000Z",
        queueEndTime: "2022-10-20T09:41:34.000Z"
    },
    {
        id: 22,
        topColor: "#96705b",
        bottomColor: "#8e4ec9",
        ageRange: 16,
        queueStartTime: "2022-06-01T20:19:53Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-06-01T20:25:53.000Z",
        serviceEndTime: "2022-06-01T20:30:53.000Z",
        queueEndTime: "2022-06-01T20:30:53.000Z"
    },
    {
        id: 23,
        topColor: "#591ad8",
        bottomColor: "#7604e9",
        ageRange: 51,
        queueStartTime: "2022-09-04T23:17:08Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-09-04T23:26:08.000Z",
        serviceEndTime: "2022-09-04T23:29:08.000Z",
        queueEndTime: "2022-09-04T23:29:08.000Z"
    },
    {
        id: 24,
        topColor: "#e11286",
        bottomColor: "#3ef1c0",
        ageRange: 74,
        queueStartTime: "2022-11-07T06:33:32Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-11-07T06:36:32.000Z",
        serviceEndTime: "2022-11-07T06:41:32.000Z",
        queueEndTime: "2022-11-07T06:41:32.000Z"
    },
    {
        id: 25,
        topColor: "#1c3746",
        bottomColor: "#7e7620",
        ageRange: 66,
        queueStartTime: "2022-06-28T00:27:33Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-06-28T00:30:33.000Z",
        serviceEndTime: "2022-06-28T00:31:33.000Z",
        queueEndTime: "2022-06-28T00:31:33.000Z"
    },
    {
        id: 26,
        topColor: "#38061f",
        bottomColor: "#2cba02",
        ageRange: 60,
        queueStartTime: "2022-06-13T20:13:40Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-06-13T20:21:40.000Z",
        serviceEndTime: "2022-06-13T20:23:40.000Z",
        queueEndTime: "2022-06-13T20:23:40.000Z"
    },
    {
        id: 27,
        topColor: "#b6d13e",
        bottomColor: "#eecd6c",
        ageRange: 29,
        queueStartTime: "2022-09-11T12:49:23Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-09-11T12:58:23.000Z",
        serviceEndTime: "2022-09-11T12:59:23.000Z",
        queueEndTime: "2022-09-11T12:59:23.000Z"
    },
    {
        id: 28,
        topColor: "#321f0d",
        bottomColor: "#f12c6b",
        ageRange: 26,
        queueStartTime: "2022-03-04T06:24:44Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-03-04T06:32:44.000Z",
        serviceEndTime: "2022-03-04T06:35:44.000Z",
        queueEndTime: "2022-03-04T06:35:44.000Z"
    },
    {
        id: 29,
        topColor: "#5f51e1",
        bottomColor: "#3ea03f",
        ageRange: 38,
        queueStartTime: "2022-05-18T01:38:58Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: null,
        serviceEndTime: null,
        queueEndTime: "2022-05-18T01:45:58.000Z"
    },
    {
        id: 30,
        topColor: "#0c3267",
        bottomColor: "#68a2c7",
        ageRange: 31,
        queueStartTime: "2022-11-02T03:31:11Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-11-02T03:32:11.000Z",
        serviceEndTime: "2022-11-02T03:36:11.000Z",
        queueEndTime: "2022-11-02T03:36:11.000Z"
    },
    {
        id: 31,
        topColor: "#39e896",
        bottomColor: "#ebf2a9",
        ageRange: 73,
        queueStartTime: "2022-07-20T12:28:26Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-07-20T12:33:26.000Z",
        serviceEndTime: "2022-07-20T12:38:26.000Z",
        queueEndTime: "2022-07-20T12:38:26.000Z"
    },
    {
        id: 32,
        topColor: "#c7936e",
        bottomColor: "#79986f",
        ageRange: 11,
        queueStartTime: "2022-05-18T21:44:01Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-05-18T21:54:01.000Z",
        serviceEndTime: "2022-05-18T21:58:01.000Z",
        queueEndTime: "2022-05-18T21:58:01.000Z"
    },
    {
        id: 33,
        topColor: "#0ca390",
        bottomColor: "#11e003",
        ageRange: 45,
        queueStartTime: "2022-10-18T22:02:33Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: null,
        serviceEndTime: null,
        queueEndTime: "2022-10-18T22:08:33.000Z"
    },
    {
        id: 34,
        topColor: "#f66769",
        bottomColor: "#075af1",
        ageRange: 19,
        queueStartTime: "2022-07-26T17:39:14Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-07-26T17:49:14.000Z",
        serviceEndTime: "2022-07-26T17:54:14.000Z",
        queueEndTime: "2022-07-26T17:54:14.000Z"
    },
    {
        id: 35,
        topColor: "#f6f0d7",
        bottomColor: "#8225ad",
        ageRange: 34,
        queueStartTime: "2022-09-22T14:57:48Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-09-22T14:58:48.000Z",
        serviceEndTime: "2022-09-22T15:03:48.000Z",
        queueEndTime: "2022-09-22T15:03:48.000Z"
    },
    {
        id: 36,
        topColor: "#82737c",
        bottomColor: "#67349d",
        ageRange: 59,
        queueStartTime: "2022-10-02T08:11:31Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-10-02T08:14:31.000Z",
        serviceEndTime: "2022-10-02T08:19:31.000Z",
        queueEndTime: "2022-10-02T08:19:31.000Z"
    },
    {
        id: 37,
        topColor: "#a9299f",
        bottomColor: "#e1201e",
        ageRange: 54,
        queueStartTime: "2022-05-05T01:23:18Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-05-05T01:31:18.000Z",
        serviceEndTime: "2022-05-05T01:32:18.000Z",
        queueEndTime: "2022-05-05T01:32:18.000Z"
    },
    {
        id: 38,
        topColor: "#6126b1",
        bottomColor: "#1e45b0",
        ageRange: 30,
        queueStartTime: "2022-10-19T21:45:34Z",
        accessoriesList: "Backpack",
        serviceStartTime: null,
        serviceEndTime: null,
        queueEndTime: "2022-10-19T21:55:34.000Z"
    },
    {
        id: 39,
        topColor: "#59d013",
        bottomColor: "#172220",
        ageRange: 29,
        queueStartTime: "2022-11-27T06:56:21Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-11-27T07:06:21.000Z",
        serviceEndTime: "2022-11-27T07:07:21.000Z",
        queueEndTime: "2022-11-27T07:07:21.000Z"
    },
    {
        id: 40,
        topColor: "#e45f12",
        bottomColor: "#318c49",
        ageRange: 19,
        queueStartTime: "2022-03-01T18:45:30Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-03-01T18:47:30.000Z",
        serviceEndTime: "2022-03-01T18:48:30.000Z",
        queueEndTime: "2022-03-01T18:48:30.000Z"
    },
    {
        id: 41,
        topColor: "#e8012a",
        bottomColor: "#02b62a",
        ageRange: 65,
        queueStartTime: "2022-10-16T20:45:02Z",
        accessoriesList: "Cap",
        serviceStartTime: null,
        serviceEndTime: null,
        queueEndTime: "2022-10-16T20:49:02.000Z"
    },
    {
        id: 42,
        topColor: "#d6545d",
        bottomColor: "#a4970f",
        ageRange: 6,
        queueStartTime: "2022-11-19T13:48:49Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-11-19T13:52:49.000Z",
        serviceEndTime: "2022-11-19T13:55:49.000Z",
        queueEndTime: "2022-11-19T13:55:49.000Z"
    },
    {
        id: 43,
        topColor: "#ba53b1",
        bottomColor: "#a80f8b",
        ageRange: 25,
        queueStartTime: "2022-04-28T19:00:45Z",
        accessoriesList: "Cap",
        serviceStartTime: null,
        serviceEndTime: null,
        queueEndTime: "2022-04-28T19:08:45.000Z"
    },
    {
        id: 44,
        topColor: "#5a7d2a",
        bottomColor: "#bd8681",
        ageRange: 78,
        queueStartTime: "2022-04-22T00:03:13Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-04-22T00:10:13.000Z",
        serviceEndTime: "2022-04-22T00:11:13.000Z",
        queueEndTime: "2022-04-22T00:11:13.000Z"
    },
    {
        id: 45,
        topColor: "#593a55",
        bottomColor: "#a8c06b",
        ageRange: 61,
        queueStartTime: "2022-08-06T07:13:24Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-08-06T07:19:24.000Z",
        serviceEndTime: "2022-08-06T07:20:24.000Z",
        queueEndTime: "2022-08-06T07:20:24.000Z"
    },
    {
        id: 46,
        topColor: "#d5b559",
        bottomColor: "#803ac8",
        ageRange: 44,
        queueStartTime: "2022-09-18T05:26:37Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-09-18T05:30:37.000Z",
        serviceEndTime: "2022-09-18T05:33:37.000Z",
        queueEndTime: "2022-09-18T05:33:37.000Z"
    },
    {
        id: 47,
        topColor: "#5fbbd8",
        bottomColor: "#2bbaa1",
        ageRange: 61,
        queueStartTime: "2022-10-14T15:19:17Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-10-14T15:21:17.000Z",
        serviceEndTime: "2022-10-14T15:25:17.000Z",
        queueEndTime: "2022-10-14T15:25:17.000Z"
    },
    {
        id: 48,
        topColor: "#5db334",
        bottomColor: "#2cda00",
        ageRange: 56,
        queueStartTime: "2022-03-20T13:19:19Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-03-20T13:27:19.000Z",
        serviceEndTime: "2022-03-20T13:31:19.000Z",
        queueEndTime: "2022-03-20T13:31:19.000Z"
    },
    {
        id: 49,
        topColor: "#5fd5f1",
        bottomColor: "#332f53",
        ageRange: 56,
        queueStartTime: "2022-12-14T18:54:03Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-12-14T18:57:03.000Z",
        serviceEndTime: "2022-12-14T19:00:03.000Z",
        queueEndTime: "2022-12-14T19:00:03.000Z"
    },
    {
        id: 50,
        topColor: "#fb4947",
        bottomColor: "#a8e9bb",
        ageRange: 35,
        queueStartTime: "2022-06-23T18:36:03Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-06-23T18:41:03.000Z",
        serviceEndTime: "2022-06-23T18:44:03.000Z",
        queueEndTime: "2022-06-23T18:44:03.000Z"
    },
    {
        id: 51,
        topColor: "#12d830",
        bottomColor: "#80dd2c",
        ageRange: 48,
        queueStartTime: "2022-03-04T13:20:50Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-03-04T13:28:50.000Z",
        serviceEndTime: "2022-03-04T13:30:50.000Z",
        queueEndTime: "2022-03-04T13:30:50.000Z"
    },
    {
        id: 52,
        topColor: "#fd5297",
        bottomColor: "#75222f",
        ageRange: 49,
        queueStartTime: "2022-03-23T01:48:36Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-03-23T01:57:36.000Z",
        serviceEndTime: "2022-03-23T01:59:36.000Z",
        queueEndTime: "2022-03-23T01:59:36.000Z"
    },
    {
        id: 53,
        topColor: "#bc16df",
        bottomColor: "#c46477",
        ageRange: 6,
        queueStartTime: "2022-07-15T02:51:56Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-07-15T02:55:56.000Z",
        serviceEndTime: "2022-07-15T02:57:56.000Z",
        queueEndTime: "2022-07-15T02:57:56.000Z"
    },
    {
        id: 54,
        topColor: "#435ce6",
        bottomColor: "#10e583",
        ageRange: 53,
        queueStartTime: "2022-03-18T21:33:59Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-03-18T21:35:59.000Z",
        serviceEndTime: "2022-03-18T21:39:59.000Z",
        queueEndTime: "2022-03-18T21:39:59.000Z"
    },
    {
        id: 55,
        topColor: "#ab048f",
        bottomColor: "#498efc",
        ageRange: 12,
        queueStartTime: "2022-09-07T14:34:19Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-09-07T14:44:19.000Z",
        serviceEndTime: "2022-09-07T14:47:19.000Z",
        queueEndTime: "2022-09-07T14:47:19.000Z"
    },
    {
        id: 56,
        topColor: "#35b697",
        bottomColor: "#8bfdc1",
        ageRange: 49,
        queueStartTime: "2022-09-02T18:28:21Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-09-02T18:35:21.000Z",
        serviceEndTime: "2022-09-02T18:39:21.000Z",
        queueEndTime: "2022-09-02T18:39:21.000Z"
    },
    {
        id: 57,
        topColor: "#52aca5",
        bottomColor: "#f1b0d6",
        ageRange: 19,
        queueStartTime: "2022-01-13T21:34:02Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-01-13T21:40:02.000Z",
        serviceEndTime: "2022-01-13T21:43:02.000Z",
        queueEndTime: "2022-01-13T21:43:02.000Z"
    },
    {
        id: 58,
        topColor: "#f661e6",
        bottomColor: "#c2992b",
        ageRange: 11,
        queueStartTime: "2022-07-26T01:18:24Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-07-26T01:21:24.000Z",
        serviceEndTime: "2022-07-26T01:25:24.000Z",
        queueEndTime: "2022-07-26T01:25:24.000Z"
    },
    {
        id: 59,
        topColor: "#b7d6a5",
        bottomColor: "#31037b",
        ageRange: 20,
        queueStartTime: "2022-02-11T13:55:07Z",
        accessoriesList: "Cap",
        serviceStartTime: null,
        serviceEndTime: null,
        queueEndTime: "2022-02-11T13:57:07.000Z"
    },
    {
        id: 60,
        topColor: "#efb8f0",
        bottomColor: "#51cfbd",
        ageRange: 63,
        queueStartTime: "2022-06-16T18:32:58Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-06-16T18:42:58.000Z",
        serviceEndTime: "2022-06-16T18:45:58.000Z",
        queueEndTime: "2022-06-16T18:45:58.000Z"
    },
    {
        id: 61,
        topColor: "#e14b6c",
        bottomColor: "#1bc5bc",
        ageRange: 7,
        queueStartTime: "2022-06-04T02:51:41Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-06-04T02:54:41.000Z",
        serviceEndTime: "2022-06-04T02:58:41.000Z",
        queueEndTime: "2022-06-04T02:58:41.000Z"
    },
    {
        id: 62,
        topColor: "#aae69d",
        bottomColor: "#f8fe03",
        ageRange: 18,
        queueStartTime: "2022-05-25T19:49:24Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-05-25T19:57:24.000Z",
        serviceEndTime: "2022-05-25T19:58:24.000Z",
        queueEndTime: "2022-05-25T19:58:24.000Z"
    },
    {
        id: 63,
        topColor: "#247152",
        bottomColor: "#8c3b88",
        ageRange: 16,
        queueStartTime: "2022-04-03T10:12:49Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-04-03T10:15:49.000Z",
        serviceEndTime: "2022-04-03T10:19:49.000Z",
        queueEndTime: "2022-04-03T10:19:49.000Z"
    },
    {
        id: 64,
        topColor: "#b0ea95",
        bottomColor: "#1a70dd",
        ageRange: 29,
        queueStartTime: "2022-08-20T16:14:09Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-08-20T16:16:09.000Z",
        serviceEndTime: "2022-08-20T16:18:09.000Z",
        queueEndTime: "2022-08-20T16:18:09.000Z"
    },
    {
        id: 65,
        topColor: "#f1e55f",
        bottomColor: "#f362a4",
        ageRange: 66,
        queueStartTime: "2022-04-12T18:26:15Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-04-12T18:30:15.000Z",
        serviceEndTime: "2022-04-12T18:32:15.000Z",
        queueEndTime: "2022-04-12T18:32:15.000Z"
    },
    {
        id: 66,
        topColor: "#64ba2c",
        bottomColor: "#f356cd",
        ageRange: 55,
        queueStartTime: "2022-04-02T13:26:22Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-04-02T13:36:22.000Z",
        serviceEndTime: "2022-04-02T13:41:22.000Z",
        queueEndTime: "2022-04-02T13:41:22.000Z"
    },
    {
        id: 67,
        topColor: "#22c213",
        bottomColor: "#62d578",
        ageRange: 17,
        queueStartTime: "2022-02-13T03:30:32Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-02-13T03:40:32.000Z",
        serviceEndTime: "2022-02-13T03:43:32.000Z",
        queueEndTime: "2022-02-13T03:43:32.000Z"
    },
    {
        id: 68,
        topColor: "#ce8187",
        bottomColor: "#ec1ee1",
        ageRange: 65,
        queueStartTime: "2022-05-04T06:56:50Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-05-04T07:01:50.000Z",
        serviceEndTime: "2022-05-04T07:02:50.000Z",
        queueEndTime: "2022-05-04T07:02:50.000Z"
    },
    {
        id: 69,
        topColor: "#79ec05",
        bottomColor: "#bb71de",
        ageRange: 12,
        queueStartTime: "2022-02-21T06:21:14Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-02-21T06:26:14.000Z",
        serviceEndTime: "2022-02-21T06:30:14.000Z",
        queueEndTime: "2022-02-21T06:30:14.000Z"
    },
    {
        id: 70,
        topColor: "#d7b10f",
        bottomColor: "#81e476",
        ageRange: 25,
        queueStartTime: "2022-08-07T17:20:58Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-08-07T17:22:58.000Z",
        serviceEndTime: "2022-08-07T17:23:58.000Z",
        queueEndTime: "2022-08-07T17:23:58.000Z"
    },
    {
        id: 71,
        topColor: "#6e0f22",
        bottomColor: "#7ef12f",
        ageRange: 62,
        queueStartTime: "2022-09-25T05:14:30Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-09-25T05:17:30.000Z",
        serviceEndTime: "2022-09-25T05:20:30.000Z",
        queueEndTime: "2022-09-25T05:20:30.000Z"
    },
    {
        id: 72,
        topColor: "#4aeb80",
        bottomColor: "#7d99e6",
        ageRange: 32,
        queueStartTime: "2022-05-30T19:56:05Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-05-30T20:04:05.000Z",
        serviceEndTime: "2022-05-30T20:06:05.000Z",
        queueEndTime: "2022-05-30T20:06:05.000Z"
    },
    {
        id: 73,
        topColor: "#ba6659",
        bottomColor: "#6234f8",
        ageRange: 33,
        queueStartTime: "2022-04-23T10:46:59Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-04-23T10:56:59.000Z",
        serviceEndTime: "2022-04-23T11:00:59.000Z",
        queueEndTime: "2022-04-23T11:00:59.000Z"
    },
    {
        id: 74,
        topColor: "#726caf",
        bottomColor: "#162156",
        ageRange: 69,
        queueStartTime: "2022-08-22T07:28:58Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-08-22T07:38:58.000Z",
        serviceEndTime: "2022-08-22T07:43:58.000Z",
        queueEndTime: "2022-08-22T07:43:58.000Z"
    },
    {
        id: 75,
        topColor: "#a8f34a",
        bottomColor: "#4b2f52",
        ageRange: 40,
        queueStartTime: "2022-09-14T05:09:23Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-09-14T05:16:23.000Z",
        serviceEndTime: "2022-09-14T05:19:23.000Z",
        queueEndTime: "2022-09-14T05:19:23.000Z"
    },
    {
        id: 76,
        topColor: "#d37631",
        bottomColor: "#218aa2",
        ageRange: 80,
        queueStartTime: "2022-12-20T13:56:05Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-12-20T13:58:05.000Z",
        serviceEndTime: "2022-12-20T14:01:05.000Z",
        queueEndTime: "2022-12-20T14:01:05.000Z"
    },
    {
        id: 77,
        topColor: "#61d262",
        bottomColor: "#76d69e",
        ageRange: 75,
        queueStartTime: "2022-06-03T02:36:46Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: null,
        serviceEndTime: null,
        queueEndTime: "2022-06-03T02:38:46.000Z"
    },
    {
        id: 78,
        topColor: "#ed02f8",
        bottomColor: "#cfb0af",
        ageRange: 7,
        queueStartTime: "2022-12-01T21:25:35Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-12-01T21:31:35.000Z",
        serviceEndTime: "2022-12-01T21:34:35.000Z",
        queueEndTime: "2022-12-01T21:34:35.000Z"
    },
    {
        id: 79,
        topColor: "#eb5611",
        bottomColor: "#6a8c22",
        ageRange: 80,
        queueStartTime: "2022-02-16T06:41:17Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-02-16T06:43:17.000Z",
        serviceEndTime: "2022-02-16T06:47:17.000Z",
        queueEndTime: "2022-02-16T06:47:17.000Z"
    },
    {
        id: 80,
        topColor: "#e19b96",
        bottomColor: "#9244d8",
        ageRange: 55,
        queueStartTime: "2022-09-28T01:58:59Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-09-28T02:03:59.000Z",
        serviceEndTime: "2022-09-28T02:07:59.000Z",
        queueEndTime: "2022-09-28T02:07:59.000Z"
    },
    {
        id: 81,
        topColor: "#5f3921",
        bottomColor: "#2b28fb",
        ageRange: 41,
        queueStartTime: "2022-10-27T09:26:27Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-10-27T09:34:27.000Z",
        serviceEndTime: "2022-10-27T09:39:27.000Z",
        queueEndTime: "2022-10-27T09:39:27.000Z"
    },
    {
        id: 82,
        topColor: "#8bd7ca",
        bottomColor: "#23c95b",
        ageRange: 74,
        queueStartTime: "2022-06-25T22:31:46Z",
        accessoriesList: "Backpack",
        serviceStartTime: null,
        serviceEndTime: null,
        queueEndTime: "2022-06-25T22:32:46.000Z"
    },
    {
        id: 83,
        topColor: "#6ae1a6",
        bottomColor: "#81a9cd",
        ageRange: 37,
        queueStartTime: "2022-08-01T10:15:16Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-08-01T10:17:16.000Z",
        serviceEndTime: "2022-08-01T10:22:16.000Z",
        queueEndTime: "2022-08-01T10:22:16.000Z"
    },
    {
        id: 84,
        topColor: "#bfad44",
        bottomColor: "#0ce7b6",
        ageRange: 26,
        queueStartTime: "2022-02-04T20:01:32Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-02-04T20:04:32.000Z",
        serviceEndTime: "2022-02-04T20:09:32.000Z",
        queueEndTime: "2022-02-04T20:09:32.000Z"
    },
    {
        id: 85,
        topColor: "#892994",
        bottomColor: "#644702",
        ageRange: 59,
        queueStartTime: "2022-04-08T12:17:11Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-04-08T12:20:11.000Z",
        serviceEndTime: "2022-04-08T12:25:11.000Z",
        queueEndTime: "2022-04-08T12:25:11.000Z"
    },
    {
        id: 86,
        topColor: "#173811",
        bottomColor: "#e59317",
        ageRange: 63,
        queueStartTime: "2022-10-31T11:10:18Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-10-31T11:11:18.000Z",
        serviceEndTime: "2022-10-31T11:14:18.000Z",
        queueEndTime: "2022-10-31T11:14:18.000Z"
    },
    {
        id: 87,
        topColor: "#98c53a",
        bottomColor: "#1bd5b8",
        ageRange: 38,
        queueStartTime: "2022-09-04T14:23:24Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-09-04T14:33:24.000Z",
        serviceEndTime: "2022-09-04T14:35:24.000Z",
        queueEndTime: "2022-09-04T14:35:24.000Z"
    },
    {
        id: 88,
        topColor: "#5c5fef",
        bottomColor: "#f8c89d",
        ageRange: 27,
        queueStartTime: "2022-02-11T20:09:06Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-02-11T20:18:06.000Z",
        serviceEndTime: "2022-02-11T20:23:06.000Z",
        queueEndTime: "2022-02-11T20:23:06.000Z"
    },
    {
        id: 89,
        topColor: "#30a2dc",
        bottomColor: "#b9a11a",
        ageRange: 74,
        queueStartTime: "2022-06-05T13:04:58Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-06-05T13:14:58.000Z",
        serviceEndTime: "2022-06-05T13:16:58.000Z",
        queueEndTime: "2022-06-05T13:16:58.000Z"
    },
    {
        id: 90,
        topColor: "#270c90",
        bottomColor: "#049d4c",
        ageRange: 6,
        queueStartTime: "2022-03-24T13:31:35Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-03-24T13:35:35.000Z",
        serviceEndTime: "2022-03-24T13:37:35.000Z",
        queueEndTime: "2022-03-24T13:37:35.000Z"
    },
    {
        id: 91,
        topColor: "#5d00d2",
        bottomColor: "#52c52a",
        ageRange: 20,
        queueStartTime: "2022-03-24T00:44:55Z",
        accessoriesList: "Cap",
        serviceStartTime: null,
        serviceEndTime: null,
        queueEndTime: "2022-03-24T00:52:55.000Z"
    },
    {
        id: 92,
        topColor: "#494f26",
        bottomColor: "#c3468b",
        ageRange: 30,
        queueStartTime: "2022-11-27T11:44:23Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-11-27T11:46:23.000Z",
        serviceEndTime: "2022-11-27T11:50:23.000Z",
        queueEndTime: "2022-11-27T11:50:23.000Z"
    },
    {
        id: 93,
        topColor: "#aebe0e",
        bottomColor: "#f11a43",
        ageRange: 36,
        queueStartTime: "2022-08-14T06:01:37Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-08-14T06:02:37.000Z",
        serviceEndTime: "2022-08-14T06:04:37.000Z",
        queueEndTime: "2022-08-14T06:04:37.000Z"
    },
    {
        id: 94,
        topColor: "#2be46e",
        bottomColor: "#75d4c6",
        ageRange: 52,
        queueStartTime: "2022-06-21T23:18:21Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-06-21T23:25:21.000Z",
        serviceEndTime: "2022-06-21T23:26:21.000Z",
        queueEndTime: "2022-06-21T23:26:21.000Z"
    },
    {
        id: 95,
        topColor: "#9eecb1",
        bottomColor: "#7f3c3a",
        ageRange: 23,
        queueStartTime: "2022-08-15T10:38:50Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-08-15T10:40:50.000Z",
        serviceEndTime: "2022-08-15T10:42:50.000Z",
        queueEndTime: "2022-08-15T10:42:50.000Z"
    },
    {
        id: 96,
        topColor: "#4ab375",
        bottomColor: "#80a7f0",
        ageRange: 46,
        queueStartTime: "2022-03-24T00:43:59Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-03-24T00:46:59.000Z",
        serviceEndTime: "2022-03-24T00:47:59.000Z",
        queueEndTime: "2022-03-24T00:47:59.000Z"
    },
    {
        id: 97,
        topColor: "#0bb0e9",
        bottomColor: "#5daab3",
        ageRange: 17,
        queueStartTime: "2022-02-12T06:42:51Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2022-02-12T06:52:51.000Z",
        serviceEndTime: "2022-02-12T06:54:51.000Z",
        queueEndTime: "2022-02-12T06:54:51.000Z"
    },
    {
        id: 98,
        topColor: "#8e0af9",
        bottomColor: "#9610a7",
        ageRange: 30,
        queueStartTime: "2023-01-05T05:45:23Z",
        accessoriesList: "Laptop Bag",
        serviceStartTime: "2023-01-05T05:54:23.000Z",
        serviceEndTime: "2023-01-05T05:58:23.000Z",
        queueEndTime: "2023-01-05T05:58:23.000Z"
    },
    {
        id: 99,
        topColor: "#85ce56",
        bottomColor: "#843667",
        ageRange: 71,
        queueStartTime: "2022-03-07T18:40:55Z",
        accessoriesList: "Backpack",
        serviceStartTime: "2022-03-07T18:50:55.000Z",
        serviceEndTime: "2022-03-07T18:55:55.000Z",
        queueEndTime: "2022-03-07T18:55:55.000Z"
    },
    {
        id: 100,
        topColor: "#a6b544",
        bottomColor: "#c7f4c0",
        ageRange: 59,
        queueStartTime: "2022-03-09T17:04:44Z",
        accessoriesList: "Cap",
        serviceStartTime: "2022-03-09T17:12:44.000Z",
        serviceEndTime: "2022-03-09T17:13:44.000Z",
        queueEndTime: "2022-03-09T17:13:44.000Z"
    }
];
for (var i = 0; i < personData.length; ++i) {
    var randomQueueIndex = Math.floor(Math.random() * queueData.length);
    personData[i].queueID = queueData[randomQueueIndex].id;
    if (!queueData[randomQueueIndex].serviceRegions.length) {
        delete personData[i].serviceStartTime;
        delete personData[i].serviceEndTime;
        delete personData[i].serviceRegionId;
        personData[i].createdAt = new Date().toISOString();
        personData[i].updatedAt = new Date().toISOString();
        continue;
    }
    if (personData[i].serviceStartTime == null) {
        delete personData[i].serviceStartTime;
        delete personData[i].serviceEndTime;
        delete personData[i].serviceRegionId;
        personData[i].createdAt = new Date().toISOString();
        personData[i].updatedAt = new Date().toISOString();
        continue;
    }
    var randomSR = queueData[randomQueueIndex].serviceRegions[Math.floor(Math.random() * queueData[randomQueueIndex].serviceRegions.length)];
    if (randomSR) {
        personData[i].serviceRegionId = randomSR.id;
    }
    else {
        delete personData[i].serviceStartTime;
        delete personData[i].serviceEndTime;
        delete personData[i].serviceRegionId;
    }
    personData[i].createdAt = new Date().toISOString();
    personData[i].updatedAt = new Date().toISOString();
    // final.push({
    //   id: personData[i].id.createdAt(),
    //   topColor: personData[i].id,
    //   bottomColor: personData[i].id,
    //   ageRange: personData[i].id,
    //   queueEndTime: personData[i].id,
    //   queueId: personData[i].id,
    //   serviceStartTime: personData[i].id,
    //   serviceEndTime: personData[i].id,
    //   serviceRegionId: personData[i].id,
    //   createdAt: personData[i].id,
    //   updatedAt: personData[i].id,
    // })
}
// INSERT INTO persons(id,"topColor","bottomColor","ageRange","queueStartTime","accessoriesList","serviceStartTime","serviceEndTime", "queueEndTime","queueId","serviceRegionId", "createdAt", "updatedAt")
// queryGenerator
var str = "INSERT INTO persons(id,\"topColor\",\"bottomColor\",\"ageRange\",\"queueStartTime\",\"accessoriesList\",\"serviceStartTime\",\"serviceEndTime\", \"queueEndTime\",\"queueId\",\"serviceRegionId\", \"createdAt\", \"updatedAt\") VALUES ";
function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
for (var i = 0; i < personData.length; ++i) {
    var id = personData[i].id+1000;
    var topColor = personData[i].topColor;
    var bottomColor = personData[i].bottomColor;
    var ageRange = personData[i].ageRange;
    var queueStartTime = new Date();
    var accessoriesList = personData[i].accessoriesList;
    var queueEndTime = "NULL";
    var queueId = personData[i].queueID ? personData[i].queueID : "NULL";
    var serviceRegionId = personData[i].serviceRegionId
        ? personData[i].serviceRegionId
        : "NULL";
    var serviceStartTime = addMinutes(queueStartTime, getRandomInt(1, 11) // 1 to 10 minutes
    ).toISOString();
    var serviceEndTime = "NULL";
    var createdAt = personData[i].createdAt;
    var updatedAt = personData[i].updatedAt;
    queueStartTime = queueStartTime.toISOString();

    // VALUES (1,'#191d7b','#519c47','70','2022-12-25T12:58:22Z','{"Cap"}','2022-12-25T13:05:22.000Z','2022-12-25T13:10:22.000Z','2022-12-25T13:10:22.000Z',40,38,'2023-01-11T10:12:54.808Z','2023-01-11T10:12:54.808Z')
    //   updatedAt: personData[i].id,
    var x = " (".concat(id, ",'").concat(topColor, "','").concat(bottomColor, "','").concat(ageRange, "','").concat(queueStartTime, "','{\"").concat(accessoriesList, "\"}',").concat(serviceStartTime == "NULL" ? "NULL" : "'".concat(serviceStartTime, "'"), ",").concat(serviceEndTime == "NULL" ? "NULL" : "'".concat(serviceEndTime, "'"), ",").concat("NULL,").concat(queueId, ",").concat(serviceRegionId, ",'").concat(createdAt, "', '").concat(updatedAt, "'),");
    str += x;
}
console.log(str);
