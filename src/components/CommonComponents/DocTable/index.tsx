import { Column, Columns, DataSource } from "@site/src";
import "./index.scss";
interface Props {
  columns: Columns;
  dataSource: DataSource[];
}

/**
 * @param props.columns    必填项 title、dataIndex 选项 width、render
 * @param props.dataSource 必填项 key 必须是columns内的dataIndex
 */
function DocTable(props: Props) {
  const { columns, dataSource } = props;
  const renderColumn = (column: Column, rowData: DataSource) => {
    if (column.render) {
      return column.render(rowData[column.dataIndex]);
    }
    return rowData[column.dataIndex];
  };

  return (
    <div className="doc-table-list">
      <table>
        <thead>
          <tr>
            {columns.map((column) => {
              return (
                <th
                  key={column.dataIndex}
                  style={{ width: column.width + "px" }}
                >
                  {column.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((data, key: number) => {
            return (
              <tr key={key}>
                {columns.map((column) => {
                  return (
                    <td key={column.dataIndex}>{renderColumn(column, data)}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DocTable;
