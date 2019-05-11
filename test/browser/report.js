import reportCss from './report.less';

// 生成对象表格
function createObjectTable(object, titleText = '') {

  // wrap
  const tableWrap = document.createElement('div');
  tableWrap.className = 'table-wrap';

  // title
  if (titleText) {
    const title = document.createElement('div');
    title.innerHTML = titleText;
    tableWrap.appendChild(title);
  }

  // table
  const table = document.createElement('table');
  
  // thread
  const headerTr = document.createElement('tr');
  const defaultTh = document.createElement('th');
  defaultTh.innerText = '(index)';
  headerTr.appendChild(defaultTh);
  for (let _th of Object.keys(Object.values(object)[0])) {
    const th = document.createElement('th');
    th.innerText = _th;
    headerTr.appendChild(th);
  }
  table.appendChild(headerTr);

  // trow
  for (let [key, value] of Object.entries(object)) {
    const tr = document.createElement('tr');
    const keyTd = document.createElement('td');
    keyTd.innerText = key;
    table.appendChild(keyTd);

    for (let _value of Object.values(value)) {
      const itemTd = document.createElement('td');
      itemTd.innerText = _value;
      table.appendChild(itemTd);
    }

    table.appendChild(tr);
  }

  tableWrap.appendChild(table);
  this.modal.appendChild(tableWrap);
}

class ReportModal {
  constructor() {
    // 生成蒙层
    // 蒙层wrap
    this.modalWrap = document.createElement('div');
    this.modalWrap.className = 'report-modal-wrap';

    // 蒙层
    this.modal = document.createElement('div');
    this.modal.className = 'report-modal';
    this.modalWrap.appendChild(this.modal);

    // 关闭按钮
    const close = document.createElement('div');
    close.className = 'close';
    // 关闭按钮触发事件
    close.onclick = () => {
      this.modalWrap.remove();
    };
    const close_v = document.createElement('div');
    close_v.className = 'close-vertical';
    const close_h = document.createElement('div');
    close_h.className = 'close-horizontal';
    close.appendChild(close_v);
    close.appendChild(close_h);
    this.modal.appendChild(close);

    document.body.appendChild(this.modalWrap);
  }

  add(array = [], title = '') {

    if (!Array.isArray(array)) {
      array = [array];
    }
    for (let item of array) {
      createObjectTable.call(this, item, title);
    }

    return this;
  }
}

export default new ReportModal();