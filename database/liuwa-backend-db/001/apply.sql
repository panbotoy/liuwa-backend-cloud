-- create table for member
CREATE TABLE member (id BIGINT NOT NULL AUTO_INCREMENT, 
                     email VARCHAR(100) NOT NULL, 
                     phone_number VARCHAR(30),
                     first_name VARCHAR(30) NOT NULL, 
                     last_name VARCHAR(30) NOT NULL, 
                     occupation VARCHAR(50),
                     profile_img VARCHAR(200),
                     address1 VARCHAR(100),
                     address2 VARCHAR(100),
                     address3 VARCHAR(100),
                     city VARCHAR(30),
                     state VARCHAR(30),
                     country VARCHAR(30),
                     zipcode VARCHAR(20),
                     created_at DATETIME NOT NULL,
                     updated_at DATETIME NOT NULL,
                     is_system_admin VARCHAR(1), -- 'Y' or 'N'
                     PRIMARY KEY (id)
);

-- create table for baby
CREATE TABLE baby (id BIGINT NOT NULL AUTO_INCREMENT, 
                   first_name VARCHAR(30) NOT NULL, 
                   last_name VARCHAR(30) NOT NULL, 
                   birthday DATETIME,
                   gender VARCHAR(1),
                   profile_img VARCHAR(200),
                   created_at DATETIME NOT NULL,
                   updated_at DATETIME NOT NULL,
                   PRIMARY KEY (id)
);

-- create table for member_baby
CREATE TABLE member_baby (member_id BIGINT NOT NULL, 
                          baby_id BIGINT NOT NULL,
                          relation VARCHAR(10) NOT NULL,
                          created_at DATETIME NOT NULL,
                          updated_at DATETIME NOT NULL
);

CREATE INDEX member_baby_i1 on member_baby(member_id);
ALTER TABLE `member_baby` ADD UNIQUE `unique_index`(`member_id`, `baby_id`);

-- create table for event
CREATE TABLE events (id BIGINT NOT NULL AUTO_INCREMENT, 
                    member_id BIGINT NOT NULL,  -- poster of the event
                    title VARCHAR(100) NOT NULL,
                    address1 VARCHAR(100),
                    address2 VARCHAR(100),
                    address3 VARCHAR(100),
                    city VARCHAR(30),
                    state VARCHAR(30),
                    country VARCHAR(30),
                    zipcode VARCHAR(20),
                    description TEXT NOT NULL,
                    images TEXT,   -- will be a list of comma separated image urls or tecent COS ids probably
                    wechat_group_link VARCHAR(2083), -- standard url max 2083
                    attendee_number INT,
                    need_approval CHAR,
                    event_type VARCHAR(10), -- can be 'CLASS', 'PARTY', 'DISCOUNT' etc.
                    min_age INT,
                    max_age INT,
                    event_state VARCHAR(20), -- can be 'DRAFT', 'PUBLISHED', 'CLOSED' etc.
                    start_at DATETIME NOT NULL,
                    end_at DATETIME,
                    enrollment_end_at DATETIME,
                    published_at DATETIME NOT NULL,
                    closed_at DATETIME NOT NULL,
                    created_at DATETIME NOT NULL,
                    updated_at DATETIME NOT NULL,
                    PRIMARY KEY (id)
);
CREATE INDEX events_i1 on events(member_id, event_state, event_type);
CREATE INDEX events_i2 on events(event_state, event_type);

-- create table for tag for events
CREATE TABLE tag (id BIGINT NOT NULL AUTO_INCREMENT, 
                  tag_text VARCHAR(30) NOT NULL, 
                  creator_id BIGINT NOT NULL,
                  created_at DATETIME NOT NULL,
                  updated_at DATETIME NOT NULL,
                  PRIMARY KEY (id)
);

-- create table for event_tags
CREATE TABLE event_tags (event_id BIGINT NOT NULL, 
                         tag_id BIGINT NOT NULL,
                         created_at DATETIME NOT NULL,
                         updated_at DATETIME NOT NULL
);
CREATE INDEX event_tags_i1 on event_tags(event_id);  -- lookup tags for event
CREATE INDEX event_tags_i2 on event_tags(tag_id);  -- look up event with tags
ALTER TABLE `event_tags` ADD UNIQUE `unique_index`(`event_id`, `tag_id`);

-- create table for apply_event
CREATE TABLE applications (event_id BIGINT NOT NULL, 
                           member_id BIGINT NOT NULL,
                           application_status VARCHAR(10), -- 'PENDING', 'APPROVED', 'REJECTED', 'WITHDRAWED', 'DELETED'
                           created_at DATETIME NOT NULL,
                           updated_at DATETIME NOT NULL
);
CREATE INDEX applications_i1 on applications(event_id, application_status);  -- lookup tags for event
CREATE INDEX applications_i2 on applications(member_id, application_status);  -- look up event with tags
ALTER TABLE `applications` ADD UNIQUE `unique_index`(`event_id`, `member_id`);


