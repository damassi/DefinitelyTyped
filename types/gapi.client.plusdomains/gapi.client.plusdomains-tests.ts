/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
 * This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
 * In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
 **/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('plusdomains', 'v1', () => {
        /** now we can use gapi.client.plusdomains */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View your circles and the people and pages in them */
            'https://www.googleapis.com/auth/plus.circles.read',
            /**
             * Manage your circles and add people and pages. People and pages you add to your circles will be notified. Others may see this information publicly.
             * People you add to circles can use Hangouts with you.
             */
            'https://www.googleapis.com/auth/plus.circles.write',
            /** Know the list of people in your circles, your age range, and language */
            'https://www.googleapis.com/auth/plus.login',
            /** Know who you are on Google */
            'https://www.googleapis.com/auth/plus.me',
            /** Send your photos and videos to Google+ */
            'https://www.googleapis.com/auth/plus.media.upload',
            /** View your own Google+ profile and profiles visible to you */
            'https://www.googleapis.com/auth/plus.profiles.read',
            /** View your Google+ posts, comments, and stream */
            'https://www.googleapis.com/auth/plus.stream.read',
            /** Manage your Google+ posts, comments, and stream */
            'https://www.googleapis.com/auth/plus.stream.write',
            /** View your email address */
            'https://www.googleapis.com/auth/userinfo.email',
            /** View your basic profile info */
            'https://www.googleapis.com/auth/userinfo.profile',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        /** Get an activity. */
        await gapi.client.activities.get({
            activityId: 'activityId',
        });
        /** Create a new activity for the authenticated user. */
        await gapi.client.activities.insert({
            preview: true,
            userId: 'userId',
        });
        /** List all of the activities in the specified collection for a particular user. */
        await gapi.client.activities.list({
            collection: 'collection',
            maxResults: 2,
            pageToken: 'pageToken',
            userId: 'userId',
        });
        /** List all of the audiences to which a user can share. */
        await gapi.client.audiences.list({
            maxResults: 1,
            pageToken: 'pageToken',
            userId: 'userId',
        });
        /** Add a person to a circle. Google+ limits certain circle operations, including the number of circle adds. Learn More. */
        await gapi.client.circles.addPeople({
            circleId: 'circleId',
            email: 'email',
            userId: 'userId',
        });
        /** Get a circle. */
        await gapi.client.circles.get({
            circleId: 'circleId',
        });
        /** Create a new circle for the authenticated user. */
        await gapi.client.circles.insert({
            userId: 'userId',
        });
        /** List all of the circles for a user. */
        await gapi.client.circles.list({
            maxResults: 1,
            pageToken: 'pageToken',
            userId: 'userId',
        });
        /** Update a circle's description. This method supports patch semantics. */
        await gapi.client.circles.patch({
            circleId: 'circleId',
        });
        /** Delete a circle. */
        await gapi.client.circles.remove({
            circleId: 'circleId',
        });
        /** Remove a person from a circle. */
        await gapi.client.circles.removePeople({
            circleId: 'circleId',
            email: 'email',
            userId: 'userId',
        });
        /** Update a circle's description. */
        await gapi.client.circles.update({
            circleId: 'circleId',
        });
        /** Get a comment. */
        await gapi.client.comments.get({
            commentId: 'commentId',
        });
        /** Create a new comment in reply to an activity. */
        await gapi.client.comments.insert({
            activityId: 'activityId',
        });
        /** List all of the comments for an activity. */
        await gapi.client.comments.list({
            activityId: 'activityId',
            maxResults: 2,
            pageToken: 'pageToken',
            sortOrder: 'sortOrder',
        });
        /**
         * Add a new media item to an album. The current upload size limitations are 36MB for a photo and 1GB for a video. Uploads do not count against quota if
         * photos are less than 2048 pixels on their longest side or videos are less than 15 minutes in length.
         */
        await gapi.client.media.insert({
            collection: 'collection',
            userId: 'userId',
        });
        /** Get a person's profile. */
        await gapi.client.people.get({
            userId: 'userId',
        });
        /** List all of the people in the specified collection. */
        await gapi.client.people.list({
            collection: 'collection',
            maxResults: 2,
            orderBy: 'orderBy',
            pageToken: 'pageToken',
            userId: 'userId',
        });
        /** List all of the people in the specified collection for a particular activity. */
        await gapi.client.people.listByActivity({
            activityId: 'activityId',
            collection: 'collection',
            maxResults: 3,
            pageToken: 'pageToken',
        });
        /** List all of the people who are members of a circle. */
        await gapi.client.people.listByCircle({
            circleId: 'circleId',
            maxResults: 2,
            pageToken: 'pageToken',
        });
    }
});
