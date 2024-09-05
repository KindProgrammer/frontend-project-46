const expectedStringFromJsons = `{
  common: {
    + follow: false
      setting1: value1 1
    - setting2: 200
    - setting3: true
    + setting3: null
    + setting4: blah blah
    + setting5: {
          key5: value15
      }
      setting6: {
          doge: {
            - wow: 
            + wow: so much
          }
          key: value1
        + ops: vops
      }
  }
  group1: {
    - baz: bas
    + baz: bars
      foo: bar
    - nest: {
          key: value1
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

export { expectedStringFromJsons, expectedParsObj, expectedCompareObj };
