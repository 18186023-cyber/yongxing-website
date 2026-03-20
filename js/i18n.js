/**
 * 语言切换功能
 * Language Switcher for Yongxing Website
 */

const i18n = {
    zh: {
        // 导航
        companyName: '潮州市潮安区江东西前溪永兴服装厂',
        navHome: '首页',
        navAbout: '关于我们',
        navProducts: '产品中心',
        navAdvantages: '企业优势',
        navContact: '联系我们',
        
        // 首页横幅
        heroTitle: '专业服装出口企业',
        heroSubtitle: '专注中东市场 · 品质值得信赖',
        heroDesc: '潮州市潮安区江东西前溪永兴服装厂，深耕服装行业多年，产品远销中东各国，以优质面料、精湛工艺赢得客户信赖。',
        btnViewProducts: '查看产品',
        btnContactUs: '联系我们',
        
        // 统计数据
        statYears: '年行业经验',
        statClients: '中东合作客户',
        statExports: '年出口件数',
        
        // 关于我们
        aboutTitle: '关于永兴',
        aboutSubtitle: '专业服装制造与出口，服务中东市场',
        aboutHeading: '专注中东市场的服装出口专家',
        aboutText1: '潮州市潮安区江东西前溪永兴服装厂位于中国广东省潮州市，是一家专业从事服装生产与出口的企业。我们深耕中东市场多年，深入了解当地消费者的需求与偏好，为客户提供符合中东市场特点的优质服装产品。',
        aboutText2: '我们拥有完善的生产设备、专业的技术团队和严格的质量管理体系，从面料采购到成品出货，每个环节都严格把控，确保产品质量稳定可靠。',
        featureEquipment: '现代化生产设备',
        featureQuality: '严格质量管控',
        featureDelivery: '快速交货周期',
        featureCustom: '定制化服务',
        altWorkshop: '生产车间',
        altWarehouse: '仓储中心',
        altPacking: '包装车间',
        
        // 产品中心
        productsTitle: '产品中心',
        productsSubtitle: '多样化产品线，满足中东市场需求',
        catAll: '全部产品',
        catMen: '男装系列',
        catWomen: '女装系列',
        catChildren: '童装系列',
        viewDetails: '查看详情',

        // 产品详情 - 女士印花睡衣
        prodWomenPajamas1: '女士印花睡衣',
        prodWomenPajamas1Desc: '柔软舒适，优雅印花设计',
        prodWomenPajamas2: '女士印花睡衣 - 款式2',
        prodWomenPajamas2Desc: '多色可选，居家首选',
        prodWomenPajamas3: '女士印花睡衣 - 款式3',
        prodWomenPajamas3Desc: '透气面料，四季皆宜',
        prodWomenPajamas4: '女士印花睡衣 - 款式4',
        prodWomenPajamas4Desc: '精致做工，品质保证',

        // 产品详情 - 阿拉伯长袍
        prodRobe1: '阿拉伯长袍',
        prodRobe1Desc: '传统设计，优质面料',
        prodRobe2: '阿拉伯长袍 - 款式2',
        prodRobe2Desc: '经典白色，透气舒适',
        prodRobe3: '阿拉伯长袍 - 款式3',
        prodRobe3Desc: '精美刺绣，品质保证',

        // 产品详情 - 阿富汗长裤
        prodPants1: '阿富汗长裤',
        prodPants1Desc: '宽松版型，舒适透气',
        prodPants2: '阿富汗长裤 - 款式2',
        prodPants2Desc: '多色可选，耐穿耐洗',
        prodPants3: '阿富汗长裤 - 款式3',
        prodPants3Desc: '适合中东气候',

        // 产品详情 - 阿拉伯短裤
        prodShorts1: '阿拉伯短裤',
        prodShorts1Desc: '轻便透气，居家休闲',
        prodShorts2: '阿拉伯短裤 - 款式2',
        prodShorts2Desc: '松紧腰设计，穿脱方便',

        // 产品详情 - 内衣套装
        prodUnderwear: '内衣套装',
        prodUnderwearDesc: '贴身舒适，品质面料',
        
        // 企业优势
        advantagesTitle: '企业优势',
        advantagesSubtitle: '选择永兴的六大理由',
        advTitle1: '中东市场专精',
        advDesc1: '多年深耕中东市场，深入了解当地文化与消费习惯，产品更贴合市场需求。',
        advTitle2: '品质保证',
        advDesc2: '严格的质量管理体系，从原料到成品全程把控，确保每件产品都符合出口标准。',
        advTitle3: '价格优势',
        advDesc3: '规模化生产，优化供应链管理，为客户提供具有竞争力的价格。',
        advTitle4: '快速交货',
        advDesc4: '高效的生产流程，灵活的排产计划，确保按时交付，满足客户紧急需求。',
        advTitle5: '定制服务',
        advDesc5: '支持来样定制、来料加工，根据客户需求提供个性化设计与生产服务。',
        advTitle6: '专业团队',
        advDesc6: '经验丰富的外贸团队，提供专业的售前咨询和售后服务，沟通无障碍。',
        
        // 出口展示
        exportTitle: '出口中东 · 品质见证',
        exportDesc: '我们的产品已出口至沙特阿拉伯、阿联酋、卡塔尔、科威特、阿曼等多个中东国家，深受当地客户好评。',
        altExportMap: '出口地区分布',
        countrySA: '沙特阿拉伯',
        countryAE: '阿联酋',
        countryQA: '卡塔尔',
        countryKW: '科威特',
        countryOM: '阿曼',
        
        // 联系我们
        contactTitle: '联系我们',
        contactSubtitle: '期待与您建立合作关系',
        labelCompany: '公司名称',
        companyFullName: '潮州市潮安区江东西前溪永兴服装厂',
        labelAddress: '工厂地址',
        companyAddress: '广东省潮州市潮安区江东镇西前溪村',
        labelPhone: '联系电话',
        labelEmail: '电子邮箱',
        labelWechat: '微信',
        wechatHint: '扫描二维码或搜索邮箱添加',
        formTitle: '在线咨询',
        placeholderName: '您的姓名',
        placeholderEmail: '电子邮箱',
        placeholderPhone: '联系电话',
        placeholderMessage: '咨询内容',
        btnSend: '发送咨询',
        
        // 页脚
        footerSlogan: '专业服装出口企业<br>服务中东市场',
        footerLinks: '快速链接',
        footerProducts: '产品系列',
        footerCustom: '定制服务',
        footerCopyright: '版权所有'
    },
    
    en: {
        // Navigation
        companyName: 'CHAOZHOU CHAOAN JIANGDONG XIQIANXI YONGXING GARMENTS FTY',
        navHome: 'Home',
        navAbout: 'About Us',
        navProducts: 'Products',
        navAdvantages: 'Why Choose Us',
        navContact: 'Contact Us',
        
        // Hero Section
        heroTitle: 'Professional Garment Export Enterprise',
        heroSubtitle: 'Focus on Middle East Market · Quality You Can Trust',
        heroDesc: 'Chaoan District Jiangdong Xiqianxi Yongxing Garment Factory, with years of experience in the garment industry, exports products to Middle Eastern countries, winning customer trust with quality fabrics and exquisite craftsmanship.',
        btnViewProducts: 'View Products',
        btnContactUs: 'Contact Us',
        
        // Statistics
        statYears: 'Years Experience',
        statClients: 'Middle East Clients',
        statExports: 'Annual Exports',
        
        // About Us
        aboutTitle: 'About Yongxing',
        aboutSubtitle: 'Professional Garment Manufacturing & Export, Serving the Middle East Market',
        aboutHeading: 'Garment Export Expert Focused on Middle East Market',
        aboutText1: 'Located in Chaoan District, Chaozhou City, Guangdong Province, China, Yongxing Garment Factory is a professional enterprise specializing in garment production and export. With years of deep cultivation in the Middle East market, we thoroughly understand local consumer needs and preferences, providing high-quality garment products tailored to Middle East market characteristics.',
        aboutText2: 'We possess complete production equipment, a professional technical team, and a strict quality management system. From fabric procurement to finished product delivery, every step is strictly controlled to ensure stable and reliable product quality.',
        featureEquipment: 'Modern Production Equipment',
        featureQuality: 'Strict Quality Control',
        featureDelivery: 'Fast Delivery Cycle',
        featureCustom: 'Customized Services',
        altWorkshop: 'Production Workshop',
        
        // Products
        productsTitle: 'Products',
        productsSubtitle: 'Diverse Product Line, Meeting Middle East Market Demands',
        catAll: 'All Products',
        catMen: "Men's Collection",
        catWomen: "Women's Collection",
        catChildren: "Children's Collection",
        viewDetails: 'View Details',

        // Product Details - Women's Pajamas
        prodWomenPajamas1: "Women's Printed Pajamas",
        prodWomenPajamas1Desc: 'Soft and comfortable with elegant print design',
        prodWomenPajamas2: "Women's Printed Pajamas - Style 2",
        prodWomenPajamas2Desc: 'Multiple colors available, perfect for home wear',
        prodWomenPajamas3: "Women's Printed Pajamas - Style 3",
        prodWomenPajamas3Desc: 'Breathable fabric, suitable for all seasons',
        prodWomenPajamas4: "Women's Printed Pajamas - Style 4",
        prodWomenPajamas4Desc: 'Exquisite craftsmanship, quality guaranteed',

        // Product Details - Arabic Robes
        prodRobe1: 'Arabic Thobe',
        prodRobe1Desc: 'Traditional design with premium fabric',
        prodRobe2: 'Arabic Thobe - Style 2',
        prodRobe2Desc: 'Classic white, breathable and comfortable',
        prodRobe3: 'Arabic Thobe - Style 3',
        prodRobe3Desc: 'Beautiful embroidery, quality guaranteed',

        // Product Details - Afghan Pants
        prodPants1: 'Afghan Pants',
        prodPants1Desc: 'Loose fit, comfortable and breathable',
        prodPants2: 'Afghan Pants - Style 2',
        prodPants2Desc: 'Multiple colors available, durable and washable',
        prodPants3: 'Afghan Pants - Style 3',
        prodPants3Desc: 'Suitable for Middle East climate',

        // Product Details - Arabic Shorts
        prodShorts1: 'Arabic Shorts',
        prodShorts1Desc: 'Lightweight and breathable, perfect for home leisure',
        prodShorts2: 'Arabic Shorts - Style 2',
        prodShorts2Desc: 'Elastic waist design, easy to wear',

        // Product Details - Underwear Set
        prodUnderwear: 'Underwear Set',
        prodUnderwearDesc: 'Comfortable fit with quality fabric',
        
        // Advantages
        advantagesTitle: 'Why Choose Us',
        advantagesSubtitle: 'Six Reasons to Choose YONGXING',
        advTitle1: 'Middle East Market Expertise',
        advDesc1: 'Years of deep cultivation in the Middle East market, thorough understanding of local culture and consumption habits, products better aligned with market demands.',
        advTitle2: 'Quality Assurance',
        advDesc2: 'Strict quality management system, full control from raw materials to finished products, ensuring every product meets export standards.',
        advTitle3: 'Price Advantage',
        advDesc3: 'Large-scale production, optimized supply chain management, providing customers with competitive prices.',
        advTitle4: 'Fast Delivery',
        advDesc4: 'Efficient production processes, flexible scheduling, ensuring on-time delivery to meet urgent customer needs.',
        advTitle5: 'Customization Services',
        advDesc5: 'Support sample-based customization and material processing, providing personalized design and production services according to customer needs.',
        advTitle6: 'Professional Team',
        advDesc6: 'Experienced foreign trade team, providing professional pre-sales consultation and after-sales service with seamless communication.',
        
        // Export Showcase
        exportTitle: 'Export to Middle East · Quality Witness',
        exportDesc: 'Our products have been exported to Saudi Arabia, UAE, Qatar, Kuwait, Oman and other Middle Eastern countries, highly praised by local customers.',
        altExportMap: 'Export Distribution Map',
        countrySA: 'Saudi Arabia',
        countryAE: 'UAE',
        countryQA: 'Qatar',
        countryKW: 'Kuwait',
        countryOM: 'Oman',
        
        // Contact
        contactTitle: 'Contact Us',
        contactSubtitle: 'Looking Forward to Establishing Partnership with You',
        labelCompany: 'Company Name',
        companyFullName: 'CHAOZHOU CHAOAN JIANGDONG XIQIANXI YONGXING GARMENTS FTY',
        labelAddress: 'Factory Address',
        companyAddress: 'Xiqianxi Village, Jiangdong Town, Chaoan District, Chaozhou City, Guangdong Province, China',
        labelPhone: 'Phone',
        labelEmail: 'Email',
        labelWechat: 'WeChat',
        wechatHint: 'Scan QR code or search email to add',
        formTitle: 'Online Inquiry',
        placeholderName: 'Your Name',
        placeholderEmail: 'Email Address',
        placeholderPhone: 'Phone Number',
        placeholderMessage: 'Your Message',
        btnSend: 'Send Inquiry',
        
        // Footer
        footerSlogan: 'Professional Garment Export Enterprise<br>CHAOAN JIANGDONG XIQIANXI YONGXING GARMENTS FTY',
        footerLinks: 'Quick Links',
        footerProducts: 'Product Series',
        footerCustom: 'Customization',
        footerCopyright: 'All Rights Reserved'
    }
};

