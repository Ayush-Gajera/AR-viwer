// AR Bowl Viewer - Client-Side Functionality

document.addEventListener('DOMContentLoaded', () => {
    const modelViewer = document.getElementById('bowl-viewer');
    const arButton = document.getElementById('ar-button');

    // Device Detection
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isAndroid = /Android/.test(navigator.userAgent);
    const isMobile = isIOS || isAndroid;

    // Update UI based on device
    if (!isMobile) {
        updateForDesktop();
    }

    // Model Viewer Event Listeners
    modelViewer.addEventListener('load', () => {
        console.log('✅ 3D Model loaded successfully');
        showNotification('3D Model loaded! Click AR button to view in your space.', 'success');
    });

    modelViewer.addEventListener('error', (event) => {
        console.error('❌ Error loading 3D model:', event);
        const errorDetail = event.detail || {};
        let errorMsg = 'Error loading 3D model. ';

        if (errorDetail.type === 'loadfailure') {
            errorMsg += 'File not found or invalid format. Check console for details.';
        } else {
            errorMsg += 'Please refresh the page and try again.';
        }

        showNotification(errorMsg, 'error');
        console.log('💡 Tip: Make sure your USDZ/GLB file path is correct and accessible');
    });

    modelViewer.addEventListener('ar-status', (event) => {
        const status = event.detail.status;
        console.log('AR Status:', status);

        if (status === 'session-started') {
            console.log('🎯 AR session started');
        } else if (status === 'not-presenting') {
            console.log('👁️ AR session ended');
        }
    });

    // AR Button Click Handler
    if (arButton) {
        arButton.addEventListener('click', () => {
            if (isMobile) {
                console.log('📱 AR button clicked - Opening AR view');

                // Model-viewer handles AR activation automatically
                // Just provide visual feedback
                arButton.style.transform = 'translateX(-50%) scale(0.95)';
                setTimeout(() => {
                    arButton.style.transform = 'translateX(-50%) scale(1)';
                }, 200);
            } else {
                showNotification('AR is only available on mobile devices with AR support', 'info');
            }
        });
    }

    // Update UI for Desktop Users
    function updateForDesktop() {
        const statusBadge = document.querySelector('.status-badge span:last-child');
        if (statusBadge) {
            statusBadge.textContent = '3D Viewer Mode';
        }

        if (arButton) {
            arButton.innerHTML = `
                <span class="ar-icon">💻</span>
                <span class="ar-text">AR Not Available on Desktop</span>
            `;
            arButton.style.cursor = 'not-allowed';
            arButton.style.opacity = '0.6';
        }

        // Add info message
        const infoMessage = document.createElement('div');
        infoMessage.className = 'desktop-info';
        infoMessage.style.cssText = `
            margin-top: 1rem;
            padding: 1rem;
            background: rgba(245, 87, 108, 0.1);
            border: 1px solid rgba(245, 87, 108, 0.3);
            border-radius: 12px;
            text-align: center;
            color: rgba(255, 255, 255, 0.8);
        `;
        infoMessage.innerHTML = `
            <strong>ℹ️ Desktop Mode</strong><br>
            <small>Open this page on your iPhone or Android device to use AR features</small>
        `;

        const modelInfo = document.querySelector('.model-info');
        if (modelInfo && modelInfo.parentNode) {
            modelInfo.parentNode.insertBefore(infoMessage, modelInfo.nextSibling);
        }
    }

    // Notification System
    function showNotification(message, type = 'info') {
        // Remove existing notification
        const existing = document.querySelector('.notification');
        if (existing) {
            existing.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Styles
        const colors = {
            success: 'rgba(79, 172, 254, 0.9)',
            error: 'rgba(245, 87, 108, 0.9)',
            info: 'rgba(102, 126, 234, 0.9)'
        };

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${colors[type] || colors.info};
            color: white;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            max-width: 350px;
            font-size: 0.9rem;
            animation: slideInRight 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        // Auto remove after 4 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Camera Controls Info
    let hasInteracted = false;
    modelViewer.addEventListener('camera-change', () => {
        if (!hasInteracted) {
            hasInteracted = true;
            console.log('🎮 User interacted with 3D model');
        }
    });

    // Performance Monitoring (optional)
    if (window.performance && window.performance.memory) {
        console.log('📊 Memory Usage:', {
            used: Math.round(performance.memory.usedJSHeapSize / 1048576) + ' MB',
            total: Math.round(performance.memory.totalJSHeapSize / 1048576) + ' MB'
        });
    }

    // Log device info for debugging
    console.log('🔍 Device Info:', {
        isIOS,
        isAndroid,
        isMobile,
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        arSupported: 'xr' in navigator
    });
});

// Service Worker Registration (optional - for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment below to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('✅ Service Worker registered'))
        //     .catch(err => console.log('❌ Service Worker registration failed:', err));
    });
}
