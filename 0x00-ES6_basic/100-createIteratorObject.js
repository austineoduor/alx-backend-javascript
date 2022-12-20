export default function createIteratorObject(report) {
  const items = [];
  for (const val of Object.keys(report.allEmployees)){
    for (const emp of report.allEmployees[val]){
      items.push(emp)
    }
  }

  return items
}
