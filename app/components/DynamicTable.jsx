const DynamicTable = ({ headers, rows }) => {
  return (
    <div className="overflow-x-auto border border-gray-300 rounded-lg mt-2">
      <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
        {/* Table Header */}
        <thead className="rounded">
          <tr className="bg-gray-100 rounded">
            {headers.map((header, index) => (
              <th key={index} className="border border-gray-300 rounded px-4 py-4 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border border-gray-300 px-4 py-2"
                  rowSpan={cell.rowspan || 1}
                  colSpan={cell.colspan || 1}
                >
                  {cell.content}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
