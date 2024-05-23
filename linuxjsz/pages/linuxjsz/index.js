// index.js

Page({
  data: {
    showUploadTip: false,
    powerList: [{
      title: '学习Nginx（十三）：第三方模块ModSecurity的安装与规则配置',
      tip: '2024/5/23',
      link: 'https://mp.weixin.qq.com/s/o1UXCeFF_Xcc4C1fQlmvRg',
    }, {
      title: '学习Nginx（十二）：实现负载均衡',
      tip: '2024/5/22',
      link: 'https://mp.weixin.qq.com/s/rioyaHlJVzBFuBfifz8YXg',
    }, {
      title: '学习Nginx（十一）：反向代理与Tomcat动静分离配置',
      tip: '2024/5/21',
      link: 'https://mp.weixin.qq.com/s/tp6gTxUr_u6fkks0a99u0g',
    }, {
      title: 'Update! Tomcat部署脚本',
      tip: '2024/5/20',
      link: 'https://mp.weixin.qq.com/s/sbQJjZL8s6V7gL1fIfIsdg',
    }, {
      title: '学习Nginx（十）：提升网站负载之expires缓存',
      tip: '2024/5/19',
      link: 'https://mp.weixin.qq.com/s/eVgmQ3Yx7yCHhBhCgq2b9w',
    }, {
      title: '学习Nginx（九）：提升网站速度之gzip压缩',
      tip: '2024/5/18',
      link: 'https://mp.weixin.qq.com/s/7SzJ8aOsxQGUOR0pGswZHg',
    }, {
      title: '学习Nginx（八）：rewrite、if、set',
      tip: '2024/5/17',
      link: 'https://mp.weixin.qq.com/s/Hh94s2kDbIXCz9poi91rbw',
    }, {
      title: '揭秘Kubernetes（K8s）：云原生时代的核心引擎',
      tip: '2024/5/16',
      link: 'https://mp.weixin.qq.com/s/-y7W62atJ5NTrNcWAoqTcg',
    }, {
      title: 'Rocky Linux 介绍与安装',
      tip: '2024/5/16',
      link: 'https://mp.weixin.qq.com/s/-JI_rr2CIOO2_UMtz4WbyA',
    }, {
      title: '学习Nginx（七）：Location的URI解析',
      tip: '2024/5/15',
      link: 'https://mp.weixin.qq.com/s/sjbGIG8NWcENoNaa94VSCg',
    }, {
      title: '学习Nginx（六）：日志管理',
      tip: '2024/5/14',
      link: 'https://mp.weixin.qq.com/s/st37BlvPWUs9XJdrf04VMg',
    }, {
      title: '学习Nginx（五）：虚拟主机配置',
      tip: '2024/5/13',
      link: 'https://mp.weixin.qq.com/s/ERk0Or9FBSASSGQKYrRqgQ',
    }, {
      title: '学习Nginx（四）：平滑升级与回滚',
      tip: '2024/5/12',
      link: 'https://mp.weixin.qq.com/s/qUyN3ZoAaKncBl9kUB0cXA',
    }, {
      title: '学习Nginx（三）：命令与信号',
      tip: '2024/5/11',
      link: 'https://mp.weixin.qq.com/s/PIMZ4FdSlnXbQXb5Z469SA',
    }, {
      title: '学习Nginx（二）：版本介绍和安装',
      tip: '2024/5/10',
      link: 'https://mp.weixin.qq.com/s/GsbMI0RVjTYpFL6AyTQSFQ',
    }, {
      title: '学习Nginx（一）：基础',
      tip: '2024/5/7',
      link: 'https://mp.weixin.qq.com/s/PK_ZHQvfY4OLuNj7oNs90Q',
    }, {
      title: 'OpsManage基于docker的部署与使用',
      tip: '2024/5/6',
      link: 'https://mp.weixin.qq.com/s/TPqcoB-DfSBHSidNyPr0HQ',
    }, {
      title: '分享！Docker面试题库',
      tip: '2024/5/5',
      link: 'https://mp.weixin.qq.com/s/m6FpGfqDWZOovYXFJ3ClxA',
    }, {
      title: '自动化运维管理工具OpsManager',
      tip: '2024/5/4',
      link: 'https://mp.weixin.qq.com/s/sPDRjau-3Qms9a_kl_H-dQ',
    }, {
      title: '转载分享！MySQL学习笔记',
      tip: '2024/5/3',
      link: 'https://mp.weixin.qq.com/s/FQ3chFXZVmMD-Tr1PBGYBw',
    }, {
      title: 'Switch 之 配置SNMP',
      tip: '2024/5/2',
      link: 'https://mp.weixin.qq.com/s/mLptELsimN7icgSTS-UtpQ',
    }, {
      title: 'Update！ 基于RockyLinux9.3离线安装Zabbix6.0',
      tip: '2024/5/1',
      link: 'https://mp.weixin.qq.com/s/I8UbNqgicURogBc6W9Eixw',
    }, {
      title: '运维 之 神通数据库',
      tip: '2024/4/30',
      link: 'https://mp.weixin.qq.com/s/48rXmh29KG2DLUR5tIQxHw',
    }, {
      title: '学习MySQL（六）：Python的连接与操作',
      tip: '2024/4/28',
      link: 'https://mp.weixin.qq.com/s/4SsgL3EWWsMDqgikOpcewg',
    }, {
      title: '学习MySQL（五）：窗口函数',
      tip: '2024/4/27',
      link: 'https://mp.weixin.qq.com/s/87e6xfMTUBZFyonaBq49oQ',
    }, {
      title: '学习MySQL（四）：记录的增删改查',
      tip: '2024/4/26',
      link: 'https://mp.weixin.qq.com/s/2MzH9hIcpkvXp-OD8bbxrA',
    }, {
      title: '学习MySQL（三）：数据类型&约束条件',
      tip: '2024/4/25',
      link: 'https://mp.weixin.qq.com/s/UE3xoGM_jxpDUG1S-LqGuQ',
    }, {
      title: '学习MySQL（二）：库表的操作',
      tip: '2024/4/24',
      link: 'https://mp.weixin.qq.com/s/oY-XGnvHtruT3wG6_M1hdQ',
    }, {
      title: '学习MySQL（一）：了解数据库',
      tip: '2024/4/23',
      link: 'https://mp.weixin.qq.com/s/khLLrbsw4DdgxuWDsVj7tQ',
    }, {
      title: '学习Python 之 日志巡检脚本',
      tip: '2024/4/22',
      link: 'https://mp.weixin.qq.com/s/QDRUZbr0SXDo404TYRETbg',
    }, {
      title: '运维 之 DNS域名解析',
      tip: '2024/4/21',
      link: 'https://mp.weixin.qq.com/s/lfJxa2oH-z0xHYkXCJpMtA',
    }, {
      title: '转载分享！学习Python 之 初级与高级的分水岭',
      tip: '2024/4/20',
      link: 'https://mp.weixin.qq.com/s/YC9cbzDUHDoOFOSBD4WnSw',
    }, {
      title: 'Switch 之 Maipu Config',
      tip: '2024/4/19',
      link: 'https://mp.weixin.qq.com/s/V3qK-190gmnb611DARszYg',
    }, {
      title: 'Switch 之 H3C S5500',
      tip: '2024/4/18',
      link: 'https://mp.weixin.qq.com/s/zAlhX5SLXFl0uXa7v9f-iw',
    }, {
      title: 'OpenStack配置 之 不同cpu迁移虚拟机',
      tip: '2024/4/17',
      link: 'https://mp.weixin.qq.com/s/0Gp4UskW66cHwTQ_iF3Y-g',
    }, {
      title: 'Docker配置 之 本地仓库web访问',
      tip: '2024/4/16',
      link: 'https://mp.weixin.qq.com/s/G5pFEe1sGKezWHmha4BHBQ',
    }, {
      title: '运维 之 一键部署Tomcat',
      tip: '2024/4/15',
      link: 'https://mp.weixin.qq.com/s/pTIW7jQN6wHLjOSH2rKE5Q',
    }, {
      title: 'Ansible部署 之 zookeeper集群',
      tip: '2024/4/14',
      link: 'https://mp.weixin.qq.com/s/35F8aeRcMTzicEpu1v3NsA',
    }, {
      title: 'Ansible离线部署 之 Zabbix',
      tip: '2024/4/13',
      link: 'https://mp.weixin.qq.com/s/grjHVjWo5ipWDQzULzWQpg',
    }, {
      title: '运维 之 IT系统灾难恢复计划的12大要素',
      tip: '2024/4/12',
      link: 'https://mp.weixin.qq.com/s/00jSq7o1F8OhxfhjQJPQcA',
    }, {
      title: '运维 之 大文件分片刻录光盘',
      tip: '2024/4/11',
      link: 'https://mp.weixin.qq.com/s/dqGldVkPn6K-_sk8z4Y_Dg',
    }, {
      title: 'Linux文本处理三剑客之awk命令',
      tip: '2024/4/10',
      link: 'https://mp.weixin.qq.com/s/4ssigoVshWA4tMxccLDg8A',
    }, {
      title: 'Nested KVM Hypervisor Support',
      tip: '2024/4/9',
      link: 'https://mp.weixin.qq.com/s/WbHuOxnONgHbvbDTzV3N1g',
    }, {
      title: '一款开源可视化的路由追踪工具',
      tip: '2024/4/5',
      link: 'https://mp.weixin.qq.com/s/d9pwhEwnpAG7oBGiz13GVA',
    }, {
      title: '后CentOS时代，服务器OS该如何抉择？',
      tip: '2024/4/4',
      link: 'https://mp.weixin.qq.com/s/BGIbeOVd7ya-jQ4KToENWw',
    }, {
      title: 'Zabbix配置自定义监控',
      tip: '2024/3/29',
      link: 'https://mp.weixin.qq.com/s/pG7jIMNjYiEnruYYW6CuKQ',
    }, {
      title: 'Zabbix配置中文显示及乱码问题',
      tip: '2024/3/28',
      link: 'https://mp.weixin.qq.com/s/aByspxcqtL4T5OjUiljJjA'
	}],
    haveCreateCollection: false,
    // currentPage: 1,
    // pageSize: 8,
    // totalPages: 0,
    // currentPageData: [],
  },

  // generateAricleUrl: function(articleLink, page) {
  //   return this.data.powerList.url + articleLink + '?page=' + page;
  // },


  // // 加载第一页数据  
  // onLoad: function () {  
  //   this.setData({
  //     totalPages: Math.ceil(this.data.powerList.length / this.data.pageSize)
  //   });

  //   this.loadPageData(1);
  // },

  // // 加载指定页码的数据  
  // loadPageData: function(page) {  
  //   var start = (page - 1) * this.data.pageSize;  
  //   var end = start + this.data.pageSize;  
  //   var currentPageData = this.data.powerList.slice(start, end);  
  //   this.setData({  
  //     currentPage: page,  
  //     currentPageData: currentPageData  
  //   });  
  // },
    
  // // 点击“上一页”按钮  
  // prevPage: function () {  
  //   if (this.data.currentPage > 1) {  
  //     this.loadPageData(this.data.currentPage - 1);  
  //   }  
  // },  
    
  // // 点击“下一页”按钮  
  // nextPage: function () {  
  //   if (this.data.currentPage < this.data.totalPages) {  
  //     this.loadPageData(this.data.currentPage + 1);
  //   }  
  // },

  onClickPowerInfo(e) {
    const index = e.currentTarget.dataset.index;
    const powerList = this.data.powerList;
    const selectedItem = powerList[index];
    selectedItem.showItem = !selectedItem.showItem;
    if (selectedItem.link) {
      wx.navigateTo({
        url: `../web/index?url=${selectedItem.link}&title=${selectedItem.title}`,
      });
    } else if (selectedItem.page) {
      wx.navigateTo({
        url: `/pages/${selectedItem.page}/index`,
      });
    }
  },

  jumpPage(e) {
    const { type, page } = e.currentTarget.dataset;
    if (type) {
      wx.navigateTo({
        url: `/pages/exampleDetail/index?envId=${this.data.selectedEnv?.envId}&type=${type}`,
      });
    } else {
      wx.navigateTo({
        url: `/pages/${page}/index?envId=${this.data.selectedEnv?.envId}`,
      });
    }
  }  
});
