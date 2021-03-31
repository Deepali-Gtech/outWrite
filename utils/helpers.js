module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    format_amount: (amount) => {
      // format large numbers with commas
      return parseInt(amount).toLocaleString();
    },
    get_storyview: () => {
    //   const renderStory = `/storyview`
        const storyview = `<main class="container container-fluid mt-5">
        <!-- Render the sub layout -->
        <div class="columns">
            <div class="column">
                <p class="bd-notification">Welcome</p>
                <div class="columns is-mobile">
                    <div class="column is-one-quarter">
                        <div class="menu">
                            <p class="menu-label">
                                User Poral
                            </p>
                            <ul class="menu-list">
                                <li><a>My Stories</a></li>
                                <li><a>Favorites</a></li>
                                <li><a>Drafts</a></li>
                                <li><a>Recommended</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="column is-three-quarters">
                        <div class="hero-body">
                            <p class="title">
                                {Story Title}
                            </p>
                            <p class="subtitle">
                                {Username}
                            </p>
                            <div class="card">
                                <div class="card-content">
                                    <div class="content">
                                        <div class="control">
                                            <textarea class="textarea" readonly>{{quotesData.[0].description}}</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>`
      // Return a random emoji
        return storyview;
    },
  };
  