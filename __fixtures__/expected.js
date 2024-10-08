const expectedStylishString = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;

const expectedPlainString = `Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`;

const expectedJsonString = `[
  {
    "key": "common",
    "children": [
      {
        "key": "follow",
        "value2": false,
        "status": "added"
      },
      {
        "key": "setting1",
        "value1": "Value 1",
        "status": "unchanged"
      },
      {
        "key": "setting2",
        "value1": 200,
        "status": "deleted"
      },
      {
        "key": "setting3",
        "value1": true,
        "value2": null,
        "status": "changed"
      },
      {
        "key": "setting4",
        "value2": "blah blah",
        "status": "added"
      },
      {
        "key": "setting5",
        "value2": {
          "key5": "value5"
        },
        "status": "added"
      },
      {
        "key": "setting6",
        "children": [
          {
            "key": "doge",
            "children": [
              {
                "key": "wow",
                "value1": "",
                "value2": "so much",
                "status": "changed"
              }
            ],
            "status": "nested"
          },
          {
            "key": "key",
            "value1": "value",
            "status": "unchanged"
          },
          {
            "key": "ops",
            "value2": "vops",
            "status": "added"
          }
        ],
        "status": "nested"
      }
    ],
    "status": "nested"
  },
  {
    "key": "group1",
    "children": [
      {
        "key": "baz",
        "value1": "bas",
        "value2": "bars",
        "status": "changed"
      },
      {
        "key": "foo",
        "value1": "bar",
        "status": "unchanged"
      },
      {
        "key": "nest",
        "value1": {
          "key": "value"
        },
        "value2": "str",
        "status": "changed"
      }
    ],
    "status": "nested"
  },
  {
    "key": "group2",
    "value1": {
      "abc": 12345,
      "deep": {
        "id": 45
      }
    },
    "status": "deleted"
  },
  {
    "key": "group3",
    "value2": {
      "deep": {
        "id": {
          "number": 45
        }
      },
      "fee": 100500
    },
    "status": "added"
  }
]`;

const expectedCompareObj = [
  {
    key: 'common',
    children: [
      {
        key: 'follow',
        value2: false,
        status: 'added',
      },
      {
        key: 'setting1',
        value1: 'Value 1',
        status: 'unchanged',
      },
      {
        key: 'setting2',
        value1: 200,
        status: 'deleted',
      },
      {
        key: 'setting3',
        value1: true,
        value2: null,
        status: 'changed',
      },
      {
        key: 'setting4',
        value2: 'blah blah',
        status: 'added',
      },
      {
        key: 'setting5',
        value2: {
          key5: 'value5',
        },
        status: 'added',
      },
      {
        key: 'setting6',
        children: [
          {
            key: 'doge',
            children: [
              {
                key: 'wow',
                value1: '',
                value2: 'so much',
                status: 'changed',
              },
            ],
            status: 'nested',
          },
          {
            key: 'key',
            value1: 'value',
            status: 'unchanged',
          },
          {
            key: 'ops',
            value2: 'vops',
            status: 'added',
          },
        ],
        status: 'nested',
      },
    ],
    status: 'nested',
  },
  {
    key: 'group1',
    children: [
      {
        key: 'baz',
        value1: 'bas',
        value2: 'bars',
        status: 'changed',
      },
      {
        key: 'foo',
        value1: 'bar',
        status: 'unchanged',
      },
      {
        key: 'nest',
        value1: {
          key: 'value',
        },
        value2: 'str',
        status: 'changed',
      },
    ],
    status: 'nested',
  },
  {
    key: 'group2',
    value1: {
      abc: 12345,
      deep: {
        id: 45,
      },
    },
    status: 'deleted',
  },
  {
    key: 'group3',
    value2: {
      deep: {
        id: {
          number: 45,
        },
      },
      fee: 100500,
    },
    status: 'added',
  },
];

const expectedParsObj = {
  common: {
    setting1: 'Value 1',
    setting2: 200,
    setting3: true,
    setting6: {
      key: 'value',
      doge: {
        wow: '',
      },
    },
  },
  group1: {
    baz: 'bas',
    foo: 'bar',
    nest: {
      key: 'value',
    },
  },
  group2: {
    abc: 12345,
    deep: {
      id: 45,
    },
  },
};

export {
  expectedStylishString,
  expectedPlainString,
  expectedJsonString,
  expectedParsObj,
  expectedCompareObj,
};
