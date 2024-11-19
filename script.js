
document.getElementById('download-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const url = document.getElementById('url').value;
    const errorMessage = document.getElementById('error-message');
    const downloadLink = document.getElementById('download-link');
    const downloadButton = document.getElementById('download-button');

    // Clear previous error or download link
    errorMessage.textContent = '';
    downloadLink.style.display = 'none';

    // Validate URL
    if (!url || !url.includes('tiktok.com')) {
        errorMessage.textContent = 'URL TikTok tidak valid.';
        return;
    }

    try {
        // Call API to get video URL (ganti dengan API yang sesuai)
        const response = await fetch(`https://api.tiktok-download.xyz/api/v1/download?url=${encodeURIComponent(url)}`);
        const data = await response.json();

        if (data.status === 'success' && data.download_url) {
            downloadButton.href = data.download_url;
            downloadLink.style.display = 'block';
        } else {
            errorMessage.textContent = 'Gagal mengambil video. Coba lagi.';
        }
    } catch (error) {
        console.error(error);
        errorMessage.textContent = 'Terjadi kesalahan. Coba lagi nanti.';
    }
});
