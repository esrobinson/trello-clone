class Api::ListsController < ApplicationController

  before_filter :require_login

  def index
    @board = Board.find_by_id(params[:board_id])
    @lists = @board.lists.includes(
        :cards => { :checklists =>  :items , :comments => {}}
        )
    render "api/lists/index"
  end

  def create
    @list = List.new(params[:list])
    @board = Board.find_by_id(params[:board_id])
    @list.board = @board
    @list.position = @board.lists.length.to_f
    @list.archived = false
    if @list.save
      render :json => @list
    else
      render :json => @list.errors.full_messages
    end
  end

  def show
    @list = List.where(:id => params[:id]).includes(
        :cards => { :checklists => :items, :comments => {} }
        ).first
    if @list
      render "api/lists/show"
    else
      render :json => "404 Not Found", :status => 404
    end
  end

  def update
    @list = List.where(:id => params[:id]).includes(
        :cards => { :checklists => :items, :comments => {} }
        ).first
    if @list.update_attributes(params[:list])
      render "api/lists/show"
    else
      render :json => @list.errors.full_messages
    end
  end

  def destroy
    @list = List.find_by_id(params[:id])
    @board = @list.board
    @list.destroy
    render :json => @board
  end

  private



end
