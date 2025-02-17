export const tableData = {
    1: [
        {
            type: 'join',
            times: [2,4],
            indexMap: [8],
            list: [
                {
                    id: '1-1-a',
                    title: '新闻采访与写作I',
                    location: '紫金港东2-302',
                    startWeek: 1,
                    endWeek: 8,
                },
                {
                    id: '1-1-b',
                    title: '新闻采访与写作II',
                    location: '紫金港东2-302',
                    startWeek: 9,
                    endWeek: 17,
                }
            ]
        },
        {
            type: 'normal',
            times: [5,6],
            normal: {
                id: '1-2',
                title: '广播电视学',
                location: '紫金港东1A-202',
            }
        },
        {
            type: 'normal',
            times: [7,8],
            normal: {
                id: '1-3',
                title: '新闻道德与法规',
                location: '紫金港东2-301',
            }
        }
    ],
    2: [
        {
            type: 'normal',
            times: [1,2],
            normal: {
                id: '2-1',
                title: '多媒体创意思维实验',
                location: '紫金港东6-324',
            }
        },
        {
            type: 'normal',
            times: [3,4],
            normal: {
                id: '2-2',
                title: '广播电视优秀作品欣赏',
                location: '紫金港东1A-402',
            }
        },
        {
            type: 'loop',
            times: [5,6],
            odd: {
                id: '2-3-a',
                title: '现代广告学',
                location: '紫金港东1A-122',
                startWeek: 1,
                endWeek: 17
            },
            even: {
                id: '2-3-b',
                title: '跨文化传媒',
                location: '紫金港东2-202',
                startWeek: 1,
                endWeek: 16
            }
        },
        {
            type: 'normal',
            times: [7,8],
            normal: {
                id: '2-4',
                title: '大学体育',
                location: '紫金港东运动场',
                endWeek: 16
            }
        },
        {
            type: 'normal',
            times: [9,10],
            normal: {
                id: '2-5',
                title: '传播策划',
                location: '紫金港东1B-214',
            }
        }
    ],
    3: [
        {
            type: 'normal',
            times: [1,2],
            normal: {
                id: '3-1',
                title: '影视艺术概论',
                location: '紫金港东1A-123',
            }
        },
        {
            type: 'normal',
            times: [3,4],
            normal: {
                id: '3-2',
                title: '大学英语读写II',
                location: '紫金港东2-105',
                endWeek: 17
            }
        },
        {
            type: 'normal',
            times: [5,6],
            normal: {
                id: '3-3',
                title: '传播艺术与媒介批评',
                location: '紫金港东1A-217',
            }
        },
        {
            type: 'normal',
            times: [7,8],
            normal: {
                id: '3-4',
                title: '电视节目编排与制作',
                location: '紫金港东2-117',
            }
        },
        {
            type: 'normal',
            times: [9,10],
            normal: {
                id: '3-5',
                title: '媒介素养',
                location: '紫金港东1A-307',
            }
        },
    ],
    4: [
        {
            type: 'normal',
            times: [1,2],
            normal: {
                id: '4-1',
                title: '思想道德与法治',
                location: '紫金港东1B-204',
            }
        },
        {
            type: 'normal',
            times: [3,4],
            normal: {
                id: '4-2',
                title: '电脑设计',
                location: '中心机房302',
            }
        },
        {
            type: 'loop',
            times: [5,6],
            even: {
                id: '4-3-b',
                title: '文化人类学',
                location: '紫金港东2-202',
                endWeek: 16
            }
        },
        {
            type: 'loop',
            times: [7,8],
            odd: {
                id: '4-4-a',
                title: '摄影艺术思维与创作',
                location: '紫金港东3-107',
                endWeek: 16
            }
        },
    ],
    5: [
        {
            type: 'normal',
            times: [1,2],
            normal: {
                id: '5-1',
                title: '电视节目编排与制作',
                location: '紫金港东2-117',
            }
        },
        {
            type: 'loop',
            times: [3,4],
            even: {
                id: '5-2-b',
                title: '大学英语听说II',
                location: '紫金港东2-302',
                endWeek: 16
            }
        },
        {
            type: 'normal',
            times: [5,6],
            normal: {
                id: '5-3',
                title: '试听语言',
                location: '紫金港东1A-301',
            }
        },
        {
            type: 'normal',
            times: [7,8],
            normal: {
                id: '5-4',
                title: '外国哲学',
                location: '紫金港东1A-402',
            }
        }
    ],
    6: [
        {
            type: 'normal',
            times: [1,4],
            normal: {
                id: '6-1',
                title: '劳动',
                location: '社区中心劳动实践',
                startWeek: 5,
                endWeek: 8
            }
        }
    ]
}


