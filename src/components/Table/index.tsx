import React, { ReactNode, useMemo } from "react";
import "./style/index.less";

interface Column {
  title: string;
  dataIndex: string;
  key?: string;
  render?: (...args: any[]) => ReactNode;
}

interface DataSource {
  key?: string;
  [index: string]: any;
}

interface TableProps {
  /** 表头数据(对每列数据的定义) */
  columns: Column[];
  /** 每行数据 */
  dataSource: DataSource[];
  className?: string;
}

const Table: React.FC<TableProps> = ({ columns, dataSource, className }) => {
  const customClassName = useMemo(() => {
    let classname = "livod-table";
    if (className) {
      classname += ` ${className}`;
    }
    return classname;
  }, [className]);
  /** 确保dataIndex与数据对应 */
  const indexName = useMemo(
    () =>
      columns.reduce((pre, cur) => {
        if (cur.render) {
          pre.push({
            render: cur.render,
            dataIndex: cur.dataIndex,
          });
        } else {
          pre.push({
            dataIndex: cur.dataIndex,
          });
        }
        return pre;
      }, []),
    [columns]
  );
  return (
    <table className={customClassName}>
      <thead className="livod-table-thead">
        <tr>
          {columns.map((v, i) => (
            <th key={v.key || i}>{v.title}</th>
          ))}
        </tr>
      </thead>
      <tbody className="livod-table-tbody">
        {dataSource.map((v, i) => (
          <tr key={v.key || i}>
            {indexName.map((name, i) => {
              const { dataIndex, render } = name;
              return render ? (
                <td key={dataIndex || i}>{name.render(v[dataIndex], v)}</td>
              ) : (
                <td key={dataIndex || i}>{v[dataIndex]}</td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
