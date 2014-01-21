class Api::UsersController < ApplicationController

  before_filter :require_login, :only => [:edit, :update]

  def index
    @users = User.all
    render "/api/users/index"
  end
end