const xwcfyxzI = {
    id: 'xwcf1',
    name: '新闻采访与写作I',
    location: '紫金港东2-302',
    selectDateInfo: [
        {
            week: 1,
            oddEven: 'normal',
            startWeek: 1,
            endWeek: 8,
            startTime: '09:40',
            nodes: 3,
        }
    ]
}
const xwcfyxzII = {
    id: 'xwcf2',
    name: '新闻采访与写作II',
    location: '紫金港东2-302',
    selectDateInfo: [
        {
            week: 1,
            oddEven: 'normal',
            startWeek: 9,
            endWeek: 17,
            startTime: '09:40',
            nodes: 3
        }
    ]
}
const gbdsx = {
    id: 'gbds',
    name: '广播电视学',
    location: '紫金港东1A-202',
    selectDateInfo: [
        {
            week: 1,
            oddEven: 'normal',
            startWeek: 1,
            startTime: '14:00',
            nodes: 2
        }
    ]
}
const xwddyfg = {
    id: 'xwdd',
    name: '新闻道德与法规',
    location: '紫金港东2-301',
    selectDateInfo: [
        {
            week: 1,
            oddEven: 'normal',
            startWeek: 1,
            startTime: '16:00',
            nodes: 2
        }
    ]
}
const dmtcyswsy = {
    id: 'dmtcy',
    name: '多媒体创意思维实验',
    location: '紫金港东6-324',
    selectDateInfo: [
        {
            week: 2,
            oddEven: 'normal',
            startWeek: 1,
            startTime: '08:00',
            nodes: 2
        }
    ]
}
const gbdsyxzpxs = {
    id: 'gbdsyxzp',
    name: '广播电视优秀作品欣赏',
    location: '紫金港东1A-402',
    selectDateInfo: [
        {
            week: 2,
            oddEven: 'normal',
            startWeek: 1,
            startTime: '10:00',
            nodes: 2
        }
    ]
}
const xdggx = {
    id: 'xdggx',
    name: '现代广告学',
    location: '紫金港东1A-122',
    selectDateInfo: [
        {
            week: 2,
            oddEven: 'odd',
            startWeek: 1,
            endWeek: 17,
            startTime: '14:00',
            nodes: 2
        }
    ]
}
const kwhcb = {
    id: 'kwhcb',
    name: '跨文化传播',
    location: '紫金港东2-202',
    selectDateInfo: [
        {
            week: 2,
            oddEven: 'even',
            startWeek: 1,
            endWeek: 16,
            startTime: '14:00',
            nodes: 2
        }
    ]
}
const dxty = {
    id: 'dxty',
    name: '大学体育（太极）',
    location: '紫金港东运动场',
    selectDateInfo: [
        {
            week: 2,
            oddEven: 'normal',
            startWeek: 1,
            startTime: '16:00',
            nodes: 2
        }
    ]
}
const cbch = {
    id: 'cbch',
    name: '传播策划',
    location: '紫金港东1B-214',
    selectDateInfo: [
        {
            week: 2,
            oddEven: 'normal',
            startWeek: 1,
            startTime: '18:30',
            nodes: 2
        }
    ]
}
const ysysgl = {
    id: 'ysysgl',
    name: '影视艺术概论',
    location: '紫金港东1A-123',
    selectDateInfo: [
        {
            week: 3,
            oddEven: 'normal',
            startWeek: 1,
            startTime: '08:00',
            nodes: 2
        }
    ]
}
const dxyydxII = {
    id: 'dxyydxII',
    name: '大学英语读写II',
    location: '紫金港东2-105',
    selectDateInfo: [
        {
            week: 3,
            oddEven: 'normal',
            startWeek: 1,
            endWeek: 17,
            startTime: '10:00',
            nodes: 2
        }
    ]
}
const cbysymtpp = {
    id: 'cbysymtpp',
    name: '传播艺术与媒体批评',
    location: '紫金港东1A-217',
    selectDateInfo: [
        {
            week: 3,
            oddEven: 'normal',
            startWeek: 1,
            startTime: '14:00',
            nodes: 2
        }
    ]
}
const dsjmbpyzz = {
    id: 'dsjmbpyzz',
    name: '电视节目编排与制作',
    location: '紫金港东2-117',
    selectDateInfo: [
        {
            week: 3,
            oddEven: 'normal',
            startWeek: 1,
            startTime: '16:00',
            nodes: 2
        },
        {
            week: 5,
            oddEven: 'normal',
            startWeek: 1,
            startTime: '08:00',
            nodes: 2
        }
    ]
}
const mjsy = {
    id: 'mjsy',
    name: '媒介素养',
    location: '紫金港东1A-307',
    selectDateInfo: [
        {
            week: 3,
            oddEven: 'normal',
            startWeek: 1,
            startTime: '18:30',
            nodes: 2
        }
    ]
}
const sxddyfz = {
    id: 'sxddyfz',
    name: '思想道德与法治',
    location: '紫金港东1B-204',
    selectDateInfo: [
        {
            week: 4,
            oddEven: 'normal',
            startWeek: 1,
            startTime: '08:00',
            nodes: 2
        }
    ]
}
const dnsj = {
    id: 'dnsj',
    name: '电脑设计',
    location: '中心机房302',
    selectDateInfo: [
        {
            week: 4,
            oddEven: 'normal',
            startWeek: 1,
            startTime: '10:00',
            nodes: 2
        }
    ]
}
const whrlx = {
    id: 'whrlx',
    name: '文化人类学',
    location: '紫金港东2-202',
    selectDateInfo: [
        {
            week: 4,
            oddEven: 'even',
            startWeek: 1,
            endWeek: 16,
            startTime: '14:00',
            nodes: 2
        }
    ]
}
const syysswycz = {
    id: 'syysswycz',
    name: '摄影艺术思维与创作',
    location: '紫金港东3-107',
    selectDateInfo: [
        {
            week: 4,
            oddEven: 'odd',
            startWeek: 1,
            endWeek: 16,
            startTime: '16:00',
            nodes: 2
        }
    ]
}
const dxyytsII = {
    id: 'dxyytsII',
    name: '大学英语听说II',
    location: '紫金港东2-302',
    selectDateInfo: [
        {
            week: 5,
            oddEven: 'even',
            startWeek: 1,
            endWeek: 16,
            startTime: '10:00',
            nodes: 2
        }
    ]
}
const styy = {
    id: 'styy',
    name: '视听语言',
    location: '紫金港东1A-301',
    selectDateInfo: [
        {
            week: 5,
            oddEven: 'normal',
            startWeek: 1,
            startTime: '14:00',
            nodes: 2
        }
    ]
}
const wgzx = {
    id: 'wgzx',
    name: '外国哲学',
    location: '紫金港东1A-402',
    selectDateInfo: [
        {
            week: 5,
            oddEven: 'normal',
            startWeek: 1,
            startTime: '16:00',
            nodes: 2
        }
    ]
}
const ld = {
    id: 'ld',
    name: '劳动',
    location: '社区中心劳动实践',
    selectDateInfo: [
        {
            week: 6,
            oddEven: 'normal',
            startWeek: 5,
            endWeek: 8,
            startTime: '08:00',
            nodes: 4
        }
    ]
}

export const allSelectCourse = [
    xwcfyxzI,
    xwcfyxzII,
    gbdsx,
    xwddyfg,
    dmtcyswsy,
    gbdsyxzpxs,
    xdggx,
    kwhcb,
    dxty,
    cbch,
    ysysgl,
    dxyydxII,
    cbysymtpp,
    dsjmbpyzz,
    mjsy,
    sxddyfz,
    dnsj,
    whrlx,
    syysswycz,
    dxyytsII,
    styy,
    wgzx,
    ld
]