app.service('MyService', function(){
  var service = this;
  service.categories = ['Women', 'Men', 'Kids', 'Baby & Child', 'Home & Garden', 'Electronics & Computers', 'Health & Beauty', 'Jewellery & Watches', 'Musical Instruments', 'Sports & Outdoors', 'Tools & Hardware', 'Movies & TV Shows', 'Office Supplies', 'Luggage & Bags', 'Food & Beverage'];
  
  service.products = [
    [
        ['屏大影院', '周末', '新品特惠', '32吋电视机', '智能网络'], 
        ['USB高清解', '芒果TV在线', '抢购价', 'USB解码', '32英寸','10核','TCL品牌日'],
        ['不要赠品', '新品上市', '4K硬屏', '领100元劵', '智能高清', '8月酷暑', '8月大促', '天猫定制'],
        ['智能操作系统','金色外观','三星屏幕','客厅爆款','八核配置','限时优惠'],
        ['限时特惠','热款爆销','4K全高清','六核智能','14核4K','YUNS','YUNOS'],
        ['微信电视','4K超清','64位真4K','10核机芯','V字黑釉底座','4K清']
    ],
    [
        ['屏大影院', '周末', '新品特惠', '32吋电机', '智能网络'], 
        ['USB高清解', '芒果TV在线', '抢价', 'USB解码', '32英寸','10核','TCL品牌日'],
        ['不要赠品', '新品上市', '4K硬屏', '领100劵', '智能高清', '8月酷暑', '8月大促', '天猫定制'],
        ['智能操作系统','金色外观','三屏幕','客厅爆款','八核配置','限时优惠'],
        ['限时特惠','热款爆销','4K全高清','六核智能','14核4K','YUNS','YUNOS'],
        ['微信电视','4K超清','64位真4K','10核机芯','V字黑釉底座','4K清']
    ],
    [
        ['屏大影院', '周末', '新品特惠', '32吋电机', '智能网络'], 
        ['USB高清解', '芒果TV在线', '抢价', 'USB解码', '32英寸','10核','TCL品牌日'],
        ['不要赠品', '新品上市', '4K硬屏', '领100劵', '智能高清', '8月酷暑', '8月大促', '天猫定制'],
        ['智能操作系统','金色外观','三屏幕','客厅爆款','八核配置','限时优惠'],
        ['限时特惠','热款爆销','4K全高清','六核智能','14核4K','YUNS','YUNOS'],
        ['微信电视','4K超清','64位真4K','10核机芯','V字黑釉底座','4K清']
    ],
    [
        ['屏大影院', '周末', '新品特惠', '32吋电机', '智能网络'], 
        ['USB高清解', '芒果TV在线', '抢价', 'USB解码', '32英寸','10核','TCL品牌日'],
        ['不要赠品', '新品上市', '4K硬屏', '领100劵', '智能高清', '8月酷暑', '8月大促', '天猫定制'],
        ['智能操作系统','金色外观','三屏幕','客厅爆款','八核配置','限时优惠'],
        ['限时特惠','热款爆销','4K全高清','六核智能','14核4K','YUNS','YUNOS'],
        ['微信电视','4K超清','64位真4K','10核机芯','V字黑釉底座','4K清']
    ],
    [
        ['屏大影院', '周末', '新品特惠', '32吋电机', '智能网络'], 
        ['USB高清解', '芒果TV在线', '抢价', 'USB解码', '32英寸','10核','TCL品牌日'],
        ['不要赠品', '新品上市', '4K硬屏', '领100劵', '智能高清', '8月酷暑', '8月大促', '天猫定制'],
        ['智能操作系统','金色外观','三屏幕','客厅爆款','八核配置','限时优惠'],
        ['限时特惠','热款爆销','4K全高清','六核智能','14核4K','YUNS','YUNOS'],
        ['微信电视','4K超清','64位真4K','10核机芯','V字黑釉底座','4K清']
    ],
    [
        ['屏大影院', '周末', '新品特惠', '32吋电机', '智能网络'], 
        ['USB高清解', '芒果TV在线', '抢价', 'USB解码', '32英寸','10核','TCL品牌日'],
        ['不要赠品', '新品上市', '4K硬屏', '领100劵', '智能高清', '8月酷暑', '8月大促', '天猫定制'],
        ['智能操作系统','金色外观','三屏幕','客厅爆款','八核配置','限时优惠'],
        ['限时特惠','热款爆销','4K全高清','六核智能','14核4K','YUNS','YUNOS'],
        ['微信电视','4K超清','64位真4K','10核机芯','V字黑釉底座','4K清']
    ],
    [
        ['屏大影院', '周末', '新品特惠', '32吋电机', '智能网络'], 
        ['USB高清解', '芒果TV在线', '抢价', 'USB解码', '32英寸','10核','TCL品牌日'],
        ['不要赠品', '新品上市', '4K硬屏', '领100劵', '智能高清', '8月酷暑', '8月大促', '天猫定制'],
        ['智能操作系统','金色外观','三屏幕','客厅爆款','八核配置','限时优惠'],
        ['限时特惠','热款爆销','4K全高清','六核智能','14核4K','YUNS','YUNOS'],
        ['微信电视','4K超清','64位真4K','10核机芯','V字黑釉底座','4K清']
    ],
    [
        ['屏大影院', '周末', '新品特惠', '32吋电机', '智能网络'], 
        ['USB高清解', '芒果TV在线', '抢价', 'USB解码', '32英寸','10核','TCL品牌日'],
        ['不要赠品', '新品上市', '4K硬屏', '领100劵', '智能高清', '8月酷暑', '8月大促', '天猫定制'],
        ['智能操作系统','金色外观','三屏幕','客厅爆款','八核配置','限时优惠'],
        ['限时特惠','热款爆销','4K全高清','六核智能','14核4K','YUNS','YUNOS'],
        ['微信电视','4K超清','64位真4K','10核机芯','V字黑釉底座','4K清']
    ],
    [
        ['屏大影院', '周末', '新品特惠', '32吋电机', '智能网络'], 
        ['USB高清解', '芒果TV在线', '抢价', 'USB解码', '32英寸','10核','TCL品牌日'],
        ['不要赠品', '新品上市', '4K硬屏', '领100劵', '智能高清', '8月酷暑', '8月大促', '天猫定制'],
        ['智能操作系统','金色外观','三屏幕','客厅爆款','八核配置','限时优惠'],
        ['限时特惠','热款爆销','4K全高清','六核智能','14核4K','YUNS','YUNOS'],
        ['微信电视','4K超清','64位真4K','10核机芯','V字黑釉底座','4K清']
    ],
    [
        ['屏大影院', '周末', '新品特惠', '32吋电机', '智能网络'], 
        ['USB高清解', '芒果TV在线', '抢价', 'USB解码', '32英寸','10核','TCL品牌日'],
        ['不要赠品', '新品上市', '4K硬屏', '领100劵', '智能高清', '8月酷暑', '8月大促', '天猫定制'],
        ['智能操作系统','金色外观','三屏幕','客厅爆款','八核配置','限时优惠'],
        ['限时特惠','热款爆销','4K全高清','六核智能','14核4K','YUNS','YUNOS'],
        ['微信电视','4K超清','64位真4K','10核机芯','V字黑釉底座','4K清']
    ],
    [
        ['屏大影院', '周末', '新品特惠', '32吋电机', '智能网络'], 
        ['USB高清解', '芒果TV在线', '抢价', 'USB解码', '32英寸','10核','TCL品牌日'],
        ['不要赠品', '新品上市', '4K硬屏', '领100劵', '智能高清', '8月酷暑', '8月大促', '天猫定制'],
        ['智能操作系统','金色外观','三屏幕','客厅爆款','八核配置','限时优惠'],
        ['限时特惠','热款爆销','4K全高清','六核智能','14核4K','YUNS','YUNOS'],
        ['微信电视','4K超清','64位真4K','10核机芯','V字黑釉底座','4K清']
    ],
    [
        ['屏大影院', '周末', '新品特惠', '32吋电机', '智能网络'], 
        ['USB高清解', '芒果TV在线', '抢价', 'USB解码', '32英寸','10核','TCL品牌日'],
        ['不要赠品', '新品上市', '4K硬屏', '领100劵', '智能高清', '8月酷暑', '8月大促', '天猫定制'],
        ['智能操作系统','金色外观','三屏幕','客厅爆款','八核配置','限时优惠'],
        ['限时特惠','热款爆销','4K全高清','六核智能','14核4K','YUNS','YUNOS'],
        ['微信电视','4K超清','64位真4K','10核机芯','V字黑釉底座','4K清']
    ]
  ];   
  
  var cateProducts =  [
    {title: 'Sunglasses',
     products: [
       {imgNum: 1,
        description: "[热销] 好先生同款墨镜孙红雷偏光男士太阳镜韩明星",
        price: 97.50
       },
       {imgNum: 2,
        description: "[热销] 陌森太阳眼镜男女2016偏光定制驾驶近视",
        price: 518.70
       },
       {imgNum: 3,
        description: "[热销] 帕莎Prsr太阳镜女偏光镜潮范冰冰同款女",
        price: 624.00
       },
       {imgNum: 4,
        description: "[热销] 变色眼镜男女款半框太阳镜大框潮流防辐射防",
        price: 170.00
       },
       {imgNum: 5,
        description: "[热销] 新款男士偏光太阳镜日夜两用墨镜潮运动开车",
        price: 551.00
       },
     ]}, 
    {title: 'Car-Seats',
     products: [
       {imgNum: 6,
        description: "[热销] 新生儿婴儿提篮式安全座椅汽车用车载儿童安",
        price: 97.50
       },
       {imgNum: 7,
        description: "[热销] REEBABY汽车儿童安全座椅ISOFI",
        price: 518.70
       },
       {imgNum: 8,
        description: "[热销] REEBABY儿童安全座椅9个月-12岁",
        price: 624.00
       },
       {imgNum: 9,
        description: "[热销] 变色眼镜男女款半框太阳镜大框潮流防辐射防",
        price: 170.00
       },
       {imgNum: 10,
        description: "[热销] 新款男士偏光太阳镜日夜两用墨镜潮运动开车",
        price: 551.00
       },
     ]}
  ];
  
  var cartItems = [
    {
      imgNum: 1,
      description: "[热销] 好先生同款墨镜孙红雷偏光男士太阳镜韩明星",
      price: 97.50,
      quantity: 1
     },
     {imgNum: 2,
      description: "[热销] 陌森太阳眼镜男女2016偏光定制驾驶近视",
      price: 518.70,
      quantity: 1
     },
     {imgNum: 3,
      description: "[热销] 帕莎Prsr太阳镜女偏光镜潮范冰冰同款女",
      price: 624.00,
      quantity: 1
     }
  ];
  
  service.discount = 0.9;
  
  service.addItem = function(parentIndex, childIndex){
    var newItem = cateProducts[parentIndex].products[childIndex];
    var found = false;
    for(var i=0; i<cartItems.length; i++){
      if(cartItems[i].description == newItem.description){
        cartItems[i].quantity++;
        found = true;
        break;
      }
    }
    if(!found){
      newItem.quantity = 1;
      cartItems.push(newItem);
    }
  };
  
  service.getCateProducts = function(){
    return cateProducts;
  }
  
  service.getCartItems = function(){
    return cartItems;
  }
  
  service.addQuantity = function(index){
    cartItems[index].quantity++;
  };
  
 service.reduceQuantity = function(index){
    cartItems[index].quantity--;
  };
 service.removeQuantity = function(index){
    if(confirm("Are you sure to remove this item from cart?")){
      cartItems.splice(index, 1);
      return;
    }
  };
 
//  service.getQuantities = function(){
//     var totalNum = 0;
//    cartItems.forEach(function(item, index){
//      totalNum += parseInt(item.quantity);
//    });
//    return totalNum;
//  };
//  service.getAmount = function(){
//    var amount = 0;
//    cartItems.forEach(function(item, index){
//      amount += parseInt(item.price*item.quantity);
//    });
//    return amount;
//  };
})