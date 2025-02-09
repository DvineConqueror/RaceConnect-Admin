document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        {
            userName: 'John Doe',
            postTime: '2 hours ago',
            caption: 'This is the caption of the post.',
            imageUrl: '../RaceConnect-Admin/assets/posts-sample.jpg',
            likes: 120,
            dislikes: 5,
            comments: 30,
            reposts: 10
        },
        {
            userName: 'Jane Smith',
            postTime: '3 hours ago',
            caption: 'Another post caption.',
            imageUrl: '../RaceConnect-Admin/assets/posts-sample.jpg',
            likes: 90,
            dislikes: 2,
            comments: 15,
            reposts: 5
        },
        {
            userName: 'Jane Smith',
            postTime: '3 hours ago',
            caption: 'Another post caption.',
            imageUrl: '../RaceConnect-Admin/assets/posts-sample.jpg',
            likes: 90,
            dislikes: 2,
            comments: 15,
            reposts: 5
        },
        {
            userName: 'Jane Smith',
            postTime: '3 hours ago',
            caption: 'Another post caption.',
            imageUrl: '../RaceConnect-Admin/assets/posts-sample.jpg',
            likes: 90,
            dislikes: 2,
            comments: 15,
            reposts: 5
        },
        {
            userName: 'Jane Smith',
            postTime: '3 hours ago',
            caption: 'Another post caption.',
            imageUrl: '../RaceConnect-Admin/assets/posts-sample.jpg',
            likes: 90,
            dislikes: 2,
            comments: 15,
            reposts: 5
        },
        {
            userName: 'Jane Smith',
            postTime: '3 hours ago',
            caption: 'Another post caption.',
            imageUrl: '../RaceConnect-Admin/assets/posts-sample.jpg',
            likes: 90,
            dislikes: 2,
            comments: 15,
            reposts: 5
        }
        // Add more posts as needed
    ];

    const mainContent = document.getElementById('mainContent');

    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';

        postCard.innerHTML = `
            <div class="post-header">
                <div class="user-info">
                    <span class="user-name">${post.userName}</span>
                    <span class="post-time">${post.postTime}</span>
                </div>
                <div class="post-actions">
                    <button class="edit-btn"><box-icon name='edit' color="white"></box-icon></button>
                    <button class="unsee-btn"><box-icon type='solid' name='low-vision' color="white"></box-icon></button>
                    <button class="delete-btn"><box-icon type='solid' name='trash' color="white"></box-icon></button>
                </div>
            </div>
            <div class="post-caption">
                ${post.caption}
            </div>
            <div class="post-image">
                <img src="${post.imageUrl}" alt="Post Image">
            </div>
            <div class="post-interactions">
                <box-icon name='like'></box-icon><span class="likes">${post.likes}</span>
                <box-icon name='dislike'></box-icon><span class="dislikes">${post.dislikes}</span>
                <box-icon name='comment-detail'></box-icon><span class="comments">${post.comments}</span>
                <box-icon name='repost'></box-icon><span class="reposts">${post.reposts}</span>
            </div>
        `;

        mainContent.appendChild(postCard);
    });
});