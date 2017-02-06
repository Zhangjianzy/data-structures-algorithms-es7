/* List.js */
import {autobind} from 'core-decorators';

export default class List {

  constructor() {
    super();
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }

  /**
  * 在列表的末尾添加新元素
  * @param element    待添加至列表的末尾的元素
  **/
  @autobind
  append(element) {
    //TODO
  }
  /**
  * 从列表中删除元素
  * @param element    待删除元素
  **/
  @autobind
  remove(element) {

  }
  /**
  * 在列表中查找某一元素
  * @param element    待查找元素
  **/
  @autobind
  find(element) {

  }
  /**
  * 返回列表中元素的个数
  **/
  @autobind
  length() {

  }
  /**
  * 返回列表的字符串形式
  **/
  @autobind
  toString() {

  }
  /**
  * 在现有元素后插入新元素
  * @param element    待插入元素
  * @param after      待插入前一位置的元素
  **/
  @autobind
  insert(element, after) {

  }
  /**
  * 清空列表中的所有元素
  **/
  @autobind
  clear() {

  }
  /**
  * 判断给定值是否在列表中
  * @param element    待判定元素
  **/
  @autobind
  contains(element) {

  }
  /**
  * 将列表的当前位置移动到第一个元素
  **/
  @autobind
  front() {

  }
  /**
  * 将列表的当前位置移动到最后一个元素
  **/
  @autobind
  end() {

  }
  /**
  * 将当前位置前移一位
  **/
  @autobind
  prev() {

  }
  /**
  * 将当前位置后移一位
  **/
  @autobind
  next() {

  }
  /**
  * 返回列表的当前位置
  **/
  @autobind
  currPos() {

  }
  /**
  * 将当前位置移动到指定位置
  * @param pos    指定移动的位置
  **/
  @autobind
  moveTo(pos) {

  }
  /**
  * 返回列表的当前元素
  **/
  @autobind
  getElement() {

  }
}
