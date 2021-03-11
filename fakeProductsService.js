var products = [
    {
      _id: "1",
      productName: "PS5",
      category: 'Console PS',
      numberInStock: 10,
      imgUrl: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/5997245/extra_large/1455424b46b04adbf2c8a453f25573e4.jpg',
      sum:0,
      liked: false,
      price: 2800
    },
    {
        _id: "2",
        productName: "PS4",
        category: 'Console PS',
        numberInStock: 10,
        imgUrl: 'https://vgs.co.il/wp-content/uploads/2016/11/PS4-PRO-CONSOLE.jpg',
        sum:0,
        liked: false,
        price: 1100
      },
      {
        _id: "3",
        productName: "PS3",
        category: 'Console PS',
        numberInStock: 10,
        imgUrl: 'https://img.zap.co.il/pics/new/308201593115c.gif',
        sum:0,
        liked: false,
        price: 700
      },//______________________________________________________
      {
          _id: "4",
          productName: "FIFA 21",
          category: 'Games (PS4)',
          numberInStock:3,
          imgUrl: 'https://ofekpc.co.il/images/thumbs/0004046_fifa-21-ps5-21-5_510.jpeg',
          sum:0,
          liked: false,
          price: 169.90
        },
        {
          _id: "5",
          productName: "God Of War",
          category: 'Games (PS4)',
          numberInStock: 4,
          imgUrl: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/6273852/large/2ace509d77a9ab6db149bc7edd45fadf.jpg',
          sum:0,
          liked: false,
          price: 169.90
        },
        {
            _id: "6",
            productName: "Call Of Duty War Zone",
            category: 'Games (kroos Play)',
            numberInStock: 10,
            imgUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f2f00be-82c7-467d-9ceb-170c4b00ec4e/ddsajsw-d1199ea0-bcc2-493f-b73c-8f30484d8bdf.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvOWYyZjAwYmUtODJjNy00NjdkLTljZWItMTcwYzRiMDBlYzRlXC9kZHNhanN3LWQxMTk5ZWEwLWJjYzItNDkzZi1iNzNjLThmMzA0ODRkOGJkZi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.hxUXVwdTVvDdDisyAO-x_kuTIWIRCV1eCXVJjW6A4Do',
            sum:0,
            liked: false,
            price: 169.90
          },//______________________________________________________
          {
            _id: "7",
            productName: "Controller PS5",
            category: 'Accessories',
            numberInStock: 10,
            imgUrl: 'https://konimboimages.s3.amazonaws.com/system/photos/6153419/large/880497e4af81b0b196d76970f1ae8ad9.jpg',
            sum:0,
            liked: false,
            price: 350
          },
          {
              _id: "8",
              productName: "headphones",
              category: 'Accessories',
              numberInStock: 10,
              imgUrl: 'https://vgs.co.il/wp-content/uploads/2015/12/sonywirelessheadset2.0.jpg',
              sum:0,
              liked: false,
              price: 499.90
            },
            {
              _id: "9",
              productName: "Keyboard",
              category: 'Accessories',
              numberInStock: 10,
              imgUrl: 'https://www.headsound.co.il/images/itempics/193429_02112020125855.jpg',
              sum:0,
              liked: false,
              price: 190
            },//______________________________________________________
            {
                _id: "10",
                productName: "Apple IPhone 12 Pro Max",
                category: 'Cellular',
                numberInStock: 10,
                imgUrl: 'https://www.kickmobiles.com/images/thumbs/0013868_apple-iphone-12-pro-max_808.jpeg',
                sum:0,
                liked: false,
                price: 6300
              },
              {
                _id: "11",
                productName: "Samsung Galaxy Note20 Ultra 5G SM-N9860",
                category: 'Cellular',
                numberInStock: 10,
                imgUrl: 'https://img.router-switch.com/media/customoptions/74/1/1/samsung-galaxy-note20-ultra-5g-black.jpg',
                sum:0,
                liked: false,
                price: 2600
              },
              {
                  _id: "12",
                  productName: "OnePlus 7T Pro",
                  category: 'Cellular',
                  numberInStock: 10,
                  imgUrl: 'https://static.digit.in/default/2cb740112aaabdf34d18e326fdb755d625127695.png?tr=n-product_detail_leader_thumb',
                  sum:0,
                  liked: false,
                  price: 2050
              }
  ];
  
  export function getProducts() {
    return products;
  }
  
  export function getProduct(id) {
    return products.find(m => m._id === id);
  }
  
 
  
  