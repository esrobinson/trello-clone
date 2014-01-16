# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140116022326) do

  create_table "board_admins", :force => true do |t|
    t.integer  "user_id"
    t.integer  "board_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "board_admins", ["board_id"], :name => "index_board_admins_on_board_id"
  add_index "board_admins", ["user_id", "board_id"], :name => "index_board_admins_on_user_id_and_board_id", :unique => true

  create_table "board_memberships", :force => true do |t|
    t.integer  "user_id"
    t.integer  "board_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "board_memberships", ["board_id"], :name => "index_board_memberships_on_board_id"
  add_index "board_memberships", ["user_id", "board_id"], :name => "index_board_memberships_on_user_id_and_board_id", :unique => true

  create_table "boards", :force => true do |t|
    t.string   "name",       :null => false
    t.boolean  "private",    :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "cards", :force => true do |t|
    t.string   "name",                           :null => false
    t.string   "description"
    t.date     "due_date"
    t.boolean  "archived",    :default => false
    t.integer  "list_id",                        :null => false
    t.float    "position",                       :null => false
    t.datetime "created_at",                     :null => false
    t.datetime "updated_at",                     :null => false
  end

  add_index "cards", ["list_id", "position"], :name => "index_cards_on_list_id_and_position", :unique => true

  create_table "checklists", :force => true do |t|
    t.string   "name",       :null => false
    t.float    "position",   :null => false
    t.integer  "card_id",    :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "checklists", ["card_id", "position"], :name => "index_checklists_on_card_id_and_position", :unique => true

  create_table "comments", :force => true do |t|
    t.integer  "user_id",    :null => false
    t.integer  "card_id",    :null => false
    t.string   "body",       :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "comments", ["card_id"], :name => "index_comments_on_card_id"

  create_table "lists", :force => true do |t|
    t.string   "name",       :null => false
    t.float    "position",   :null => false
    t.boolean  "archived",   :null => false
    t.integer  "board_id",   :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "lists", ["board_id", "position"], :name => "index_lists_on_board_id_and_order", :unique => true

  create_table "users", :force => true do |t|
    t.string   "email",           :null => false
    t.string   "password_digest", :null => false
    t.string   "session_token",   :null => false
    t.string   "name"
    t.string   "username",        :null => false
    t.string   "avatar"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["session_token"], :name => "index_users_on_session_token", :unique => true
  add_index "users", ["username"], :name => "index_users_on_username", :unique => true

end
