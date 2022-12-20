import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table,Tag } from 'antd';
import Highlighter from 'react-highlight-words';
const data = [
  {
    key: '1',
    name: 'John Brown',
    quantity: 5,
    price: '300',
    total: '100 Pesos',
    sold: 'nice',
    out: 'nice',
  },
  {
    key: '2',
    name: 'Joe Black',
    quantity: 42,
    price: '555',
    total: '100 Pesos',
    sold: 'loser',
    out: 'nice',
  },
  {
    key: '3',
    name: 'Jim Green',
    quantity: 9,
    price: 'S22',
    total: '100 Pesos',
    sold: 'cool',
    out: 'nice',
  },
  {
    key: '4',
    name: 'Jim Red',
    quantity: 32,
    price: '99',
    total: '100 Pesos',
    sold: 'cool',
    out: 'nice',
  },
];
const BreadListTable = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'Bread Name',
      dataIndex: 'name',
      key: 'name',
      width: '15%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      width: '10%',
      ...getColumnSearchProps('quantity'),
      render: (_, { quantity }) => (
        <Tag color={quantity <= 10?'volcano':'green'} key={quantity}>
             {quantity}
           </Tag>
    ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: '10%',
      ...getColumnSearchProps('price'),
      sorter: (a, b) => a.price.length - b.price.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Total Amount',
        dataIndex: 'total',
        key: 'total',
        width: '10%',
        ...getColumnSearchProps('total'),
        sorter: (a, b) => a.total.length - b.total.length,
        sortDirections: ['descend', 'ascend'],
      },
    {
        title: 'Bread Sold',
        key: 'sold',
        dataIndex: 'sold',
        render: (_, { sold }) => (
            <Button block type="primary"  ghost>
            Sold Out
          </Button>
        ),
          width: '5%',
      },
      {
        title: 'Bread Out',
        dataIndex: 'out',
        key: 'out',
        width: '5%',
        render: (_, { sold }) => (
            <Button block type="primary" danger ghost>
            Bread Out
          </Button>
        ),
      },
  ];
  return <Table columns={columns} dataSource={data} />;
};
export default BreadListTable;