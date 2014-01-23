class StaticPagesController < ApplicationController

  def index
    if logged_in?
      render :backbone
    else
      render :index
    end
  end

  def backbone
    render :backbone
  end

end
