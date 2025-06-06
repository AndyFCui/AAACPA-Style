// Logo Manager for Redmine Theme
(function($) {
    'use strict';

    // 初始化函数
    function initLogoManager() {
        // 检查是否在管理页面
        if ($('#settings').length === 0) return;

        // 创建 logo 上传区域
        var $logoSection = $('<div class="box tabular settings">' +
            '<h3>Logo Settings</h3>' +
            '<p>' +
            '<label for="custom_logo">Custom Logo</label>' +
            '<input type="file" id="custom_logo" name="custom_logo" accept="image/*">' +
            '<span class="help">Upload your custom logo (recommended size: 200x50px)</span>' +
            '</p>' +
            '<p>' +
            '<label>&nbsp;</label>' +
            '<input type="button" id="reset_logo" value="Reset to Default Logo">' +
            '</p>' +
            '</div>');

        // 添加到设置页面
        $('#settings .box:first').after($logoSection);

        // 处理 logo 上传
        $('#custom_logo').on('change', function(e) {
            var file = e.target.files[0];
            if (!file) return;

            var reader = new FileReader();
            reader.onload = function(e) {
                // 保存到 localStorage
                localStorage.setItem('customLogo', e.target.result);
                // 应用新的 logo
                applyCustomLogo(e.target.result);
            };
            reader.readAsDataURL(file);
        });

        // 处理重置按钮
        $('#reset_logo').on('click', function() {
            localStorage.removeItem('customLogo');
            applyCustomLogo(null);
        });

        // 页面加载时应用保存的 logo
        var savedLogo = localStorage.getItem('customLogo');
        if (savedLogo) {
            applyCustomLogo(savedLogo);
        }
    }

    // 应用自定义 logo
    function applyCustomLogo(logoUrl) {
        if (logoUrl) {
            document.documentElement.style.setProperty('--custom-logo-url', 'url("' + logoUrl + '")');
        } else {
            document.documentElement.style.removeProperty('--custom-logo-url');
        }
    }

    // 当 DOM 加载完成后初始化
    $(document).ready(initLogoManager);

})(jQuery); 