// 当前语言
let currentLang = localStorage.getItem('yongxing-lang') || 'zh';

// 切换语言函数
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('yongxing-lang', lang);
    
    // 更新按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // 更新页面文本
    updatePageText();
    
    // 更新 HTML lang 属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    
    // 更新页面标题
    document.title = lang === 'zh' 
        ? '潮州市潮安区江东西前溪永兴服装厂 - 专业服装出口企业 | 中东地区优质供应商'
        : 'CHAOZHOU CHAOAN JIANGDONG XIQIANXI YONGXING GARMENTS FTY | Professional Garment Export';
}

// 更新页面文本
function updatePageText() {
    const texts = i18n[currentLang];
    
    // 更新带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (texts[key]) {
            // 如果包含 HTML 标签，使用 innerHTML
            if (texts[key].includes('<')) {
                el.innerHTML = texts[key];
            } else {
                el.textContent = texts[key];
            }
        }
    });
    
    // 更新带有 data-i18n-placeholder 属性的元素
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (texts[key]) {
            el.placeholder = texts[key];
        }
    });
    
    // 更新带有 data-i18n-alt 属性的元素
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.dataset.i18nAlt;
        if (texts[key]) {
            el.alt = texts[key];
        }
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 绑定语言切换按钮事件
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchLanguage(this.dataset.lang);
        });
    });
    
    // 初始化语言
    switchLanguage(currentLang);
});

// 导出供其他脚本使用
window.i18n = i18n;
window.switchLanguage = switchLanguage;
window.getCurrentLang = () => currentLang;
