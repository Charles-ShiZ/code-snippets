export function data_export(res) {
  const a = document.createElement('a');
  a.href = window.URL.createObjectURL(res.data);
  a.download = '导出数据.xlsx';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
