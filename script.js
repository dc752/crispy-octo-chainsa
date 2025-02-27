// 添加导航点击事件  
document.querySelectorAll('nav ul li a').forEach(item => {  
    item.addEventListener('click', function() {  
        // 隐藏所有文章内容  
        document.querySelectorAll('article').forEach(article => {  
            article.style.display = 'none';  
        });  
        
        // 显示点击的文章内容  
        const targetId = this.getAttribute('href');  
        const targetArticle = document.querySelector(targetId);  
        targetArticle.style.display = 'block';  
    });  
});  

// 初始化显示第一个文章  
document.querySelector('#taxi').style.display = 'block';  

// 增加轮播图片的交互效果  
document.querySelectorAll('.vehicle-image').forEach(vehicleImage => {  
    vehicleImage.addEventListener('mouseover', function() {  
        this.style.transform = 'scale(1.05)';  
        this.style.transition = 'all 0.3s ease';  
    });  
    
    vehicleImage.addEventListener('mouseout', function() {  
        this.style.transform = 'scale(1)';  
    });  
});