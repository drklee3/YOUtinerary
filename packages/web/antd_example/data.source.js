import React from "react"
export const Nav30DataSource = {
  wrapper: { className: "header3 home-page-wrapper jzih1dpqqrg-editor_css" },
  page: { className: "home-page" },
  logo: {
    className: "header3-logo jzjgnya1gmn-editor_css",
    children:
      "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-J8NSLj9rbsAAAAAAAAAAABkARQnAQ",
  },
  Menu: {
    className: "header3-menu",
    children: [
      {
        name: "item1",
        className: "header3-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <>
                  <p>订订群</p>
                </>
              ),
              name: "text",
            },
          ],
        },
        subItem: [
          {
            className: "item-sub",
            children: {
              className: "item-sub-item jzj8295azrs-editor_css",
              children: [
                {
                  name: "image0",
                  className: "item-image jzj81c9wabh-editor_css",
                  children:
                    "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*4_S6ToPfj-QAAAAAAAAAAABkARQnAQ",
                },
              ],
            },
            name: "sub~jzj8hceysgj",
          },
        ],
      },
      {
        name: "item2",
        className: "header3-item",
        children: {
          href: "#",
          children: [
            {
              children: (
                <>
                  <p>帮助中心</p>
                </>
              ),
              name: "text",
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: "header3-mobile-menu" },
}
export const Banner50DataSource = {
  wrapper: { className: "home-page-wrapper banner5" },
  page: { className: "home-page banner5-page" },
  childWrapper: {
    className: "banner5-title-wrapper",
    children: [
      { name: "title", children: "产品名", className: "banner5-title" },
      {
        name: "explain",
        className: "banner5-explain",
        children: "产品标语介绍",
      },
      {
        name: "content",
        className: "banner5-content",
        children: "产品的详细说明，如是什么东西之类的文字",
      },
      {
        name: "button",
        className: "banner5-button-wrapper",
        children: {
          href: "#",
          className: "banner5-button",
          type: "primary",
          children: "开始使用",
        },
      },
    ],
  },
  image: {
    className: "banner5-image",
    children:
      "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*-wAhRYnWQscAAAAAAAAAAABkARQnAQ",
  },
}
export const Feature60DataSource = {
  wrapper: { className: "home-page-wrapper feature6-wrapper" },
  OverPack: { className: "home-page feature6", playScale: 0.3 },
  Carousel: {
    className: "feature6-content",
    dots: false,
    wrapper: { className: "feature6-content-wrapper" },
    titleWrapper: {
      className: "feature6-title-wrapper",
      barWrapper: {
        className: "feature6-title-bar-wrapper",
        children: { className: "feature6-title-bar" },
      },
      title: { className: "feature6-title" },
    },
    children: [
      {
        title: { className: "feature6-title-text", children: "服务指标" },
        className: "feature6-item",
        name: "block0",
        children: [
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child0",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "万" },
              toText: true,
              children: "116",
            },
            children: { className: "feature6-text", children: "模型数据" },
          },
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child1",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "亿" },
              toText: true,
              children: "1.17",
            },
            children: { className: "feature6-text", children: "模型迭代数量" },
          },
          {
            md: 8,
            xs: 24,
            className: "feature6-number-wrapper",
            name: "child2",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "亿" },
              toText: true,
              children: "2.10",
            },
            children: { className: "feature6-text", children: "训练样本数量" },
          },
        ],
      },
      {
        title: { className: "feature6-title-text", children: "服务指标" },
        className: "feature6-item",
        name: "block1",
        children: [
          {
            md: 8,
            xs: 24,
            name: "child0",
            className: "feature6-number-wrapper",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "万" },
              toText: true,
              children: "116",
            },
            children: { className: "feature6-text", children: "模型数据" },
          },
          {
            md: 8,
            xs: 24,
            name: "child1",
            className: "feature6-number-wrapper",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "亿" },
              toText: true,
              children: "1.17",
            },
            children: { className: "feature6-text", children: "模型迭代数量" },
          },
          {
            md: 8,
            xs: 24,
            name: "child2",
            className: "feature6-number-wrapper",
            number: {
              className: "feature6-number",
              unit: { className: "feature6-unit", children: "亿" },
              toText: true,
              children: "2.10",
            },
            children: { className: "feature6-text", children: "训练样本数量" },
          },
        ],
      },
    ],
  },
}
export const Feature70DataSource = {
  wrapper: { className: "home-page-wrapper feature7-wrapper" },
  page: { className: "home-page feature7" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "feature7-title-wrapper",
    children: [
      {
        name: "title",
        className: "feature7-title-h1",
        children: "图像在线服务",
      },
      {
        name: "content",
        className: "feature7-title-content",
        children: "你可以直接快速接入图像能力",
      },
    ],
  },
  blockWrapper: {
    className: "feature7-block-wrapper",
    gutter: 24,
    children: [
      {
        md: 6,
        xs: 24,
        name: "block0",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children:
                "https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: "身份证",
            },
            {
              name: "content",
              className: "feature7-block-content",
              children: "识别身份证正反面姓名、身份证号、发证机关等相关信息",
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block1",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children:
                "https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: "身份证",
            },
            {
              name: "content",
              className: "feature7-block-content",
              children: "识别身份证正反面姓名、身份证号、发证机关等相关信息",
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block2",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children:
                "https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: "身份证",
            },
            {
              name: "content",
              className: "feature7-block-content",
              children: "识别身份证正反面姓名、身份证号、发证机关等相关信息",
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block3",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children:
                "https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: "身份证",
            },
            {
              name: "content",
              className: "feature7-block-content",
              children: "识别身份证正反面姓名、身份证号、发证机关等相关信息",
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block4",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children:
                "https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: "身份证",
            },
            {
              name: "content",
              className: "feature7-block-content",
              children: "识别身份证正反面姓名、身份证号、发证机关等相关信息",
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block5",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children:
                "https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: "身份证",
            },
            {
              name: "content",
              className: "feature7-block-content",
              children: "识别身份证正反面姓名、身份证号、发证机关等相关信息",
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block6",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children:
                "https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: "身份证",
            },
            {
              name: "content",
              className: "feature7-block-content",
              children: "识别身份证正反面姓名、身份证号、发证机关等相关信息",
            },
          ],
        },
      },
      {
        md: 6,
        xs: 24,
        name: "block7",
        className: "feature7-block",
        children: {
          className: "feature7-block-group",
          children: [
            {
              name: "image",
              className: "feature7-block-image",
              children:
                "https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg",
            },
            {
              name: "title",
              className: "feature7-block-title",
              children: "身份证",
            },
            {
              name: "content",
              className: "feature7-block-content",
              children: "识别身份证正反面姓名、身份证号、发证机关等相关信息",
            },
          ],
        },
      },
    ],
  },
}
export const Feature00DataSource = {
  wrapper: { className: "home-page-wrapper content0-wrapper" },
  page: { className: "home-page content0" },
  OverPack: { playScale: 0.3, className: "" },
  titleWrapper: {
    className: "title-wrapper",
    children: [{ name: "title", children: "产品与服务" }],
  },
  childWrapper: {
    className: "content0-block-wrapper",
    children: [
      {
        name: "block0",
        className: "jzjn8afnsxb-editor_css content0-block",
        md: 6,
        xs: 24,
        children: {
          className: "content0-block-item jzjgrrupf2c-editor_css",
          children: [
            {
              name: "image",
              className: "content0-block-icon jzjgrlz134-editor_css",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ",
            },
            {
              name: "title",
              className: "content0-block-title jzj8xt5kgv7-editor_css",
              children: "一站式业务接入",
            },
            {
              name: "content",
              children: "支付、结算、核算接入产品效率翻四倍",
              className: "jzj8z9sya9-editor_css",
            },
          ],
        },
      },
      {
        name: "block1",
        className: "content0-block",
        md: 6,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon jzjncn210ql-editor_css",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ",
            },
            {
              name: "title",
              className: "content0-block-title jzjne54fwqm-editor_css",
              children: "一站式事中风险监控",
            },
            {
              name: "content",
              children: "在所有需求配置环节事前风险控制和质量控制能力",
            },
          ],
        },
      },
      {
        name: "block2",
        className: "content0-block",
        md: 6,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon jzjndq0dueg-editor_css",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ",
            },
            {
              name: "title",
              className: "content0-block-title jzjne24af8c-editor_css",
              children: "一站式数据运营",
            },
            {
              name: "content",
              children: "沉淀产品接入效率和运营小二工作效率数据",
            },
          ],
        },
      },
      {
        name: "block~jzjn87bmyc7",
        className: "content0-block",
        md: 6,
        xs: 24,
        children: {
          className: "content0-block-item",
          children: [
            {
              name: "image",
              className: "content0-block-icon jzjndsyw8sf-editor_css",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*CTp8T7RT-VkAAAAAAAAAAABkARQnAQ",
            },
            {
              name: "title",
              className: "content0-block-title jzjndw5oerk-editor_css",
              children: "一站式数据运营",
            },
            {
              name: "content",
              children: "沉淀产品接入效率和运营小二工作效率数据",
            },
          ],
        },
      },
    ],
  },
}
export const Feature80DataSource = {
  wrapper: { className: "home-page-wrapper feature8-wrapper" },
  page: { className: "home-page feature8" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "feature8-title-wrapper",
    children: [
      { name: "title", className: "feature8-title-h1", children: "使用流程" },
      {
        name: "content",
        className: "feature8-title-content",
        children: "流程简单清晰，快速响应需求",
      },
    ],
  },
  childWrapper: {
    className: "feature8-button-wrapper",
    children: [
      {
        name: "button",
        className: "feature8-button",
        children: { href: "#", children: "立即体验" },
      },
    ],
  },
  Carousel: {
    dots: false,
    className: "feature8-carousel",
    wrapper: { className: "feature8-block-wrapper" },
    children: {
      className: "feature8-block",
      titleWrapper: {
        className: "feature8-carousel-title-wrapper",
        title: { className: "feature8-carousel-title" },
      },
      children: [
        {
          name: "block0",
          className: "feature8-block-row",
          gutter: 120,
          title: {
            className: "feature8-carousel-title-block",
            children: "平台自主训练流程",
          },
          children: [
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child0",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "需求沟通",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children: "沟通业务需求，对接人：诚凡、芸彩",
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child1",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "需求沟通",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children:
                      "沟通业务需求，对接人：诚凡、芸彩沟通业务需求，对接人：诚凡、芸彩",
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child2",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "需求沟通",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children:
                      "沟通业务需求，对接人：诚凡、芸彩沟通业务需求，对接人：诚凡、芸彩",
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child3",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "需求沟通",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children:
                      "沟通业务需求，对接人：诚凡、芸彩沟通业务需求，对接人：诚凡、芸彩",
                  },
                ],
              },
            },
          ],
        },
        {
          name: "block1",
          className: "feature8-block-row",
          gutter: 120,
          title: {
            children: "平台自主训练流程",
            className: "feature8-carousel-title-block",
          },
          children: [
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child0",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "需求沟通",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children: "沟通业务需求，对接人：诚凡、芸彩",
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child1",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "需求沟通",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children:
                      "沟通业务需求，对接人：诚凡、芸彩沟通业务需求，对接人：诚凡、芸彩",
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child2",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "需求沟通",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children:
                      "沟通业务需求，对接人：诚凡、芸彩沟通业务需求，对接人：诚凡、芸彩",
                  },
                ],
              },
            },
            {
              className: "feature8-block-col",
              md: 6,
              xs: 24,
              name: "child3",
              arrow: {
                className: "feature8-block-arrow",
                children:
                  "https://gw.alipayobjects.com/zos/basement_prod/167bee48-fbc0-436a-ba9e-c116b4044293.svg",
              },
              children: {
                className: "feature8-block-child",
                children: [
                  {
                    name: "image",
                    className: "feature8-block-image",
                    children:
                      "https://gw.alipayobjects.com/zos/basement_prod/d8933673-1463-438a-ac43-1a8f193ebf34.svg",
                  },
                  {
                    name: "title",
                    className: "feature8-block-title",
                    children: "需求沟通",
                  },
                  {
                    name: "content",
                    className: "feature8-block-content",
                    children:
                      "沟通业务需求，对接人：诚凡、芸彩沟通业务需求，对接人：诚凡、芸彩",
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
}
export const Footer10DataSource = {
  wrapper: { className: "home-page-wrapper footer1-wrapper" },
  OverPack: { className: "footer1", playScale: 0.2 },
  block: {
    className: "home-page",
    gutter: 0,
    children: [
      {
        name: "block0",
        xs: 24,
        md: 8,
        className: "block",
        title: {
          className: "logo jzl0qcpyjra-editor_css",
          children:
            "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*GzZ-QqkpH4AAAAAAAAAAAABkARQnAQ",
        },
        childWrapper: {
          className: "slogan",
          children: [
            {
              name: "content0",
              children: (
                <>
                  <p>蚂蚁金服计算机视觉平台</p>
                </>
              ),
            },
          ],
        },
      },
      {
        name: "block2",
        xs: 24,
        md: 8,
        className: "block",
        title: {
          children: (
            <>
              <p>联系我们</p>
            </>
          ),
        },
        childWrapper: {
          children: [
            {
              name: "image~jzl0tcm4f1d",
              className: "",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*NoENTI5uyn4AAAAAAAAAAABkARQnAQ",
            },
            {
              href: "#",
              name: "link0",
              children: (
                <>
                  <p>图鹰对接答疑钉钉群</p>
                </>
              ),
              className: "jzl0u1bko6-editor_css",
            },
            { href: "#", name: "link1", children: "联系我们" },
          ],
        },
      },
      {
        name: "block3",
        xs: 24,
        md: 8,
        className: "block",
        title: { children: "资源" },
        childWrapper: {
          children: [
            { href: "#", name: "link0", children: "Ant Design" },
            { href: "#", name: "link1", children: "Ant Motion" },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: "copyright-wrapper" },
  copyrightPage: { className: "home-page" },
  copyright: {
    className: "copyright",
    children: (
      <>
        <a href="http://abc.alipay.com">隐私权政策</a>&nbsp; &nbsp; &nbsp;
        |&nbsp; &nbsp; &nbsp; <a href="http://abc.alipay.com">权益保障承诺书</a>
        &nbsp; &nbsp; &nbsp;&nbsp;ICP证:浙B2-20100257&nbsp; &nbsp;
        &nbsp;&nbsp;Copyright © 2019 蚂蚁金融服务集团
        <br />
      </>
    ),
  },
}
