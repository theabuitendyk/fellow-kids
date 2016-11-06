# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

# Users

thea = User.create(name: 'Thea', username: 'thea', birth_year: 1994)
les = User.create(name: 'Les', username: 'les', birth_year: 1982)
galina = User.create(name: 'Galina', username: 'galina', birth_year: 1989)

owen = User.create(name: 'Owen', username: 'owen', birth_year: 1997)
timmy = User.create(name: 'Timmy', username: 'timmy', birth_year: 2002)
tiffany = User.create(name: 'Tiffany', username: 'tiffany', birth_year: 2002)
grandpa_joe = User.create(name: 'Grandpa Joe', username: 'grandpa_joe', birth_year: 1943)

# Conversations

convo1 = Conversation.create

created_time = Time.zone.now

Message.create(user: thea, created_at: created_time, updated_at: created_time, conversation: convo1, original_type: :old, old_translation: 'sorry about that, talk to you later')
created_time += 1.second
Message.create(user: owen, created_at: created_time, updated_at: created_time, conversation: convo1, original_type: :youth, youth_translation: 'you should be, that was hella whack')
created_time += 1.second
Message.create(user: owen, created_at: created_time, updated_at: created_time, conversation: convo1, original_type: :youth, youth_translation: 'we\'ll figure it out tomorrow')
created_time += 1.second
Message.create(user: thea, created_at: created_time, updated_at: created_time, conversation: convo1, original_type: :old, old_translation: 'text you?')
created_time += 1.second
Message.create(user: owen, created_at: created_time, updated_at: created_time, conversation: convo1, original_type: :youth, youth_translation: 'yas')
created_time += 1.second
Message.create(user: thea, created_at: created_time, updated_at: created_time, conversation: convo1, original_type: :old, old_translation: 'ok')
created_time += 1.second

convo2 = Conversation.create

Message.create(user: grandpa_joe, created_at: created_time, updated_at: created_time, conversation: convo2, original_type: :old, old_translation: 'Are you cool?')
created_time += 1.second
Message.create(user: timmy, created_at: created_time, updated_at: created_time, conversation: convo2, original_type: :youth, youth_translation: 'i am hyphie af')
created_time += 1.second
Message.create(user: grandpa_joe, created_at: created_time, updated_at: created_time, conversation: convo2, original_type: :old, old_translation: 'Timothy!')
created_time += 1.second
Message.create(user: grandpa_joe, created_at: created_time, updated_at: created_time, conversation: convo2, original_type: :old, old_translation: 'Language!!!')
created_time += 1.second
Message.create(user: timmy, created_at: created_time, updated_at: created_time, conversation: convo2, original_type: :youth, youth_translation: 'wat?')
created_time += 1.second
Message.create(user: timmy, created_at: created_time, updated_at: created_time, conversation: convo2, original_type: :youth, youth_translation: 'i\'m just sayin\'')
created_time += 1.second

convo3 = Conversation.create

Message.create(user: thea, created_at: created_time, updated_at: created_time, conversation: convo3, original_type: :old, old_translation: 'Words Words')
created_time += 1.second
Message.create(user: les, created_at: created_time, updated_at: created_time, conversation: convo3, original_type: :old, old_translation: 'Things Things')
created_time += 1.second
Message.create(user: galina, created_at: created_time, updated_at: created_time, conversation: convo3, original_type: :old, old_translation: 'Stuff Stuff')
created_time += 1.second
Message.create(user: les, created_at: created_time, updated_at: created_time, conversation: convo3, original_type: :old, old_translation: 'Junk Junk')
created_time += 1.second
Message.create(user: galina, created_at: created_time, updated_at: created_time, conversation: convo3, original_type: :old, old_translation: 'Huh Huh')
created_time += 1.second
Message.create(user: thea, created_at: created_time, updated_at: created_time, conversation: convo3, original_type: :old, old_translation: 'Yup Yup')

# Translate

Message.all.each { |m| m.translate }
